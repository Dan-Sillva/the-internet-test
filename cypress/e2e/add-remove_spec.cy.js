/// <reference types="cypress" />

describe('Add and remove itens from list', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/')
        
        cy.contains('Add/Remove Elements').click()
        cy.url().should('contains','add_remove_elements/')
    });
    
    it('adding new item to list', () => {
        cy.contains('Add Element').click()
        
        cy.get('[id="elements"] > .added-manually')
        .should('have.length', 1)
        .last()
        .should('have.text', 'Delete')
    });

    it('remove last item to list', () => {
        cy.contains('Add Element').click()
        cy.contains('Add Element').click()

        cy.get('[id="elements"] > .added-manually')
        .should('have.length', 2)
        .last()
        .click()

        cy.get('[id="elements"] > .added-manually')
        .should('have.length', 1)

    });
});