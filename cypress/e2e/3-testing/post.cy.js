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
    cy.wait(1000);
    cy.get("#footerActions [data-visible='loggedIn']").click();
    cy.wait(1000);
    cy.get(".form-floating #postTitle").type("Doin me some cheeky testin");
    cy.get(".form-floating #postTags").type("cheeky");
    cy.get(".form-floating #postBody").type("So cheeky");
    cy.get('button[data-action="submit"]').click();
    cy.wait(2000);
    cy.url().should("include", "view=post&postId=");
    cy.wait(1000);
    cy.get('button[data-action="delete"]:visible').click();
    cy.wait(1000);
  });
});
