/// <reference types = "cypress"/>
describe('Credit360', () => {
it('Navigate through the site', () => {
cy.visit('https://fintrakcredit360web2.azurewebsites.net')
})
it('Login', () => {
    cy.get('.m-t-60 > .col-xs-12 > .form-control').type('abidoyet')
    cy.get(':nth-child(3) > .col-xs-12 > .form-control').type('testing')
    cy.get('.col-xs-12 > .btn').click()
    
})
it('side menu', () => {
    cy.get('#menu-button > i').click()
})
})