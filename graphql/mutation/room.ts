import { gql } from 'graphql-request';

export const confirmStartDuel = gql`
	mutation ConfirmStartDuel($roomId: ID!, $approve: Boolean) {
		confirmStartDuel(roomId: $roomId, approve: $approve)
	}
`;

export const joinOrCreateRoom = gql`
	mutation JoinOrCreateRoom($code: String!) {
		joinOrCreateRoom(code: $code)
	}
`;

export const confirmJoinRoom = gql`
	mutation ConfirmJoinRoom($roomId: ID!, $deckId: String!, $action: RoomAction) {
		confirmJoinRoom(roomId: $roomId, deckId: $deckId, action: $action)
	}
`;

export const removeUserFromRoom = gql`
	mutation removeUserFromRoom {
		removeUserFromRoom
	}
`;
