import type { Req, SessionRedirect, UserSession } from '../types/hooks';

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

const queryStringify = (params: Record<string, any>) =>
	Object.keys(params)
		.filter((p) => p && params[p] !== undefined && params[p] !== null)
		.map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
		.join('&');

const fetchToken = async (host: string, token: string): Promise<UserSession | null> => {
	const resp = await fetch(`${host}/auth/refresh`, {
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

const fetchNewToken = async (
	host: string,
	sessionState: string,
	code: string,
	returns_to: string
): Promise<UserSession | null> => {
	const url = `${host}/auth/token?${queryStringify({
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
async function getSession(req: Req): Promise<UserSession | SessionRedirect> {
	const { token } = readCookies(req.headers.cookie ?? '');
	const { PROTOCOL: ptl, SSO_HOST: host } = req.locals.env;

	if (token) {
		const user = await fetchToken(host, token);
		if (user) {
			return user;
		}
	}

	const session_state = req.query.get('session_state');
	const code = req.query.get('code');
	const returns_to = `${ptl}://${req.host}${req.path}${queryRemoveSession(req.query)}`;

	if (session_state && code) {
		const user = await fetchNewToken(host, session_state, code, returns_to);
		if (user) {
			return user;
		}
	}

	return {
		redirect: `${host}/auth/login?${queryStringify({
			redirect_uri: returns_to
		})}`
	};
}

const isRedirect = (el: UserSession | SessionRedirect): el is SessionRedirect => 'redirect' in el;

export default async function (req: Req) {
	try {
		const session = await getSession(req);
		if (isRedirect(session)) {
			return {
				status: 302,
				headers: {
					location: session.redirect
				}
			};
		}
		req.locals.session = session;
		return null;
	} catch (e) {
		throw new Error('Error at authentication');
	}
}
