import { CommandModule } from 'yargs';
import { initializeUmi, createCompressedNft } from 'utils/nft';

interface CreateNftArgs {
  name: string;
  symbol: string;
  uri: string;
  rpc?: string;
}

export const createNftCommand: CommandModule<{}, CreateNftArgs> = {
  command: 'create-nft',
  describe: 'Create a compressed NFT for Under Realm',
  builder: (yargs) => {
    return yargs
      .option('name', {
        alias: 'n',
        describe: 'NFT name',
        type: 'string',
        demandOption: true
      })
      .option('symbol', {
        alias: 's',
        describe: 'NFT symbol',
        type: 'string',
        demandOption: true
      })
      .option('uri', {
        alias: 'u',
        describe: 'Metadata URI',
        type: 'string',
        demandOption: true
      })
      .option('rpc', {
        alias: 'r',
        describe: 'Custom RPC URL',
        type: 'string'
      });
  },
  handler: async (argv) => {
    try {
      const umi = initializeUmi(argv.rpc);
      await createCompressedNft(umi, argv.name, argv.symbol, argv.uri);
      console.log('NFT created successfully');
    } catch (error) {
      console.error('Failed to create NFT:', error);
      process.exit(1);
    }
  }
};