import fetch from 'node-fetch';
import type { ServerRequest, ServerResponse } from '@sveltejs/kit/types/hooks';

const { API_HOST } = process.env;
if (!API_HOST) {
	throw new Error('API_HOST is not set in env');
}

const readCookies = (cookies: string) => {
	const chunks = cookies.split(/;\s+/);

	const initCookies = {};
	return chunks.reduce((acc, item) => {
		const sep = item.split('=');
		const key = sep.shift();

		if (key.length) {
			acc[decodeURIComponent(key)] = decodeURIComponent(sep.join('='));
		}
		return acc;
	}, initCookies as Record<string, string>);
};

const writeCookies = (res: ServerResponse, field: string, value: string) => {
	res.headers['Set-Cookie'] = [`${queryStringify({ [field]: value })}; SameSite=Strict`];
};

const parseQueryString = (queryString: string) =>
	queryString.split('&').reduce((acc, chunk) => {
		const splitted = chunk.split('=');
		const key = decodeURIComponent(splitted.shift());
		const value = decodeURIComponent(splitted.join('='));
		acc[key] = value;
		return acc;
	}, {} as Record<string, string>);

const queryStringify = (params: Record<string, any>) =>
	Object.keys(params)
		.filter((p) => p && params[p] !== undefined && params[p] !== null)
		.map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
		.join('&');

const fetchToken = async (token: string) => {
	const resp = await fetch(`${API_HOST}/auth/refresh`, {
		headers: { Authorization: `Bearer ${encodeURIComponent(token)}` }
	});
	const { data } = await resp.json();
	if (data) {
		return {
			id: data.user.id,
			name: data.user.name,
			lastname: data.user.lastname,
			email: data.user.email,
			token: data.token
		};
	}
	return null;
};

const fetchNewToken = async (sessionState: string, code: string, returns_to: string) => {
	const url = `${API_HOST}/auth/token?${queryStringify({
		session_state: sessionState,
		code,
		redirect_uri: returns_to
	})}`;

	const resp = await fetch(url);
	const { data } = await resp.json();
	if (data) {
		return {
			id: data.user.id,
			name: data.user.name,
			lastname: data.user.lastname,
			email: data.user.email,
			token: data.token
		};
	}
	return null;
};

/**
 * Remove `session_state` and `code` from URL QueryString
 */
const queryRemoveSession = (query: URLSearchParams) => {
	const edit = new URLSearchParams(query);
	edit.delete('session_state');
	edit.delete('code');
	return edit.toString();
};

/**
 * Create session object. Verify user is logged in, else redirect him to login page.
 */
async function session(req: ServerRequest, res: ServerResponse) {
	const { token } = readCookies(req.headers.cookie);
	const session_state = req.query.get('session_state');
	const code = req.query.get('code');

	// @todo: get the correct protocol
	const protocol = 'http';
	const returns_to = `${protocol}://${req.host}${req.path}${queryRemoveSession(req.query)}`;

	const env = req.locals.env;

	if (token) {
		const user = await fetchToken(token);
		if (user) {
			return { user, token, env };
		}
	}

	if (session_state && code) {
		const user = await fetchNewToken(session_state, code, returns_to);
		if (user) {
			const { token } = user;
			writeCookies(res, 'token', token);
			return { user, token, env };
		}
	}

	return {
		redirect: `${API_HOST}/auth/login?${queryStringify({
			redirect_uri: returns_to
		})}`,
		env
	};
}

export default function (req: ServerRequest, res: ServerResponse) {
	try {
		console.log({ req, res });
	} catch (e) {
		throw new Error('Error at authentication');
	}
}
