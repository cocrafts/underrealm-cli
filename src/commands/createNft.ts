import { Command } from 'commander';
import { initializeUmi, createCompressedNft } from 'utils/nft';

export const createNftCommand = new Command('create-nft')
  .description('Create a compressed NFT for Under Realm')
  .requiredOption('-n, --name <name>', 'NFT name')
  .requiredOption('-s, --symbol <symbol>', 'NFT symbol')
  .requiredOption('-u, --uri <uri>', 'Metadata URI')
  .option('-r, --rpc <url>', 'Custom RPC URL')
  .action(async (options) => {
    try {
      const umi = initializeUmi(options.rpc);
      await createCompressedNft(umi, options.name, options.symbol, options.uri);
      console.log('NFT created successfully');
    } catch (error) {
      console.error('Failed to create NFT:', error);
      process.exit(1);
    }
  });