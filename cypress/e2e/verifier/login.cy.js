import { loginSelectors } from '../../support/selectors';

describe("Login Page Tests", () => {
  beforeEach(() => {
    cy.visit("/login?logout");
    cy.fixture("testData").as("testData");
  });

  it("Сheck valid login", function () {
    const { username, password } = this.testData.validUser;
    cy.login(username, password);
    cy.url().should("include", "/?page=1&sort=id,asc");
  });

  it("Check invalid login with empty fields", function () {
    cy.login("", "");
    cy.get(loginSelectors.errorMessage).should("contain", "Username and password are required");
  });

  it("Check invalid login with incorrect username", function () {
    cy.login("invalidUser", "P@ssw0rd");
    cy.get(loginSelectors.errorMessage).should("contain", "Invalid username or password");
  });

  it("Check invalid login with incorrect password", function () {
    const { username } = this.testData.validUser;
    cy.login(username, "wrongPassword");
    cy.get(loginSelectors.errorMessage).should("contain", "Invalid username or password");
  });
});
