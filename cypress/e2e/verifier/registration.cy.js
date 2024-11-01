import { registrationSelectors } from "../../support/selectors";

describe("Registration Page Tests", () => {
  beforeEach(() => {
    cy.visit("/account/register"); 
    cy.fixture("testData").as("testData");
  });

  it("Successful registration", function () {
    const { username, email, password, passwordConfirmation } = this.testData.validUser;
    cy.register(username, email, password, passwordConfirmation);
    //cy.url().should("eq", "/?page=1&sort=id,asc");
  });

  it("Registration with invalid usernames", function () {
    const { invalidUsernames, validUser } = this.testData;
    invalidUsernames.forEach((invalidUsername) => {
      cy.register(invalidUsername, validUser.email, validUser.password, validUser.passwordConfirmation);
      cy.get(registrationSelectors.errorMessage).should("contain", "Your username is invalid.");
    });
  });

  it.only("Registration with invalid emails", function () {
    const { invalidEmails, validUser } = this.testData;
    invalidEmails.forEach((invalidEmail) => {
      cy.register(validUser.username, invalidEmail, validUser.password, validUser.passwordConfirmation);
      cy.get(registrationSelectors.wrongEmailMessage).invoke('text').should('not.be.empty');
    });
  });

  it("Registration with passwords that do not meet requirements", function () {
    const { invalidPasswords, validUser } = this.testData;
    invalidPasswords.forEach((invalidPassword) => {
      cy.register(validUser.username, validUser.email, invalidPassword, invalidPassword);
      cy.get(registrationSelectors.errorMessage).should("contain", "Your password is required to be at least 4 characters.");
      cy.get(registrationSelectors.errorMessage).should("contain", "Your confirmation password is required to be at least 4 characters.");

    });
  });

  it("Password and Password Confirmation do not match", function () {
    const { validUser } = this.testData;
    cy.register(validUser.username, validUser.email, validUser.password, "differentPassword");
    cy.get(registrationSelectors.errorMessage).should("contain", "The password and its confirmation do not match!");
  });

});
