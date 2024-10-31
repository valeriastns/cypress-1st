Cypress.Commands.add('loginAsStudent', () => {

    cy.visit('/login');
    cy.get('[data-cy="username"]').type('student1');
    cy.get('[data-cy="password"]').type('student123');
    cy.get('[data-cy="submit"]').click();
   ///cy.url().should('include', '/?page=1&sort=id,asc');
  });

  Cypress.Commands.add("openMenu", (menuDataCy) => {
    cy.get(`[data-cy="${menuDataCy}"]`).click();
  });
  
  Cypress.Commands.add("assertMenuVisible", (menuDataCy) => {
    cy.get(`[data-cy="${menuDataCy}"]`).should("have.class", "show");
  });
  
  Cypress.Commands.add("clickMenuItem", (menuDataCy, index) => {
    cy.get(`[data-cy="${menuDataCy}"] .dropdown-item`).eq(index).click();
  });