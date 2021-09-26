import type { ServerRequest } from '@sveltejs/kit/types/hooks';

export type Env = {
	PROTOCOL: 'http' | 'https';
	SSO_HOST: string;
};

export type UserSession = {
	id: string;
	name: string;
	lastname: string;
	email: string;
	token: string;
};

export type Locals = { session: UserSession; env: Env };

export type Req<Body = unknown> = ServerRequest<Locals, Body>;

export type SessionRedirect = {
	redirect: string;
};
