// https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Excluding-and-Including-Tests

beforeEach(() => {
  //cy.viewport('iphone-5')
  cy.visit('http://localhost:3000')
})

describe('Check if the page loads', () => {
  it('displays', () => {
    cy.contains('Search')
      .should('be.visible')
      .type("bored ape")
      .type('Cypress.io{enter}')
  })
})
