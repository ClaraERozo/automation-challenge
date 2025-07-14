describe('Visit homepage and login flow', () => {
    beforeEach(() => {
    cy.viewport(1280, 800);
    cy.visit('/', { timeout: 60000 });
  });

  it('should log in and view order details from Mi Cuenta', () => {
    cy.login()
    cy.visitMiCuenta()
    cy.viewDetails();
  });
});
