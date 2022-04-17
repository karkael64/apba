import cookie from 'cookie';
// import setLocalSession from './session';
import type { GetSession, Handle } from '@sveltejs/kit';
import type { Env, UserSession } from '../types/hooks';

const env: Env = (() => {
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
})();

export const handle: Handle = async ({ event: request, resolve }) => {
	// set locals
	request.locals = { env };

	// const loginRedirect = setLocalSession(request);
	// if (loginRedirect) {
	// 	return loginRedirect;
	// }

	// run request
	const response = await resolve(request);
	const session = request.locals.session as UserSession;

	// set token
	const cookies = cookie.parse(request.request.headers.get('cookie') || '');
	if (!cookies.token && session?.token) {
		response.headers['set-cookie'] = `token=${session.token}; Path=/; HttpOnly`;
	}

	return response;
};

export const getSession: GetSession = (request) => {
	return request.locals.session ?? null;
};
