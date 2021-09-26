import cookie from 'cookie';
import loadSession from './session';

import type { GetSession, Handle } from '@sveltejs/kit';
import type { UserSession, SessionRedirect, Locals, Env } from '../types/hooks';

const isRedirect = (el: UserSession | SessionRedirect): el is SessionRedirect => 'redirect' in el;

const getEnv = (): Env => {
	const ptl = import.meta.env.VITE_PROTOCOL;
	const host = import.meta.env.VITE_SSO_HOST;

	if (!(typeof host === 'string')) {
		throw new Error('SSO_HOST is not defined in env');
	}

	return {
		PROTOCOL:
			typeof ptl === 'string' && ['http', 'https'].includes(ptl.toLowerCase())
				? (ptl.toLowerCase() as 'http' | 'https')
				: ('http' as const),
		SSO_HOST: host
	};
};

export const handle: Handle<Locals> = async ({ request, resolve }) => {
	// @mandatory
	if (request.query.has('_method')) {
		request.method = request.query.get('_method').toUpperCase();
	}

	// set locals
	const session = await loadSession(request, getEnv());

	if (isRedirect(session)) {
		return {
			status: 302,
			headers: {
				location: session.redirect
			}
		};
	}

	request.locals.session = session;

	// run request
	const response = await resolve(request);

	// set token
	const cookies = cookie.parse(request.headers.cookie || '');
	if (!cookies.token) {
		response.headers['set-cookie'] = `token=${session.token}; Path=/; HttpOnly`;
	}

	return response;
};

export const getSession: GetSession<Locals> = (request) => {
	return request.locals.session ?? null;
};
