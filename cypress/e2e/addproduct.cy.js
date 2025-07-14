describe('Login and scroll to featured products', () => {
  beforeEach(() => {
    cy.viewport(1280, 800);
    cy.visit('/');
  });

  it('should login and scroll to featured products section', () => {
    cy.login()
    cy.scrollToFeaturedProducts();
    cy.addFirstAvailableProductToCart();
    cy.openCartIcon();
    cy.validateCartHasProduct();
});
  });

