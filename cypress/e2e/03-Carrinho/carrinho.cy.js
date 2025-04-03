/// <reference types="cypress" />
import { validUser } from '../../fixtures/credentials.json'
import locators  from '../../support/e2e/locators';


describe('Adicionar Item ao Carrinho', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.login(validUser.username, validUser.password)
    });
  
    it(' TC 08 - Adicionar Item ao Carrinho', () => {
      cy.addItemToCart(0); 
      cy.goToCart();
      cy.verifyItemInCart();
    });
    it('TC - 09 Validar Carrinho Vazio Inicialmente', () => {
        cy.goToCart();
        cy.get(locators.carrinho.cartItem).should('not.exist'); 
      });
    
  it('TC - 10 Remover um item do carrinho e verificar se o carrinho fica vazio', () => {
    cy.addItemToCart(0); 
    cy.goToCart();
    cy.verifyItemInCart();
    cy.removeItemFromCart();
    cy.get(locators.carrinho.cartItem).should('not.exist'); 
  });

  it('TC - 11 Adicionar um item, preencher o checkout e finalizar a compra', () => {
    cy.addItemToCart(0);
    cy.goToCart();
    cy.verifyItemInCart();
    cy.get(locators.carrinho.checkoutButton).click(); 
    cy.fillCheckoutDetails('name', 'lastname', 'postCode'); 
    cy.continueCheckout();
    cy.finishCheckout();
    cy.verifyCheckoutComplete(); 
  });
  });
