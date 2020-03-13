export const CONSTANT = {
	CONFIG_FILENAME_JS: "scaffold.config.js",
	CONFIG_FILENAME_JSON: "scaffold.config.json",
	CONFIG_FILENAME_JSON5: "scaffold.config.json5",
	CONFIG_FILENAME_YAML: "scaffold.config.yaml",
	CONFIG_FILENAME_YML: "scaffold.config.yml",
	CONFIG_FILENAME_RC: ".scaffoldrc",
	README_FILENAME: "README.md",
	CONTRIBUTOR_IMAGE_URL_HEIGHT: 70,
	GITHUB_DIR_NAME: ".github",
	CODE_OF_CONDUCT_FILENAME: "CODE_OF_CONDUCT.md",
	FUNDING_FILENAME: "FUNDING.yml",
	CONTRIBUTING_FILENAME: "CONTRIBUTING.md",
	LICENSE_FILENAME: "LICENSE.md",
	ESLINT_IDIOMATIC_CODE_STYLE_NAME: "idiomatic",
	ESLINT_GOOGLE_CODE_STYLE_NAME: "google",
	ESLINT_PRETTIER_CODE_STYLE_NAME: "eslint-config-prettier",
	ESLINT_AIRBNB_CODE_STYLE_NAME: "airbnb",
	ESLINT_AIRBNB_CODE_STYLE_HINT: "eslint-config-airbnb",
	ESLINT_XO_CODE_STYLE_NAME: "xo",
	ESLINT_STANDARD_CODE_STYLE_NAME: "standard",
	ESLINT_STANDARD_CODE_STYLE_HINTS: [
		"standard/object-curly-even-spacing",
		"standard/array-bracket-even-spacing",
		"standard/computed-property-even-spacing",
		"standard/no-callback-literal"
	],
	SHIELD_REST_ENDPOINT: "https://img.shields.io/badge",
	PATREON_DONATE_URL: (userId: string) => `https://www.patreon.com/bePatron?u=${userId}`,
	PATREON_BADGE_URL: (username: string) => `https://img.shields.io/endpoint.svg?url=https://shieldsio-patreon.herokuapp.com/${username}`,
	OPEN_COLLECTIVE_DONATE_URL: (projectName: string) => `https://opencollective.com/${projectName}/contribute/`,
	OPEN_COLLECTIVE_CONTRIBUTORS_URL: (projectName: string) => `https://opencollective.com/${projectName}/#contributors`,
	OPEN_COLLECTIVE_SPONSORS_BADGE_URL: (project: string) => `https://opencollective.com/${project}/sponsors.svg?width=500`,
	OPEN_COLLECTIVE_BACKERS_BADGE_URL: (project: string) => `https://opencollective.com/${project}/backers.svg?width=500`
};
