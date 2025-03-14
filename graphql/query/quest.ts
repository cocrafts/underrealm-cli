import { gql } from 'graphql-request';

export const quests = gql`
	query Quests($status: QuestStatus = LIVE) {
		quests(status: $status) {
			id
			title
			description
			type
			url
			status
			points
			repeatType
			createdAt
			isCompleted
			requiredDuels
			action {
				id
				userId
				questId
				claimedPoints
				date
				weekNumber
				year
				createdAt
			}
		}
	}
`;
