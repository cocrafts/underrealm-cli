#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { createNftCommand } from './commands/createNft';

yargs(hideBin(process.argv))
  .scriptName('urc')
  .usage('Usage: $0 <command> [options]')
  .epilogue('Onchain CLI toolset for Under Realm game')
  .version('1.0.0')
  .command(createNftCommand)
  .demandCommand(1, 'You need to specify a command')
  .strict()
  .help()
  .alias('h', 'help')
  .parse();
