/// <reference types = "cypress"/>
describe('RapidAPI', () => {
it('Navigate through the site', () => {
cy.visit('https://rapidapi.com/collection/list-of-free-apis')
})
it('Login', () => {
    cy.get('.UserToolbar > [href="https://rapidapi.com/auth?referral=/collection/list-of-free-apis"]').click()
})
it('Enter login details', () => {
    cy.get('#login-form_email').type('adebojesola517@gmail.com')
    cy.get('#login-form_password').type('Drabble100%')
    cy.get('.ant-form-item-control-input-content > .ant-btn').click()
})
})
