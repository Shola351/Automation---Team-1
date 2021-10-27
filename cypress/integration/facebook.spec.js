/// <reference types = "cypress"/>
describe('Visit facebook Website', () => {
    it('Navigate to Url', () =>{
       cy.visit("https://www.facebook.com/")
    });

    it('facebookLogin', () => {
        cy.get('[data-testid=royal_email]').type('adeboje.olusola@yahoo.com');
        cy.get('[data-testid=royal_pass]').type('Drabble100');
        cy.get('[data-testid=royal_login_button]').click();
    })
})