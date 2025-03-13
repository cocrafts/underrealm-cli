#!/usr/bin/env node

import { Command } from 'commander';
import { createNftCommand } from './commands/createNft';

const program = new Command();

program
  .name('urc')
  .description('Onchain CLI toolset for Under Realm game')
  .version('1.0.0');

// Register commands
program.addCommand(createNftCommand);

program.parse();
