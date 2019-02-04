export const SHARED_OPTIONS = {
	config: {
		shortHand: "c",
		type: "string" as "string",
		description: "An (optional) path to the scaffold config to use"
	},
	debug: {
		shortHand: "d",
		type: "boolean" as "boolean",
		description: "Whether to print debug information"
	},
	verbose: {
		shortHand: "v",
		type: "boolean" as "boolean",
		description: "Whether to print verbose information"
	},
	silent: {
		shortHand: "s",
		type: "boolean" as "boolean",
		description: "Whether to not print anything"
	},
	yes: {
		shortHand: "y",
		type: "boolean" as "boolean",
		description: "Whether or not to auto-select 'yes' for all prompts"
	}
};
