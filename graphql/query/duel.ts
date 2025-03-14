import { gql } from '@apollo/client';

export const duelTracking = gql`
	query DuelTracking {
		duelTrackings {
			userId
			type
			date
			weekNumber
			year
			totalDuels
			createdAt
		}
	}
`;

export const duelResult = gql`
	query duelResult($duelId: ID!, $userId: ID!) {
		duelResult(duelId: $duelId, userId: $userId) {
			duelId
			userId
			newXP
			previousXP
			stats {
				victoryXP
				defeatXP
				bonusXP
			}
		}
	}
`;

export const duelScenarios = gql`
	query duelScenarios($mainCardId: ID!) {
		duelScenarios(mainCardId: $mainCardId) {
			name
			description
			mainCard
			initialECS {
				config
				state
				entities
			}
			cardMap {
				cardId
				entityId
			}
		}
	}
`;
