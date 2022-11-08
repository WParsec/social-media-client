// Login and logout

describe("The login form", () => {
  it("validates user inputs correctly based on API restrictions", () => {
    cy.visit("index.html");
    cy.wait(500);
    cy.get(".btn-close:visible").click();
    cy.get("header [data-auth='login']").contains("Login").click();
    cy.wait(500);
    cy.get("input[type='email']:visible")
      .should("be.visible")
      .type("testcypress@noroff.no");
    cy.get("input[type='password']:visible")
      .should("be.visible")
      .type("password{enter}");
    cy.wait(2000);
    cy.then(() => {
      expect(localStorage.getItem("token")).to.not.be.null;
    });
    cy.wait(1000);
    cy.get("button").contains("Logout").should("exist").click();
    cy.wait(1000);
    cy.then(() => {
      expect(localStorage.getItem("token")).to.be.null;
    });
  });
});
