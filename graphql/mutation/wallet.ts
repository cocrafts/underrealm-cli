import { gql } from 'graphql-request';

export const requestWalletMessage = gql`
	mutation RequestWalletMessage(
		$wallet: String!
		$network: Network!
		$type: WalletMessageType
	) {
		requestWalletMessage(wallet: $wallet, network: $network, type: $type)
	}
`;

export const verifyWalletAndClaimToken = gql`
	mutation VerifyWalletAndClaimToken(
		$message: String!
		$network: Network!
		$signature: String!
		$wallet: String!
	) {
		verifyWalletAndClaimToken(
			message: $message
			network: $network
			signature: $signature
			wallet: $wallet
		)
	}
`;

export const verifyAndLinkWallet = gql`
	mutation VerifyAndLinkWallet(
		$message: String!
		$network: Network!
		$signature: String!
		$wallet: String!
	) {
		verifyAndLinkWallet(
			message: $message
			network: $network
			signature: $signature
			wallet: $wallet
		)
	}
`;
