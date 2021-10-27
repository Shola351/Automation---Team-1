/// <reference types = "cypress"/>
describe('Visit Selenium Website', () => {
    it('Navigate to Url', () =>{
       cy.visit("https://www.seleniumeasy.com/")
       cy.url().should('include', 'seleniumeasy') 
       Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    });
    it('Selenium', () =>{
        cy.get(':nth-child(2) > .dropdown-toggle > .caret').click()
    })
    it('Selenium with Java', () =>{
        cy.get('.open > .dropdown-menu > .first > a').click()
    })
    it('TestNG', () => {
        cy.get('.menu > :nth-child(3) > a').click()
    })
    it('Maven', () => {
        cy.get('.menu > :nth-child(4) > a').click()
    })
    it('Katalon', () => {
        cy.get(':nth-child(9) > a').click()
    })
    it('Object_in_webUI', () => {
        cy.get('#node-289 > header > h2 > a').click
    })
    it('Appium', () => {
        cy.get('.menu > :nth-child(7) > a').click()
    })
    it('Protractor', () => {
        cy.get('.menu > :nth-child(6) > a').click()
    })
    it('Jenkins', () => {
        cy.get('.menu > :nth-child(5) > a').click()
    })
    it('How to install Jenkins', () => {
        cy.get('#node-193 > header > h2 > a').click()
    }) 
    
});