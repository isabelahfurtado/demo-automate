/// <reference types="cypress" />
import locators  from './locators';


Cypress.Commands.add('addItemToCart', (itemIndex) => {
  cy.get(locators.carrinho.addToCartButton(itemIndex)).click(); 
});

Cypress.Commands.add('goToCart', () => {
  cy.get(locators.carrinho.cartIcon).click(); });


Cypress.Commands.add('verifyItemInCart', () => {
  cy.get(locators.carrinho.cartItem).should('be.visible'); 
});


Cypress.Commands.add('removeItemFromCart', () => {
  cy.get(locators.carrinho.removeButton).click(); 
});


Cypress.Commands.add('fillCheckoutDetails', (firstName, lastName, postalCode) => {
  cy.get(locators.carrinho.firstNameField).type(firstName); 
  cy.get(locators.carrinho.lastNameField).type(lastName); 
  cy.get(locators.carrinho.postalCodeField).type(postalCode); 
});


Cypress.Commands.add('continueCheckout', () => {
  cy.get(locators.carrinho.continueButton).click(); 
});


Cypress.Commands.add('finishCheckout', () => {
  cy.get(locators.carrinho.finishButton).click(); 
});


Cypress.Commands.add('verifyCheckoutComplete', () => {
  cy.get(locators.carrinho.checkoutCompleteMessage).should('contain.text', 'Thank you for your order!'); 
});
