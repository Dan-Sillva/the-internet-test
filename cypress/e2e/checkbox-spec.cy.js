/// <reference types="cypress" />

describe('select and unselect checkbox', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('Checkboxes').click()

        cy.url().should('include', 'checkboxes')
    });
    
    it('select checkbox', () => {
        cy.get('[type="checkbox"]')
        .should('have.length', 2)
        .first().click()

        cy.get('[type="checkbox"]')
        .should('have.length', 2)
        .first().should('be.checked')
    });

    it('unselect checkbox', () => {
        cy.get('#checkboxes > :nth-child(3)')
        .click()

        cy.get('#checkboxes > :nth-child(3)')
        .should('not.be.checked')
    });
});