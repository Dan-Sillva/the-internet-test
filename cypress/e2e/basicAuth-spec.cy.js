/// <reference types="cypress" />

describe('Basic auth', () => {
    it('login', () => {
        // user:password
        let auth = 'admin:admin'

        cy.visit(`https://${auth}@the-internet.herokuapp.com/basic_auth`)

        cy.url().should('contain', '/basic_auth')
        cy.get('p').should('contain.text', 'Congratulations!')
    });
});