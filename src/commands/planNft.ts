import type { CardEntity } from 'utils/card';
import { graphqlClient } from 'utils/graphql';
import type { CommandModule } from 'yargs';

export const planNftCommand: CommandModule<object, object> = {
	command: 'plan-nft',
	describe: '',
	handler: async () => {
		const response = await graphqlClient.cardCollection({
			id: '67bf07b2e9638c576f299b36',
		});
		const cards: CardEntity[] = response.cardCollection?.cards || [];
		console.log(`Going to mint ${cards.length} cards:`);
		for (const card of cards) {
			console.log(card.components.CardMetadata.name);
		}
	},
};
