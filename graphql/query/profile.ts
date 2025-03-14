import { gql } from 'graphql-request';

export const profileFields = gql`
	fragment ProfileFields on Profile {
		id
		name
		solanaWallet
		email
		points
		avatarUrl
		telegramId
		discordId
		twitterId
		referralCode
	}
`;

export const profile = gql`
	${profileFields}
	query Profile {
		profile {
			...ProfileFields
			referred {
				id
				referrerId
				createdAt
			}
		}
	}
`;
