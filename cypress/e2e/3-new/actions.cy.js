/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc')
    })


    it('Account button click', () => {

        cy.get('li#account-menu').click()

        cy.get('li#account-menu a').should('have.attr', 'aria-expanded', 'true')
      })
});