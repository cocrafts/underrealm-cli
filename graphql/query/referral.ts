import { gql } from 'graphql-request';

export const referralHistory = gql`
	query ReferralHistory {
		referralHistory {
			id
			referrerId
			refereeId
			refereeUser {
				id
				solanaWallet
				email
			}
			claimedPoints
			createdAt
		}
	}
`;
