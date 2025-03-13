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

### Mint NFTs from JSON
Mint multiple NFTs from a JSON file using Candy Machine:

```bash
yarn start mint-nfts --file ./sample-nfts.json --candyMachine CANDY_MACHINE_ADDRESS
```

JSON file format:
```json
[
  {
    "name": "Card Name",
    "symbol": "CARD",
    "uri": "https://metadata-url.com/card.json",
    "collection": "Collection Name",
    "sellerFeeBasisPoints": 500
  }
]
```

## Key Features
- Create and manage NFT for Under Realm game
- Mint NFTs using compressed Core NFT (Metaplex Umi)
- Batch mint NFTs from JSON files using Candy Machine
