describe("Header menu links test", () => {
  beforeEach(() => {
    cy.loginAsStudent();
  });

  it("Check if account menu link working", () => {
    cy.openMenu("accountMenu");
    cy.assertMenuVisible("accountMenu");
  });

  it("Check if password menu link working", () => {
    cy.openMenu("accountMenu");
    cy.get('[data-cy="passwordItem"]').click();
    cy.url().should("include", "/account/password");
  });

  it("Check if settings menu link working", () => {
    cy.openMenu("accountMenu");
    cy.get('[data-cy="settings"]').click();
    cy.url().should("include", "/account/settings");
  });

  it("Check if sign-out menu link working", () => {
    cy.openMenu("accountMenu");
    cy.get('[data-cy="logout"]').click();
    cy.url().should("include", "/logout");
  });

  it("Check if swagger menu link working", () => {
    cy.openMenu("docsMenu");
    cy.assertMenuVisible("docsMenu");
  });

  it("Check if api menu link working", () => {
    cy.openMenu("docsMenu");
    cy.assertMenuVisible("docsMenu");
    cy.get('[data-cy="docsMenu"] > div.dropdown-menu')
      .should("have.class", "show")
      .click();
    cy.url().should("include", "/docs/docs");
  });

  it("Check if entities menu link working", () => {
    cy.openMenu("entity");
    cy.assertMenuVisible("entity");
  });

  it("Check if task menu link is working", () => {
    cy.openMenu("entity");
    cy.assertMenuVisible("entity");
    cy.clickMenuItem("entity", 0);
    cy.url().should("include", "/task?page=1&sort=id,asc");
  });

  it("Check if user-task menu link is working", () => {
    cy.openMenu("entity");
    cy.assertMenuVisible("entity");
    cy.clickMenuItem("entity", 1);
    cy.url().should("include", "/user-task");
  });

  it("Check if languages link menu is working", () => {
    cy.get("#header-tabs > li").eq(3)
      .click()
      .should("have.class", "show");
  });
});
