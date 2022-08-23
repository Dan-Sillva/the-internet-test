/// <reference types="cypress" />

describe('A/B testing', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/')
  });
  
  it('open the link', () => {
      cy.contains('A/B Testing').click()

      cy.url().should('contain', '/abtest')
  })
})