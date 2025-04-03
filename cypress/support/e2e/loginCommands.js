/// <reference types="cypress" />
import locators from './locators';

Cypress.Commands.add('getUsernameField', () => {
     return cy.get(locators.login.usernameField);
});

Cypress.Commands.add('fillUsernameField', (username) => {
    cy.getUsernameField().type(username)
});

Cypress.Commands.add('getPasswordField', () => {
    return cy.get(locators.login.passwordField);
});

Cypress.Commands.add('fillPasswordField', (password) => {
    cy.getPasswordField().type(password);
});

Cypress.Commands.add('clickLoginButton', () => {
    cy.get(locators.login.loginButton).click();
});


Cypress.Commands.add('getErrorMessage', () => {
    return cy.get(locators.login.errorMessage);
});

Cypress.Commands.add('login', (username, password) => {
    
    cy.fillUsernameField(username)
    cy.fillPasswordField(password)
    cy.clickLoginButton()
});

Cypress.Commands.add('logout', () => {
    cy.get(locators.menuButton).click();
});
Cypress.Commands.add('checkErroMessageLogin',() => {
    cy.getErrorMessage().should('be.visible')
    .and('contain.text', 'Username and password do not match');})