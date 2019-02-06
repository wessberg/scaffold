<!-- SHADOW_SECTION_LOGO_START -->

<div><img alt="Logo" src="https://raw.githubusercontent.com/wessberg/scaffold/master/documentation/asset/logo.png" height="80"   /></div>

<!-- SHADOW_SECTION_LOGO_END -->

<!-- SHADOW_SECTION_DESCRIPTION_SHORT_START -->

> A virtual Open Source project maintainer

<!-- SHADOW_SECTION_DESCRIPTION_SHORT_END -->

<!-- SHADOW_SECTION_BADGES_START -->

<a href="https://npmcharts.com/compare/%40wessberg%2Fscaffold?minimal=true"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/%40wessberg%2Fscaffold.svg"    /></a>
<a href="https://david-dm.org/wessberg/scaffold"><img alt="Dependencies" src="https://img.shields.io/david/wessberg%2Fscaffold.svg"    /></a>
<a href="https://github.com/wessberg/scaffold/graphs/contributors"><img alt="Contributors" src="https://img.shields.io/github/contributors/wessberg%2Fscaffold.svg"    /></a>
<a href="https://github.com/prettier/prettier"><img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"    /></a>
<a href="https://opensource.org/licenses/MIT"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg"    /></a>
<a href="https://www.patreon.com/bePatron?u=11315442"><img alt="Support on Patreon" src="https://img.shields.io/badge/patreon-donate-green.svg"    /></a>

<!-- SHADOW_SECTION_BADGES_END -->

<!-- SHADOW_SECTION_DESCRIPTION_LONG_START -->

## Description

<!-- SHADOW_SECTION_DESCRIPTION_LONG_END -->

Scaffold is a tool that makes it easy for you to have a welcoming, professional-looking Github repository.
It helps you generate and continuously maintain your `README.md`, `LICENSE.md`, `CONTRIBUTING.md`, and `CODE_OF_CONDUCT.md` files by looking at the files inside your repository.
This README is generated by Scaffold.

<!-- SHADOW_SECTION_FEATURES_START -->

### Features

<!-- SHADOW_SECTION_FEATURES_END -->

Scaffold works out of the box without any configuration. Some highlights include:

- Generation of relevant badges for your README
- Generating of maintainer tables, including avatars, social links, and contact details
- Generation of Patreon and Open Collective backer/sponsor images that doesn't require any maintenance
- Generation of `LICENSE.md` files for a large variety of popular licenses.
- Generation of `CODE_OF_CONDUCT.md` files
- Generation of `CONTRIBUTING.md` files.

<!-- SHADOW_SECTION_FEATURE_IMAGE_START -->

<div><img alt="Feature image" src="https://raw.githubusercontent.com/wessberg/scaffold/master/documentation/asset/feature.gif" height="240"   /></div><br>

<!-- SHADOW_SECTION_FEATURE_IMAGE_END -->

<!-- SHADOW_SECTION_TOC_START -->

## Table of Contents

- [Description](#description)
  - [Features](#features)
- [Table of Contents](#table-of-contents)
- [Install](#install)
  - [NPM](#npm)
  - [Yarn](#yarn)
  - [Run once with NPX](#run-once-with-npx)
- [Usage](#usage)
  - [Configuration](#configuration)
    - [Configuration options](#configuration-options)
  - [CLI](#cli)
    - [The `readme`-command](#the-readme-command)
    - [The `license`-command](#the-license-command)
    - [The `contributing`-command](#the-contributing-command)
    - [The `coc`-command (Code Of Conduct)](#the-coc-command-code-of-conduct)
  - [Readme structure](#readme-structure)
  - [Readme sections](#readme-sections)
    - [`toc` (Table of Contents)](#toc-table-of-contents)
  - [`logo`](#logo)
  - [`badges`](#badges)
  - [`description_short`](#description_short)
  - [`description_long`](#description_long)
  - [`features`](#features)
  - [`feature_image`](#feature_image)
  - [`install`](#install)
  - [`usage`](#usage)
  - [`contributing`](#contributing)
  - [`maintainers`](#maintainers)
  - [`faq`](#faq)
  - [`backers`](#backers)
  - [`license`](#license)
- [Contributing](#contributing)
- [Maintainers](#maintainers)
- [Backers](#backers)
  - [Patreon](#patreon)
  - [FAQ](#faq)
    - [Do you support custom templates?](#do-you-support-custom-templates)
    - [How do you determine the Code Style of the project?](#how-do-you-determine-the-code-style-of-the-project)
- [License](#license)

<!-- SHADOW_SECTION_TOC_END -->

<!-- SHADOW_SECTION_INSTALL_START -->

## Install

### NPM

```
$ npm install @wessberg/scaffold
```

### Yarn

```
$ yarn add @wessberg/scaffold
```

<!-- SHADOW_SECTION_INSTALL_END -->

### Run once with NPX

```
$ npx @wessberg/scaffold
```

<!-- SHADOW_SECTION_USAGE_START -->

## Usage

<!-- SHADOW_SECTION_USAGE_END -->

### Configuration

Scaffold is highly configurable. You can provide a configuration in a variety of ways:

- As a `scaffold` property inside your `package.json` file.
- As a `scaffold.config.js` file within your repository root
- As a `scaffold.config.json` file within your repository root
- As a `scaffold.config.json5` file within your repository root
- As a `.scaffoldrc` (JSON-formatted) file within your repository root

#### Configuration options

```json5
{
	// If an URL to a logo is given, a logo will be placed within generated or updated README files at the very top
	logo: {
		url: "",
		height: 80
	},
	// If an URL to a feature image is given, a feature image will be placed within generated or updated README files
	featureImage: {
		url: "",
		height: 180
	},
	// If Patreon and/or Open Collective donation options is given, badges and backer/sponsor shields will be generated and added to generated or updated README files
	donate: {
		patreon: {
			userId: ""
		},
		openCollective: {
			project: ""
		}
	},
	readme: {
		badges: {
			// The given iterable of SectionKinds will never be added to generated or updated READMEs
			// Can be any of the following: 'toc', 'logo', 'badges', 'description_short', 'description_long', 'features', 'feature_image', 'usage', 'install', 'contributing', 'maintainers', 'faq', 'backers', and 'license'
			exclude: []
		},
		sections: {
			// The given iterable of BadgeKinds will never be added to generated or updated READMEs.
			// Can be any of the following: 'downloads', 'dependencies', 'npm', 'contributors', 'license', 'patreon', 'open_collective_donate', 'open_collective_backers', 'open_collective_sponsors', and 'code_style'
			exclude: []
		}
	},
	// By default, Scaffold will try to locate a Prettier config within the project. You can also just provide it or override the Prettier options here
	prettier: {}
}
```

### CLI

```
$ scaffold --help

Usage: scaffold [options] [command]

Options:
  -h, --help              output usage information

Commands:
  coc [options]           Generates a CODE_OF_CONDUCT.md file
  contributing [options]  Generates a CONTRIBUTING.md file
  license [options]       Generates a LICENSE.md file
  readme [options]        Generates a README.md file
```

#### The `readme`-command

```
$ scaffold readme --help
  Usage: readme [options]

  Generates a README.md file

  Options:
    -c, --config [arg]       An (optional) path to the scaffold config to use
    -d, --debug [arg]        Whether to print debug information
    -v, --verbose [arg]      Whether to print verbose information
    -s, --silent [arg]       Whether to not print anything
    -y, --yes [arg]          Whether or not to auto-select 'yes' for all prompts
    --section.exclude [arg]  The comma-separated sections to exclude from the generated README.md
    --badge.exclude [arg]    The comma-separated badges to exclude from the generated README.md
    -h, --help               output usage information
```

The `readme` command will generate or update a `README.md` file. This README is generated via this command.
The sections of the README will vary depending on your configuration as well as the state of your repository.

If a `README.md` file already exists within the repository, you will be prompted for permission to overwrite it if it has changed,
unless the `--yes` option is given (see above).

#### The `license`-command

```
$ scaffold license --help
  Usage: license [options]

  Generates a LICENSE.md file

  Options:
    -c, --config [arg]   An (optional) path to the scaffold config to use
    -d, --debug [arg]    Whether to print debug information
    -v, --verbose [arg]  Whether to print verbose information
    -s, --silent [arg]   Whether to not print anything
    -y, --yes [arg]      Whether or not to auto-select 'yes' for all prompts
    -l, --license [arg]  Override the license to use generate
    -h, --help           output usage information
```

The `license` command will generate or update a `LICENSE.md` file. See [this file](./LICENSE.md) for an example output.
It will attempt to find the license for the project within the `package.json` file or by parsing the existing
`LICENSE.md` file (if it exists) to try to determine a license.

You can override the discovery algorithm by explicitly providing a license via the `--license` flag (see above).

If a `LICENSE.md` file already exists within the repository, you will be prompted for permission to overwrite it
if it has changed, unless the `--yes` option is given (see above).

#### The `contributing`-command

```
$ scaffold contributing --help
  Usage: contributing [options]

  Generates a CONTRIBUTING.md file

  Options:
    -c, --config [arg]   An (optional) path to the scaffold config to use
    -d, --debug [arg]    Whether to print debug information
    -v, --verbose [arg]  Whether to print verbose information
    -s, --silent [arg]   Whether to not print anything
    -y, --yes [arg]      Whether or not to auto-select 'yes' for all prompts
    -h, --help           output usage information
```

The `contributing` command will generate or update a `CONTRIBUTING.md` file in a friendly language. See [this file](./CONTRIBUTING.md) for an example output.
It will parse the package.json for the author and/or contributors and use them within the generated file if possible.

If a `CONTRIBUTING.md` file already exists within the repository, you will be prompted for permission to overwrite it
if it has changed, unless the `--yes` option is given (see above).

#### The `coc`-command (Code Of Conduct)

```
$ scaffold coc --help
Usage: coc [options]

Generates a CODE_OF_CONDUCT.md file

Options:
  -c, --config [arg]   An (optional) path to the scaffold config to use
  -d, --debug [arg]    Whether to print debug information
  -v, --verbose [arg]  Whether to print verbose information
  -s, --silent [arg]   Whether to not print anything
  -y, --yes [arg]      Whether or not to auto-select 'yes' for all prompts
  -h, --help           output usage information
```

The `coc` command will generate or update a Code Of Conduct file based on the [Contributor Covenant v1.4.1](https://www.contributor-covenant.org/).
All project maintainers listed in the `package.json` (either through the `author` or `contributors` fields) file located in the repository root will be
marked as Code Of Conduct enforcers. If a `CODE_OF_CONDUCT.md` file already exists within the repository, you will be prompted for permission to overwrite it
if it has changed, unless the `--yes` option is given (see above).

### Readme structure

The README is the heart of your Open source repository. The same goes for Scaffold.
When you run the `readme` command, a README will be generated (or your existing README will be upgraded) to a structure that includes section markers that looks something like this:

```markdown
<!-- SHADOW_SECTION_FAQ_START -->

### FAQ

<!-- SHADOW_SECTION_FAQ_END -->
```

The area inside the START- and END comments is _dynamic_ and will be overridden for each time the `readme` command is run. This makes your README _living_, in the sense that
scaffold can inject, remove, or even alter existing sections based on changes in your repository such as when you get new maintainers, you change your code style, your logo is updated, or something else.

The static parts of your README is anything not surrounded by those START- and END comments. These are the parts where you can write freely. Don't worry - those parts won't be overridden by Scaffold.

### Readme sections

There are numerous possible README sections. You can exclude those you don't want, either via [a CLI option to the `readme` command](#the-readme-command), or via [a Scaffold config](#configuration).
Some of those sections may only be relevant if your project is in a state that allow them.

#### `toc` (Table of Contents)

The _Table of Contents_ section is auto-generated and will look at the contents of your README and generate a fully-fledged Table of Contents with relative links to the various sections of your README.
This gives the readers of your README an easy way of getting an overview as well as navigating your README.

### `logo`

The _logo_ section is auto-generated and will appear at the very top of your README and give your readers immediate visual feedback. This section won't appear if you don't provide a logo in the [as a config option](#configuration).

### `badges`

The _badges_ section is auto-generated and will appear immediately below the logo (if it has any) in your README and will vary depending on the state of your project as well as your [configuration](#configuration).

The following badges are possible:

| Badge                      | Description                                                                       |
| -------------------------- | --------------------------------------------------------------------------------- |
| `downloads`                | The amount of times your package has been downloaded within the past month        |
| `dependencies`             | The status of your project dependencies (e.g. whether or not they are up-to-date) |
| `npm`                      | The published NPM version of your project                                         |
| `contributors`             | The amount of contributors your project has                                       |
| `license`                  | The discovered license of your project (if it has any)                            |
| `code_style`               | Shows the discovered code style(s) of your project                                |
| `patreon`                  | Encourages donations to you via Patreon                                           |
| `open_collective_donate`   | Encourages donations to your project via Open Collective                          |
| `open_collective_backers`  | Shows the amount of Open Collective backers                                       |
| `open_collective_sponsors` | Shows the amount of Open Collective sponsors                                      |

### `description_short`

The _description_short_ section is auto-generated and will show the `description` property of your `package.json` as a citation. It should be short and catchy for maximum effect.

### `description_long`

The _description_long_ section is where you can explain what your project is all about. This section is completely free for you to write.

### `features`

The _features_ section is where you can list some highlights of your project. This section is completely free for you to write.

### `feature_image`

The _feature_image_ section is auto-generated and will only be visible if you provide a feature image [as a config option](#configuration).
This should preferably be a static image or even better, an animation showing your project in action.

### `install`

The _install_ section is auto-generated and provides instructions on how to install your library via NPM and Yarn.

### `usage`

The _usage_ section is where you can provide instructions on how to actually use your project/library/tool/framework/app. This section is completely free for you to write.

### `contributing`

The _contributing_ section is auto-generated and will only appear if your project has a `CONTRIBUTING.md` file (which can be generated [via the `contributing` command](#the-contributing-command)).
This section will simply reference the `CONTRIBUTING.md` file so that readers know that your project is contribution-friendly.

### `maintainers`

The _maintainers_ section is auto-generated and lists all of the project maintainers found in the `package.json` file (via the `author` and/or `contributors` fields) in a nice table format.

Additional metadata can be provided in the `package.json` file per author to further enhance what data can be shown about contributors. For example:

```json5
// Inside package.json
{
	contributors: [
		{
			name: "John Done",
			email: "john@doe.com",
			url: "https://john.doe",

			// The following three fields are enhancements
			imageUrl: "https://john.doe/avatar.png",
			role: "Lead Developer",
			twitter: "JohnDoe"
		}
	]
}
```

As seen in the code example above, contributors can be extended with the following optional properties:

| Property   | Description                                                                                |
| ---------- | ------------------------------------------------------------------------------------------ |
| `imageUrl` | An avatar that should be displayed above the rest of the information about the contributor |
| `role`     | The role of the contributor within the project.                                            |
| `twitter`  | The Twitter handle for the contributor                                                     |

### `faq`

The _faq_ section is where you can address common (or anticipated) questions that have arisen or may arise in the future. This section is completely free for you to write.

### `backers`

The _backers_ section is auto-generated and includes image grids of your sponsors/backers on Patreon and Open Collective. Because these grids are pure images, they require no manual maintenance
and will immediately reflect any changes to your existing pool of backers and sponsors.

### `license`

The _license_ section is auto-generated and will only appear if a license could be found within your repository. It lists the license, copyright year, and copyright holder of your project.

<!-- SHADOW_SECTION_CONTRIBUTING_START -->

## Contributing

Do you want to contribute? Awesome! Please follow [these recommendations](./CONTRIBUTING.md).

<!-- SHADOW_SECTION_CONTRIBUTING_END -->

<!-- SHADOW_SECTION_MAINTAINERS_START -->

## Maintainers

| <img alt="Frederik Wessberg" src="https://avatars2.githubusercontent.com/u/20454213?s=460&v=4" height="70"   />                   |
| --------------------------------------------------------------------------------------------------------------------------------- |
| [Frederik Wessberg](mailto:frederikwessberg@hotmail.com)<br>[@FredWessberg](https://twitter.com/FredWessberg)<br>_Lead Developer_ |

<!-- SHADOW_SECTION_MAINTAINERS_END -->

<!-- SHADOW_SECTION_BACKERS_START -->

## Backers

### Patreon

[Become a backer](https://www.patreon.com/bePatron?u=11315442) and get your name, avatar, and Twitter handle listed here.

<a href="https://www.patreon.com/bePatron?u=11315442"><img alt="Backers on Patreon" src="https://patreon-badge.herokuapp.com/11315442.png"  width="500"  /></a>

<!-- SHADOW_SECTION_BACKERS_END -->

<!-- SHADOW_SECTION_FAQ_START -->

### FAQ

<!-- SHADOW_SECTION_FAQ_END -->

#### Do you support custom templates?

No, Scaffold is quite opinionated about the files that are being generated and updated.
However, you _can_ exclude sections and badges from the README as described [in this section](#configuration-options)

#### How do you determine the Code Style of the project?

By looking for several things, including:

- Your project dependencies and general fields in `package.json`
- The configs that are being extended in your `tslint.json` (if any such file exists) or any of its ancestors.
- The configs that are being extended in your `eslint.json`/`.eslintrc` (if any such file exists) or any of its ancestors.
- Whether or not your project has a Prettier config.

<!-- SHADOW_SECTION_LICENSE_START -->

## License

MIT © [Frederik Wessberg](mailto:frederikwessberg@hotmail.com) ([@FredWessberg](https://twitter.com/FredWessberg)) ([Website](https://github.com/wessberg))

<!-- SHADOW_SECTION_LICENSE_END -->
