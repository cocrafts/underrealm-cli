import { gql } from 'graphql-request';

export const createPracticeDuel = gql`
	mutation createPracticeDuel($deckId: String!) {
		createPracticeDuel(deckId: $deckId) {
			id
			jwt
		}
	}
`;
