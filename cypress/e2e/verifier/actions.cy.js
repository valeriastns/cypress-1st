/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('/?page=1&sort=id,asc')
    })


    it('Account button click', () => {

        cy.get('li#account-menu').click()

        cy.get('li#account-menu a').should('have.attr', 'aria-expanded', 'true')
      })
});