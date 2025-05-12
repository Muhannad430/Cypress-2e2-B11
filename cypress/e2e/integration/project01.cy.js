/// <reference types="cypress"/>


describe("Project One", () => {
    beforeEach(() => {
        cy.visit("https://techglobal-training.com/frontend/form-elements");
    });
    /*
    Navigate to https://techglobal-training.com/frontend/form-elements
    Validate the heading is “Contact Us”
    Validate the address is “2800 S River Rd Suite 310, Des Plaines, IL 60018”
    Validate the email is “info@techglobalschool.com"
    Validate the phone number is “(224) 580-2150”
    */

    it('Validate the Contact Us information', () => {

        cy.get('.mb-5 > h1').should('be.visible')
        cy.get('#address').should('be.visible')
        cy.get('#email').should('be.visible')
        cy.get('#phone-number').should('be.visible')

    });

    /*
    Navigate to https://techglobal-training.com/frontend/form-elements
    Validate that the Full name input box is displayed
    Validate that the Full name input box is required
    Validate that the label of the Full name input box is “Full name *”
    Validate that the placeholder of the Full name input box is “Enter your full name”
    */

    it('Validate the Full name input box', () => {

        cy.get(':nth-child(1) > .control > .input')
        cy.get("form > :nth-child(1) > .label").should("have.text", "Full name *");
        cy.get('.input[placeholder="Enter your full name"]').should('be.visible').and('have.attr', 'required');

    });

    /*
    Navigate to https://techglobal-training.com/frontend/form-elements
    Validate the label is “Gender *”
    Validate that the Gender is required
    Validate the options are “Female”, “Male” and “Prefer not to disclose”

    ** Validate the options are clickable and not selected

    Click on the “Male” option and validate it is selected while the others are not selected
    Click on the “Female” option and validate it is selected while the others are not selected
    */

    it('Validate the Gender radio button', () => {

        cy.get('.control .label').should('be.visible');

        cy.get('form div div :nth-child(2) input')
            .should('be.visible')
            .and('have.attr', 'required');

        cy.get('form div div :nth-child(2) input, form div div :nth-child(3) input, form div div :nth-child(4) input')
            .should('be.visible')

        cy.get('form div div :nth-child(2) input')
            .click()
            .should('be.checked')
        cy.get('form div div :nth-child(3) input')
            .should('not.be.checked')
        cy.get('form div div :nth-child(4) input')
            .should('not.be.checked')

        cy.get('form div div :nth-child(3) input')
            .click()
            .should('be.checked')
        cy.get('form div div :nth-child(2) input')
            .should('not.be.checked')
        cy.get('form div div :nth-child(4) input')
            .should('not.be.checked')

    });

    /*
    Navigate to https://techglobal-training.com/frontend/form-elements
    Validate that the Address input box is displayed
    Validate that the Address input box is not required
    Validate that the label of the Address input box is “Address”
    Validate that the placeholder of the Address input box is “Enter your address*”
    */

    it('Validate the Address input box', () => {
        cy.contains('.label', 'Address').should('have.text', 'Address')
        cy.get('input[placeholder="Enter your address"]')
            .should('be.visible')
            .and('not.have.attr', 'required')
    });

    /*
    Navigate to https://techglobal-training.com/frontend/form-elements
    Validate that the Email input box is displayed
    Validate that the Email input box is required
    Validate that the label of the Email input box is “Email *”
    Validate that the placeholder of the Email input box is “Enter your email”
    */

    it('Validate the Email input box', () => {

        cy.contains('.label', 'Email').should('have.text', 'Email *')

        cy.get('input[placeholder="Enter your email"]')
            .should('be.visible')
            .and('have.attr', 'required')

    });

    /*
    Navigate to https://techglobal-training.com/frontend/form-elements
    Validate that the Phone input box is displayed
    Validate that the Phone input box is not required
    Validate that the label of the Phone input box is “Phone”
    Validate that the placeholder of the Address input box is “Enter your phone number”
    */

    it('Validate the Phone input box', () => {
        cy.contains('.label', 'Phone').should('have.text', 'Phone')

        cy.get('input[placeholder="Enter your phone number"]')
            .should('be.visible')
            .and('not.have.attr', 'required')
    });

    /*
    Navigate to https://techglobal-training.com/frontend/form-elements
    Validate that the Message text area is displayed
    Validate that the Message text area is not required
    Validate that the label of the Message text area is “Message”
    Validate that the placeholder of the Message text area is “Type your message here…”
    */

    it('Validate the Message text area', () => {

        cy.contains('.label', 'Message').should('have.text', 'Message')

        cy.get('.textarea[placeholder="Type your message here..."]')
            .should('be.visible')
            .and('not.have.attr', 'required')

    });

    /*
    Navigate to https://techglobal-training.com/frontend/form-elements
    Validate the label is “I give my consent to be contacted.”
    Validate that the Consent checkbox is required
    Validate that the Consent checkbox is clickable
    Click on the “I give my consent to be contacted.” checkbox and validate it is selected
    Click on the “I give my consent to be contacted.” checkbox again and validate it is not selected
    */

    it('Validate the Consent checkbox', () => {
        cy.get('label.checkbox')
            .should('have.text', ' I give my consent to be contacted.')

        cy.get('.checkbox input').and('have.attr', 'required')

        cy.get('.checkbox input')
            .click()
            .should('be.checked')

        cy.get('.checkbox input').click()
            .should('not.be.checked')

    });

    /*
    Navigate to https://techglobal-training.com/frontend/form-elements
    Validate the “SUBMIT” button is displayed
    Validate the “SUBMIT” button is clickable
    Validate that the button text is “SUBMIT”
    */
    it('Validate the SUBMIT button', () => {
        cy.get('.is-link')
            .should('be.visible')
            .and('have.text', 'SUBMIT')
            .and('be.enabled')
    });

    /*
    Navigate to https://techglobal-training.com/frontend/form-elements
    Enter a first name
    Select a gender
    Enter an address
    Enter an email
    Enter a phone number
    Enter a message
    Select the “I give my consent to be contacted.” checkbox
    Click on the “SUBMIT” button
    Validate the form message “Thanks for submitting!” is displayed under the “SUBMIT” button
    */

    it.only('Validate the form submission', () => {

        cy.get(':nth-child(1) > .control > .input').type('Muhannad Abusharbak')
        cy.get('form div div :nth-child(2) input').click()
        cy.get('input[placeholder="Enter your address"]').type('8132 90th st')
        cy.get('input[placeholder="Enter your email"]').type('muhannad@gmail.com')
        cy.get('input[placeholder="Enter your phone number"]').type('123-123-1234')
        cy.get('.textarea[placeholder="Type your message here..."]').type('This is my first time running test cases!')
        cy.get('.checkbox input').click()
        cy.get('.is-link').click()
        cy.get('.mt-5').should('be.visible')

    });
});