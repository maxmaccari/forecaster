# Forecaster

[![CI](https://github.com/maxmaccari/forecaster/workflows/CI/badge.svg)](https://github.com/maxmaccari/forecaster/actions?query=workflow%3ACI)
[![Deploy](https://github.com/maxmaccari/forecaster/workflows/Deploy/badge.svg)](https://github.com/maxmaccari/forecaster/actions?query=workflow%3ADeploy)

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://ember-cli.com/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <repository-url>` this repository
- `cd forecaster`
- `npm install`

## Before run

You must have an free API on https://home.openweathermap.org/ to run this application.

## Running / Development

- API_KEY=[your open weather map api key] `npm start`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

- `ember test`
- `ember test --server`

### Linting

- `npm run lint:hbs`
- `npm run lint:js`
- `npm run lint:js -- --fix`

### Building

- `ember build` (development)
- `ember build --environment production` (production)

### Deploying

You must have an account at firebase to deploy the application.
You can use `firebase login` and `firebase deploy` to deploy the application.

## Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [ember-cli](https://ember-cli.com/)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
