/// <reference types="cypress" />
import locators from './locators';

Cypress.Commands.add('clickMenuButton', () => {
    cy.get(locators.navegacao.menuButton).click();
    
});

Cypress.Commands.add('getAllItems', () => {
    return cy.get(locators.navegacao.allItems);
});

Cypress.Commands.add('clickAllItems', () => {
    cy.getAllItems().click();
});

Cypress.Commands.add('clickAbout', () => {
    cy.get(locators.navegacao.about).click();
});

Cypress.Commands.add('getAppState', () => {
    return cy.get(locators.navegacao.appState);
});

Cypress.Commands.add('clickAppState', () => {
    cy.getAppState().click();
});

Cypress.Commands.add('clickLogout', () => {
    cy.get(locators.navegacao.logout).click();
});

