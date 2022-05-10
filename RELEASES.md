# Releases

Our Github actions workflow `./.github/workflows/stable-npm-release.yml` and `./.github/workflows/validation.yml` will manage the releases. New "Next Release" pull requests will be opened when there are new fresh commits in `dev`. Once those new commits are delivered to `main`. A stable NPM release will be made and shipped.

Lerna will use the [Conventional Commits Specification](https://www.conventionalcommits.org/) to determine the [version bump](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-recommended-bump) and [generate CHANGELOG.md files](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli).

## Helpful Commit Message Guide

A example commit message for a "patch" change such as changing a color value, "fix(colors): brand blue changed WPDS-001".

| Type            | Change | Reasoning                          |
|-----------------|--------|------------------------------------|
| fix             | patch  | token values change                |
| feat            | minor  | new tokens added                   |
| BREAKING CHANGE | major  | token names changed/tokens deleted |
