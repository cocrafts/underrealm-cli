import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: 'http://localhost:3005/graphql',
	documents: ['graphql/mutation/*.ts', 'graphql/query/*.ts'],
	generates: {
		'./schema.graphql': {
			plugins: ['schema-ast'],
		},
		'./src/utils/graphql/sdk.ts': {
			plugins: [
				'typescript',
				'typescript-operations',
				'typescript-graphql-request',
			],
		},
	},
};

export default config;
