/// <reference types="cypress" />
import {validUser}  from '../../fixtures/credentials.json'
import {invalidUser}  from '../../fixtures/credentials.json'

describe('Login ', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.fixture('credentials').as('credentials');
      });


    it('TC 01 - Login com sucesso', () => {
        cy.login(validUser.username, validUser.password)
        cy.url().should('include', 'inventory');
    })
    it(' TC 02 - Login com usuario invalido', () => {
        cy.login(invalidUser.username, invalidUser.password)
        cy.checkErroMessageLogin()

    })
    it('Login com senha incorreta', () => {
        cy.login(validUser.username, invalidUser.password)
        cy.checkErroMessageLogin()
    })
})