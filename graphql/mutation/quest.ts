import { gql } from 'graphql-request';

export const createQuestAction = gql`
	mutation CreateQuestAction($questId: ID!) {
		createQuestAction(questId: $questId) {
			id
			# userId
			questId
			claimedPoints
		}
	}
`;
