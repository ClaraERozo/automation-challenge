// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import * as loginElements from '../elements/loginelements';

//  Verifica que la pagina cargo correctamente
Cypress.Commands.add('verifyHomePageLoaded', () => {
  cy.contains(loginElements.homeMainTitle, { timeout: 10000 }).should('be.visible');
});

// Login  con credenciales válidas
Cypress.Commands.add('loginWithValidCredentials', () => {
  cy.contains(loginElements.accederLink).click(); 
  cy.contains(loginElements.loginTitle).should('be.visible');
  cy.get(loginElements.emailInput).type('huge.test@gmail.com');
  cy.get(loginElements.passwordInput).type('Huge2025.');
  cy.get(loginElements.loginButton).click();
  cy.contains(/mi cuenta|cerrar sesión|orden/i, { timeout: 10000 }).should('be.visible');
  cy.contains(loginElements.logoutLink).click();  
  cy.contains(loginElements.accederLink).should('be.visible'); 
});

// Login  con credenciales inválidas
Cypress.Commands.add('loginWithInvalidCredentials', (email, password) => {
  cy.contains(loginElements.accederLink).click();
  cy.contains(loginElements.loginTitle).should('be.visible');
  cy.get(loginElements.emailInput).type(email);
  cy.get(loginElements.passwordInput).type(password);
  cy.get(loginElements.loginButton).click();
});

// Validar modal de  login fallido
Cypress.Commands.add('validateErrorModal', () => {
  cy.contains(loginElements.errorModalText).should('be.visible');
  cy.contains(loginElements.volverButton).should('be.visible').click();
  cy.contains(loginElements.loginTitle).should('be.visible');
});
