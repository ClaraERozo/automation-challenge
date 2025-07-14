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

import * as elements from '../elements/addelements';
import * as loginElements from '../elements/loginelements';
import * as historyElements from '../elements/historyelements';
import 'cypress-mochawesome-reporter/register';


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
// Scroll to Featured Products
Cypress.Commands.add('scrollToFeaturedProducts', () => {
  cy.contains('Productos destacados').scrollIntoView();
});

// agregar primer producto
Cypress.Commands.add('addFirstAvailableProductToCart', () => {
  cy.contains('Productos destacados').scrollIntoView();
  cy.get(elements.firstProductCard).first().within(() => {
    cy.contains(/añadir|agregar/i).click();
  });
});

//Abrir detalle de carrito
Cypress.Commands.add('openCartIcon', () => {
  cy.get(elements.cartIcon).should('be.visible').click({ force: true });
});


// Validar productos del carrito (versión flexible)
Cypress.Commands.add('validateCartHasProduct', () => {
  cy.get(elements.cartImage).should('have.length.at.least', 1);
  cy.get('button').contains('Ir al checkout').should('be.visible');

  // Al menos un producto en el carro
  cy.get('.cart-grid p.text-black').should('have.length.at.least', 1);
  cy.contains('$').should('exist');
  cy.contains('Total:').should('be.visible');
});

// Login
Cypress.Commands.add('login', () => {
  cy.contains(loginElements.accederLink).click();
  cy.contains(loginElements.loginTitle).should('be.visible');
  cy.get(loginElements.emailInput).type('huge.test@gmail.com');
  cy.get(loginElements.passwordInput).type('Huge2025.');
  cy.get(loginElements.loginButton).click();
  cy.contains(/mi cuenta|cerrar sesión|orden/i, { timeout: 10000 }).should('be.visible');
});
// validar order History. ULTIMA VERSION
Cypress.Commands.add('visitMiCuenta', () => {
  cy.contains('a', 'Mi Cuenta', { timeout: 10000 }).should('be.visible').click();
  cy.url({ timeout: 10000 }).should('include', '/my-account');
  cy.contains('Mi cuenta').should('be.visible'); // título de la página destino
});
//Ver view details
Cypress.Commands.add('viewDetails', () => {
  historyElements.firstOrderDetailsLink()
    .should('be.visible')
    .first()
    .click();
    cy.get(historyElements.detalles, { timeout: 10000 }).should('be.visible');
});
