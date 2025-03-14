declare namespace NodeJS {
	interface ProcessEnv {
		SOLANA_CLUSTER: string;
		GRAPHQL_API_ENDPOINT: string;
		GRAPHQL_API_JWT: string;
		DEFAULT_CARD_COLLECTION: string;
	}
}
