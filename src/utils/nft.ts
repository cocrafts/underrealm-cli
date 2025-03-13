import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { create } from '@metaplex-foundation/mpl-core';
import { createTree } from '@metaplex-foundation/mpl-bubblegum';
import { clusterApiUrl } from '@solana/web3.js';

export const initializeUmi = (rpcEndpoint = clusterApiUrl('devnet')) => {
  return createUmi(rpcEndpoint);
};

export const createCompressedNft = async (
  umi: any,
  name: string,
  symbol: string,
  uri: string
) => {
  console.log(`Creating compressed NFT: ${name} (${symbol})`);
};
