import { env } from '@/env';
import { GitHub } from 'arctic';

export const github = new GitHub(
	env.GITHUB_CLIENT_ID,
	env.GITHUB_CLIENT_SECRET,
	null,
);

interface CreateGithubAuthorizationUrlParams {
	state: string;
}

export const createGithubAuthorizationUrl = (
	params: CreateGithubAuthorizationUrlParams,
) => {
	return github.createAuthorizationURL(params.state, []);
};
