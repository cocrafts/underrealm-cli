import { gql } from 'graphql-request';

export const decks = gql`
	query decks {
		decks {
			id
			name
			cards {
				id
				components
			}
		}
	}
`;
