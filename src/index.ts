#!/usr/bin/env node
require('dotenv').config();

import { createNftCommand } from './commands/createNft';
import { mintNftsCommand } from './commands/mintNfts';
import { pingCommand } from './commands/ping';
import { planNftCommand } from './commands/planNft';

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
	.scriptName('urc')
	.usage('Usage: $0 <command> [options]')
	.epilogue('Onchain CLI toolset for Under Realm game')
	.version('1.0.0')
	.command(pingCommand)
	.command(createNftCommand)
	.command(planNftCommand)
	.command(mintNftsCommand)
	.demandCommand(1, 'You need to specify a command')
	.strict()
	.help()
	.alias('h', 'help')
	.parse();
