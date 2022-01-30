import cookie from 'cookie';
// import setLocalSession from './session';
import type { GetSession, Handle } from '@sveltejs/kit';
import type { Locals, Env } from '../types/hooks';

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

export const handle: Handle<Locals> = async ({ request, resolve }) => {
	// @mandatory
	if (request.url.searchParams.has('_method')) {
		request.method = request.url.searchParams.get('_method').toUpperCase();
	}

	// set locals
	request.locals = { env } as Locals;

	// const loginRedirect = setLocalSession(request);
	// if (loginRedirect) {
	// 	return loginRedirect;
	// }

	// run request
	const response = await resolve(request);

	// set token
	const cookies = cookie.parse(request.headers.cookie || '');
	if (!cookies.token && request.locals.session?.token) {
		response.headers['set-cookie'] = `token=${request.locals.session.token}; Path=/; HttpOnly`;
	}

	return response;
};

export const getSession: GetSession<Locals> = (request) => {
	return request.locals.session ?? null;
};
