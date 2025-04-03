/// <reference types="cypress" />
import { validUser } from '../../fixtures/credentials.json'

describe('Navegação no Menu Lateral', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.login(validUser.username, validUser.password)
  });

  it(' TC 04 - Realizar Logout no sistema', () => {
    cy.clickMenuButton();
    cy.clickLogout();
    cy.get('.login_logo')
      .should('be.visible')
      .and('contain.text', 'Swag Labs');
  });

  it('TC - 05 Validar navegação do menu lateral - All Itens', () => {
    cy.clickMenuButton();
    cy.clickAllItems();
    cy.getAllItems().should('be.visible')
  });

  it('TC - 06 Validar navegação do menu lateral para About', () => {
    cy.clickMenuButton();
    cy.clickAbout();
    cy.origin('https://saucelabs.com/', () => {
      cy.url().should('eq', 'https://saucelabs.com/');
    });
  });

  it('TC - 07  Validar navegação do menu lateral para App State está congelado', () => {
    cy.clickMenuButton();
    cy.clickAppState();
    cy.getAppState().should('be.visible')
  });
});