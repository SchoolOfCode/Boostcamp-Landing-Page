describe("Check web landing page accessibility", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.injectAxe();
  });
  it("Has no detectable a11y violations on load", () => {
    // Test the page at initial load
    cy.checkA11y();
  });

  // Applying a context and run parameters
  it("Has no detectable a11y violations on load (with custom parameters)", () => {
    // Test the page at initial load (with context and options)
    cy.checkA11y("#main_container", {
      runOnly: {
        type: "tag",
        values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"],
      },
    });
  });
});
