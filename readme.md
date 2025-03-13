# Under Realm Onchain Tool

Onchain CLI toolset for Under Realm game.

## Installation

```bash
# Clone the repository
git clone https://github.com/your-username/ur-onchain.git
cd ur-onchain

# Install dependencies
yarn install

# Build the project
yarn build
```

## Usage

### Create NFT
Create a compressed NFT for Under Realm cards:

```bash
yarn start create-nft --name "Card Name" --symbol "CARD" --uri "https://metadata-url.com/card.json"
```

Optional: Specify a custom RPC URL:
```bash
yarn start create-nft --name "Card Name" --symbol "CARD" --uri "https://metadata-url.com/card.json" --rpc "https://your-rpc-url.com"
```

## Key Features
- Create and manage NFT for Under Realm game
- Mint NFTs using compressed Core NFT (Metaplex Umi)
