import { gql } from 'graphql-request';

export const card = gql`
	query Card($id: ID!) {
		card(id: $id) {
			id
			components
		}
	}
`;

export const cardCollection = gql`
	query cardCollection($id: ID!) {
		cardCollection(id: $id) {
			id
			creatorId
			name
			cardIds
			cards {
				id
				components
			}
		}
	}
`;

export const cardCollectionsQuery = gql`
	query cardCollections {
		cardCollections {
			id
			name
			creatorId
			cardIds
			cards {
				id
				components
			}
		}
	}
`;
