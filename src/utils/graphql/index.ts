import type { Sdk } from './sdk';
import { getSdk } from './sdk';

import { GraphQLClient } from 'graphql-request';

export const graphqlClient: Sdk = getSdk(
	new GraphQLClient(process.env.GRAPHQL_API_ENDPOINT as string, {
		requestMiddleware: async (request) => {
			return {
				...request,
				headers: {
					...request.headers,
					['Content-Type']: 'application/json',
					authorization: `Bearer ${process.env.GRAPHQL_API_JWT}`,
				},
			};
		},
	}),
);

export * from './sdk';
