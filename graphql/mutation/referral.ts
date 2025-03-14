import { gql } from 'graphql-request';

export const makeReferral = gql`
	mutation MakeReferral($referralCode: String!) {
		makeReferral(referralCode: $referralCode)
	}
`;
