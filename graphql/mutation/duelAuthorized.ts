import { gql } from 'graphql-request';

export const createCardCollectionMutation = gql`
	mutation createCardCollection($input: CreateCardCollectionInput!) {
		createCardCollection(input: $input) {
			id
			name
			creatorId
			cardIds
		}
	}
`;

export const createCardMutation = gql`
	mutation createCard($collectionId: ID!) {
		createCard(collectionId: $collectionId)
	}
`;

export const updateCardMutation = gql`
	mutation updateCard(
		$collectionId: ID!
		$cardId: ID!
		$components: [GameComponent]!
	) {
		updateCard(
			collectionId: $collectionId
			cardId: $cardId
			components: $components
		)
	}
`;

export const deleteCardComponentMutation = gql`
	mutation deleteCardComponent(
		$collectionId: ID!
		$cardId: ID!
		$componentType: String!
	) {
		deleteCardComponent(
			collectionId: $collectionId
			cardId: $cardId
			componentType: $componentType
		)
	}
`;

export const deleteCardMutation = gql`
	mutation deleteCard($collectionId: ID!, $cardId: ID!) {
		deleteCard(collectionId: $collectionId, cardId: $cardId)
	}
`;

export const makeDuelMutation = gql`
	mutation makeDuel($input: MakeDuelInput!) {
		makeDuel(input: $input) {
			id
			type
			initialECS {
				config
				state
				entities
			}
			ecs {
				config
				state
				entities
			}
			playerIds
			tokens
		}
	}
`;

export const createDuelScenarioMutation = gql`
	mutation createDuelScenario($input: DuelScenarioInput!) {
		createDuelScenario(input: $input) {
			name
			description
			cardMap {
				entityId
				cardId
			}
			initialECS {
				config
				state
				entities
			}
		}
	}
`;
