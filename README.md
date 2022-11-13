# Social media platform

## Changes

#### New files

- .github/workflow/ 3 files
  e2e-testing.yml
  pages.yml
  unit-testing.yml
- eslintrc.json
- .gitignore
- babel.config.json
- cypress.config.json
- package.json
- package-lock.json
- cypress folder
- localStorage.mock.js
- login.test.js
- logout.test.js
- create.test.js
- README.md

#### Dependencies:

- Prettier
- Eslint
- Babel
- Jest
- Husky
- Cypress
- SASS

#### Project is configured to run the following on commit as pre-commit hook

- Prettier Formatting
- Eslint formatting
- On changed .test files - Will also run jest as a pre-commit hook

#### Project is configured to run the following on pull_request to master branch

- Unit testing with JEST
  [![Automated Unit Testing](https://github.com/WParsec/social-media-client/actions/workflows/unit-testing.yml/badge.svg?branch=workflow)](https://github.com/WParsec/social-media-client/actions/workflows/unit-testing.yml)

- E2E testing with Cypress
  [![Automated E2E Testing](https://github.com/WParsec/social-media-client/actions/workflows/e2e-testing.yml/badge.svg?branch=workflow)](https://github.com/WParsec/social-media-client/actions/workflows/e2e-testing.yml)
  Test fails due to an unhandled error when entering incorrect credentials in login form. The error should be caught in a catch block to prevent this.

- Deploy to github pages
  [![Deploy static content to Pages](https://github.com/WParsec/social-media-client/actions/workflows/pages.yml/badge.svg?branch=workflow)](https://github.com/WParsec/social-media-client/actions/workflows/pages.yml)

## Installing

1. Clone the repo:

2. Initialize git and install dependencies with command "npm i"

3. Enter "npm run start" in command line

## Testing

### All tests

Both unit testing and E2E testing can be run in the terminal with one command:

```
$ npm run test
```

### Unit Test

Unit testing is done in the terminal using the following command:

```
$ npm run unit-test
```

A successful test will display a green success symbol.
A failed test will display a red failure symbol.

### E2E Test

This can be done either in terminal or through cypress interface:

For testing in terminal write the following in command line:

```
$ npm run test-e2e-cli
```

For testing in cypress interface write the following in command line:

```
$ npm run test-e2e
```
