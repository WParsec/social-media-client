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

#### Project is configured to run the following on commit

- Prettier Formatting
- Eslint formatting

#### Project is configured to run the following on pull_request to master branch

- Unit testing with JEST
  [![Automated Unit Testing](https://github.com/WParsec/social-media-client/actions/workflows/unit-testing.yml/badge.svg?branch=workflow)](https://github.com/WParsec/social-media-client/actions/workflows/unit-testing.yml)

- E2E testing with Cypress
  [![Automated E2E Testing](https://github.com/WParsec/social-media-client/actions/workflows/e2e-testing.yml/badge.svg?branch=workflow)](https://github.com/WParsec/social-media-client/actions/workflows/e2e-testing.yml)

- Deploy to github pages
  [![Deploy static content to Pages](https://github.com/WParsec/social-media-client/actions/workflows/pages.yml/badge.svg?branch=workflow)](https://github.com/WParsec/social-media-client/actions/workflows/pages.yml)

## Installing

1. Clone the repo:

2. Initialize git and install dependencies with command "npm i"

3. Enter "npm run start" in command line
