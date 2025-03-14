import fs from 'fs';

import { initializeUmi, loadNftsFromJson, mintNftsFromJson } from 'utils/nft';
import type { CommandModule } from 'yargs';

interface MintNftArgs {
	file: string;
	candyMachine: string;
	rpc?: string;
}

export const mintNftsCommand: CommandModule<object, MintNftArgs> = {
	command: 'mint-nfts',
	describe: 'Mint NFTs from a JSON file using Candy Machine',
	builder: (yargs) => {
		return yargs
			.option('file', {
				alias: 'f',
				describe: 'Path to JSON file containing NFT data',
				type: 'string',
				demandOption: true,
			})
			.option('candyMachine', {
				alias: 'c',
				describe: 'Candy Machine address',
				type: 'string',
				demandOption: true,
			})
			.option('rpc', {
				alias: 'r',
				describe: 'Custom RPC URL',
				type: 'string',
			});
	},
	handler: async (argv) => {
		try {
			// Check if file exists
			if (!fs.existsSync(argv.file)) {
				console.error(`Error: File not found: ${argv.file}`);
				process.exit(1);
			}

			const umi = initializeUmi(argv.rpc);
			const nfts = loadNftsFromJson(argv.file);

			if (nfts.length === 0) {
				console.error('Error: No NFTs found in the JSON file');
				process.exit(1);
			}

			await mintNftsFromJson(umi, argv.candyMachine, nfts);
		} catch (error) {
			console.error('Failed to mint NFTs:', error);
			process.exit(1);
		}
	},
};

