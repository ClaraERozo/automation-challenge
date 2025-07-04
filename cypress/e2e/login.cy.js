describe('Visit homepage and login flow', () => {
  beforeEach(() => {
    cy.viewport(1280, 800);
    cy.visit('/', { timeout: 60000 });
  });

  it('should load the home page successfully', () => {
    cy.verifyHomePageLoaded()
  });

  it('should login successfully with valid credentials from homepage', () => {
    cy.loginWithValidCredentials()
  });
  it('should show error modal with invalid credentials', () => {

    cy.loginWithInvalidCredentials('huge.test@gmail.com', 'claveIncorrecta123');
    cy.validateErrorModal()
});
});

