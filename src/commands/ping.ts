import type { CommandModule } from 'yargs';

export const pingCommand: CommandModule<object, object> = {
	command: 'ping',
	describe: 'Just a simple ping command for debug',
	handler: async (argv) => {
		console.log('pong!', argv);
	},
};
