// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

//beforeEach(() => {})

// I, Valentine, added the following line, as directed by
// https://medium.com/geekculture/component-testing-next-js-application-with-cypress-28fa311adda6
// https://docs.cypress.io/guides/component-testing/introduction#Writing-Component-Tests
// Alternatively you can use CommonJS syntax:
// require('./commands')
import '@cypress/code-coverage/support'

beforeEach(() => {
  cy.intercept(
    'POST',
    'https://wdox-backend.herokuapp.com/api/nft/project/search', // that have a URL that matches '/users/*'
    {
      statusCode: 201,
      statusText: 'SUCCESS',
      body: {
        "query": "bored ape"
      },
    }
  ).as('search') // and assign an alias
  cy.intercept(
    'GET',
    'https://api.opensea.io/api/v1/collection/boredapeyachtclub/stats',
    {
      statusCode: 201,
      statusText: 'SUCCESS'
    }
  ).as('opensea') // and assign an alias
  cy.intercept(
    'GET',
    'https://api.looksrare.org/api/v1/collections/stats?address=*',
    {
      statusCode: 201,
      statusText: 'SUCCESS'
    }
  ).as('looksrare') // and assign an alias
})