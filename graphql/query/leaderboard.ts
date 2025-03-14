import { gql } from 'graphql-request';

export const leaderboard = gql`
	query Leaderboard(
		$periodNumber: Int
		$limit: Int
		$seasonId: ID
		$type: RankingType
	) {
		leaderboard(
			periodNumber: $periodNumber
			limit: $limit
			seasonId: $seasonId
			type: $type
		) {
			id
			user {
				id
				name
				avatarUrl
				email
				address
			}
			points
			winGames
			loseGames
			rank
			type
			periodNumber
			rank
			seasonId
		}
	}
`;

export const currentRank = gql`
	query CurrentRank($periodNumber: Int, $seasonId: ID, $type: RankingType) {
		currentRank(periodNumber: $periodNumber, seasonId: $seasonId, type: $type) {
			id
			user {
				id
				name
				avatarUrl
				email
				address
			}
			points
			winGames
			loseGames
			rank
			type
			periodNumber
			seasonId
		}
	}
`;

export const currentLeaderboardSeason = gql`
	query CurrentLeaderboardSeason {
		currentLeaderboardSeason {
			id
			name
			number
			weeklyPeriods
			startDate
		}
	}
`;
