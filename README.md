# WPDS v0 Design tokens (Legacy)

The project is a work in progress. The goal is to distribute design tokens for The Washingon Post design system for mulitple platforms (web, iOS, Android). Tokens are compiled using [style dictionary](https://amzn.github.io/style-dictionary/#/). Each package in this repository contains a set of values related to core design needs like color, space, typography, etc.

## Initial setup

Install the project dependencies:

```shell
npm i
```

## Project structure

The project is made of these files and folders:

- `config.json` is the script used to generate the output files for each package

## Package structure

Each package is made of these files and folders:

- `token.json` contains the design tokens input files (in JSON format)
- `/dist` contains the generated output files (in different formats)

### Building Packages

To build packages, simply install dependencies by running `npm run install` and build them with `npm run build`.

### Committing Changes

We use [standard-version](https://github.com/conventional-changelog/standard-version) to automatically update the changelog and decide new version numbers. As such, we need commit messages to follow a consistent format (drawn from [conventional commits](https://conventionalcommits.org/)).

Example commit messages (simply match this pattern and your commit message will be accepted):

- `git commit -m "feat: add example packet"`
- `git commit -m "fix(color): fix table layout for green colors" -m "fixes RD-999"`
- `git commit -m "feat(border): add new 8px border radius token"`
- `git commit -m "docs: update asset file paths"`
- `git commit -m "feat(dependencies): upgrade classnames to 2.2.5"`
- `git commit -m "chore(dependencies): upgrade babel dependencies to latest version"` (chore because they are devDependencies)
- `git commit -m "feat(build): add linting to commit messages"`

Commit message format:

```shell
type(scope?): subject

body?

footer?
```

`type` is one of the following:

- **fix**: Solves a bug
- **feat**: Adds a new feature
- **build**: Affects the build system or external dependencies
- **docs**: Adds or alters documentation
- **perf**: Improves performance
- **test**: Adds or modifies tests
- **chore**: Other changes that don't modify `src` or `test` files

`scope` is optional but, with few exceptions, should be used for all `feat` and `fix` commits. Common scopes include:

- **[{Package Name}]**: Changes to a Design tokens package
- **dependencies**: Changes to `dependencies` should be `feat`, and `devDependencies` should be `chore`
- **build**: Changes to the build that make significant changes to the published package, should be a `feat` or `fix`

Feel free to suggest additional scope options.

`subject` requirements:

- starts with lower case
- uses the imperative, present tense: "change" not "changed" nor "changes"
- includes motivation for the change and contrasts with previous behavior

`body` is optional and allows for more details to be added

`footer` contains meta-information about pull requests, e.g. "fixes DS-999", referring to a Jira ticket.

### Publishing Package Updates to npm

See [releases](./RELEASES.md) workbook.

#### Production Releases (Performed Locally)

See [releases](./RELEASES.md) workbook.

### Testing packet changes locally

Test any local packet in another project by utilizing [npm link](https://docs.npmjs.com/cli/link). Below is an example workflow to link `design-tokens` to `site-components`.

- Navigate to your local copy of any design tokens in a terminal window

  ```shell
  cd ~/YourCodeFolder/wp-design-tokens/packages/{package name}
  npm link # only needs to be run once
  npm run build
  ```

- Navigate to the folder where you wish to use the tokens in your terminal (such as `site-components`) and complete the link

  ```shell
  cd ~/YourCodeFolder/site-components
  npm run link "@washingtonpost/{package name}-tokens"
  ```

- You can now use any package from your local instance of Design Tokens in your project.

- **When you are done, be sure to unlink Design Tokens so you are using the published version of the packages**

  ```shell
  npm run unlink "@washingtonpost/{package name}-tokens"
  ```
