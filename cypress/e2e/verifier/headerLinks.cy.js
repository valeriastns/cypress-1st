describe("Header menu links test", () => {
  beforeEach(() => {
    cy.loginAsStudent();
  });

  it("Check if account menu link working", () => {
    cy.get('[data-cy="accountMenu"]').click();
    cy.get('[data-cy="accountMenu"].dropdown').should("have.class", "show");
  });

  it("Check if password menu link working", () => {
    cy.get('[data-cy="accountMenu"]').click();
    cy.get('[data-cy="passwordItem"]').click();
    cy.url().should("include", "/account/password");
  });

  it("Check if settings menu link working", () => {
    cy.get('[data-cy="accountMenu"]').click();
    cy.get('[data-cy="settings"]').click();
    cy.url().should("include", "/account/settings");
  });

  it("Check if sign-out menu link working", () => {
    cy.get('[data-cy="accountMenu"]').click();
    cy.get('[data-cy="logout"]').click();
    cy.url().should("include", "/logout");
  });

  it("Check if swagger menu link working", () => {
    cy.get('[data-cy="docsMenu"]').click();
    cy.get('[data-cy="docsMenu"]').should("have.class", "show");
  });

  it("Check if api menu link working", () => {
    cy.get('[data-cy="docsMenu"]').click();
    cy.get('[data-cy="docsMenu"]').should("have.class", "show");
    cy.get('[data-cy="docsMenu"] > div.dropdown-menu')
      .should("have.class", "show")
      .click();
    cy.url().should("include", "/docs/docs");
  });

  it("Check if entities menu link working", () => {
    cy.get('[data-cy="entity"]').click();
    cy.get('[data-cy="entity"]').should("have.class", "show");
  });

  it("Check if task menu link is working", () => {
    cy.get('[data-cy="entity"]').click();
    cy.get('[data-cy="entity"]').should("have.class", "show");
    cy.get(".dropdown-item").should("be.visible").first().click();
    cy.url().should("include", "/task?page=1&sort=id,asc");
  });

  it("Check if user-task menu link is working", () => {
    cy.get('[data-cy="entity"]').click();
    cy.get('[data-cy="entity"]').should("have.class", "show");
    cy.get(".dropdown-item").should("be.visible").eq(1).click();
    cy.url().should("include", "/user-task");
  });

  it("Check if languages link menu is working", () => {
    cy.get("#header-tabs > li").eq(3)
      .click()
      .should("have.class", "show");
  });
});
