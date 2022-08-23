/// <reference types="cypress" />

describe('Challenge: select elements without clear selectors', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/')

        cy.contains('Challenging DOM').click()
        cy.url().should('include', '/challenging_dom')
    });
    
    it('clicking on the first button', () => {
        cy.get('.button').should('have.length', 3)
        .first().click()
    });

    it('select luvaret0', () => {
        cy.contains('Iuvaret0').should('exist')
    });

    it('select phaedrum2', () => {
        cy.contains('Phaedrum2').should('exist')
    });

    it('clicking on the edit of the third column', () => {
        cy.get('table > tbody > tr').should('have.length', 10)
        .filter(':nth-child(3)')
        .find(':nth-child(7) > [href="#edit"]')
        .click()

        cy.url().should('include', '#edit')
    });

    it('clicking on the delete of the third column', () => {
        cy.get(':nth-child(3) > :nth-child(7) > [href="#delete"]')
        .click()

        cy.url().should('include', '#delete')
    });
});