import { gql } from 'graphql-request';

export const createDeck = gql`
	mutation createDeck($name: String!, $cardIds: [ID!]!) {
		createDeck(name: $name, cardIds: $cardIds) {
			id
			name
			cards {
				id
				components
			}
		}
	}
`;

export const updateDeck = gql`
	mutation updateDeck($id: ID!, $name: String, $cardIds: [ID!]!) {
		updateDeck(id: $id, name: $name, cardIds: $cardIds) {
			id
			name
			cards {
				id
				components
			}
		}
	}
`;
