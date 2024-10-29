Cypress.Commands.add('loginAsStudent', () => {

    cy.visit('/login');
    cy.get('[data-cy="username"]').type('student1');
    cy.get('[data-cy="password"]').type('student123');
    cy.get('[data-cy="submit"]').click();
   // cy.url().should('include', '/?page=1&sort=id,asc');
  });