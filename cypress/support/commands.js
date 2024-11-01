import { loginSelectors } from './selectors'
import { registrationSelectors } from './selectors'

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

  Cypress.Commands.add("login", (username, password) => {
    cy.get(loginSelectors.username).type(username);
    cy.get(loginSelectors.password).type(password);
    cy.get(loginSelectors.loginButton).click();
  });
  
  Cypress.Commands.add("register", (username, email, password, passwordConfirmation) => {
    cy.get(registrationSelectors.username).type(username);
    cy.get(registrationSelectors.email).type(email);
    cy.get(registrationSelectors.password).type(password);
    cy.get(registrationSelectors.passwordConfirmation).type(passwordConfirmation);
    cy.get(registrationSelectors.registerButton).click();
  });
  