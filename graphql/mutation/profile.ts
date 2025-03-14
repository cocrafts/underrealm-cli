import { gql } from 'graphql-request';

export const updateProfile = gql`
	mutation UpdateProfile($input: MutateProfileInput!) {
		updateProfile(profileInput: $input) {
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
	}
`;
