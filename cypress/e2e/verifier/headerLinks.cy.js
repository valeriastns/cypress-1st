describe("Header menu links test", () => {
  beforeEach(() => {
    cy.loginAsStudent();
  });

  describe("Account menu tests", () => {
    beforeEach(() => {
      cy.openMenu("accountMenu");
    });

    it("Check if account menu link working", () => {
      cy.assertMenuVisible("accountMenu");
    });

    it("Check if password menu link working", () => {
      cy.get('[data-cy="passwordItem"]').click();
      cy.url().should("include", "/account/password");
    });

    it("Check if settings menu link working", () => {
      cy.get('[data-cy="settings"]').click();
      cy.url().should("include", "/account/settings");
    });

    it("Check if sign-out menu link working", () => {
      cy.get('[data-cy="logout"]').click();
      cy.url().should("include", "/logout");
    });
  });

  describe("Docs menu tests", () => {
    beforeEach(() => {
      cy.openMenu("docsMenu");
    });

    it("Check if swagger menu link working", () => {
      cy.assertMenuVisible("docsMenu");
    });

    it("Check if api menu link working", () => {
      cy.assertMenuVisible("docsMenu");
      cy.get('[data-cy="docsMenu"] > div.dropdown-menu').click();
      cy.url().should("include", "/docs/docs");
    });
  });

  describe("Entity menu tests", () => {
    beforeEach(() => {
      cy.openMenu("entity");
    });

    it("Check if entities menu link working", () => {
      cy.assertMenuVisible("entity");
    });

    it("Check if task menu link is working", () => {
      cy.assertMenuVisible("entity");
      cy.clickMenuItem("entity", 0);
      cy.url().should("include", "/task?page=1&sort=id,asc");
    });

    it("Check if user-task menu link is working", () => {
      cy.assertMenuVisible("entity");
      cy.clickMenuItem("entity", 1);
      cy.url().should("include", "/user-task");
    });
  });

  it("Check if languages link menu is working", () => {
    cy.get("#header-tabs > li").eq(3).click().should("have.class", "show");
  });
  
});
