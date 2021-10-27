/// <reference types = "cypress"/>
describe('Cura Make Appointment', () => {
    it('Navigate to Url', () =>{
       cy.visit("https://katalon-demo-cura.herokuapp.com/");
    });

    // it('click on Make Appointment', () =>{
    //     cy.get('#btn-make-appointment').click();
    //     cy.get('#txt-username').type('John Doe');
    //     cy.get('#txt-password').type('ThisIsNotPassword');
    //     cy.get('#btn-login').click();
    // })
    // it('Make Appointment', () =>{
    //     cy.get('select').select('Hongkong CURA Healthcare Center')
    //     cy.get('#chk_hospital_readmission').click();
    //     cy.get('#radio_program_medicaid').click();
    //     cy.get('#txt_visit_date').type('16/10/2021');
    //     cy.get('#txt_comment').click({force: true});
    //     cy.get('#txt_comment').type('Pramod Dutta wiil be available at 16/10/2021');
    //     cy.get('#btn-book-appointment').click();
    // })
    // it('Verify Appointment', () => {
    //     cy.get('h2').contains('Appointment Confirmation');
    //     cy.get('#comment').contains('Pramod Dutta will be vailable at 16/10/2021');

    // })
})