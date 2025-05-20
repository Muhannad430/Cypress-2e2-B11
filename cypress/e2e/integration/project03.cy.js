/// <reference types="cypress"/>

import BookingValidation from "../../pages/BookingValidation";

const bookingValidation = new BookingValidation();

describe("Project One", () => {
    beforeEach(() => {
        cy.visit("https://www.techglobal-training.com/frontend/booking");

    });

    /*
    Navigate to https://techglobal-training.com/frontend/booking
    Validate that the “One way” radio button is displayed enabled and selected by default
    Validate that the “Round trip” radio button is displayed enabled and not selected by default
    Validate that the “Cabin Class” label and dropdown are displayed

    Validate that the “From” label and dropdown are displayed
    Validate that the “To” label and dropdown are displayed
    Validate that the “Depart” label and date picker is displayed
    Validate that the “Return” label and date picker is displayed and disabled
    Validate that the “Number of passengers” label and dropdown are displayed and 1 is the default
    Validate that the “Passenger 1” category label and dropdown are displayed and “Adult (16-64)” is the default
    Validate that the “BOOK” button is displayed and enabled
    */

    it('Validate the default Book your trip form', () => {

        bookingValidation.getOneWayRadioButton()
            .should('be.visible')
            .and('not.be.disabled')
            .and('be.checked')

        bookingValidation.getRoundTripRadioButton()
            .should('be.visible')
            .and('not.be.disabled')
            .and('not.be.checked')

        bookingValidation.getRoundTripRadioButton().click().and('be.checked')
        bookingValidation.getOneWayRadioButton().should('not.be.checked')

        bookingValidation.getCabinClassLabel().should('be.visible')
        bookingValidation.getCabinClassDropdown().should('be.visible')

        bookingValidation.getFromLabel().should('be.visible')
        bookingValidation.getFromDropdown().should('be.visible')

        bookingValidation.getToLabel().should('be.visible')
        bookingValidation.getToDropDown().should('be.visible')

        bookingValidation.getDepartLabel().should('be.visible')
        bookingValidation.getDepartDropDown().should('be.visible')

        bookingValidation.getReturnLabel().should('be.visible')
        bookingValidation.getReturnDateEna().should('be.visible')

        bookingValidation.getNumberOfPassengersLabel().should('be.visible')
        bookingValidation.getPassengerSelect().should('include.text', '1')

        bookingValidation.getPassengerOneDropDown().should('be.visible').and('include.text', 'Adult (16-64)')

        bookingValidation.getBookButton().should('be.visible')
    });

    /*
    Navigate to https://techglobal-training.com/frontend/booking
    Click on the “Round trip” radio button and validate it is selected
    Validate that the “One way” radio button is not selected
    Validate that the “Cabin Class” label and dropdown are displayed
    Validate that the “From” label and dropdown are displayed
    Validate that the “To” label and dropdown are displayed
    Validate that the “Depart” label and date picker is displayed
    Validate that the “Return” label and date picker is displayed
    Validate that the “Number of passengers” label and dropdown are displayed and 1 is the default

    Validate that the “Passenger 1” label and dropdown are displayed and “Adult (16-64)” is the default
    Validate that the “BOOK” button is displayed and enabled
   */

    it('Validate the Book your trip form when Round trip is selected', () => {

        bookingValidation.getRoundTripRadioButton().click()
            .should('be.visible')
            .and('not.be.disabled')
            .and('be.checked')

        bookingValidation.getRoundTripRadioButton().click().and('be.checked')
        bookingValidation.getOneWayRadioButton().should('not.be.checked')

        bookingValidation.getCabinClassLabel().should('be.visible')
        bookingValidation.getCabinClassDropdown().should('be.visible')

        bookingValidation.getFromLabel().should('be.visible')
        bookingValidation.getFromDropdown().should('be.visible')

        bookingValidation.getToLabel().should('be.visible')
        bookingValidation.getToDropDown().should('be.visible')

        bookingValidation.getDepartLabel().should('be.visible')
        bookingValidation.getDepartDropDown().should('be.visible')

        bookingValidation.getReturnLabel().should('be.visible')
        bookingValidation.getReturnDateEna().should('be.visible')

        bookingValidation.getNumberOfPassengersLabel().should('be.visible')
        bookingValidation.getPassengerSelect().should('include.text', '1')

        bookingValidation.getPassengerOneDropDown().should('be.visible').and('include.text', 'Adult (16-64)')

        bookingValidation.getBookButton().should('be.visible')

    });

    /*
    Navigate to https://techglobal-training.com/frontend/booking
    Select the “One way” radio button
    Select “Business” for the “Cabin Class” dropdown
    Select “Illinois” for the “From” dropdown
    Select “Florida” for the “To” dropdown
    Select the next week for the ”Depart”
    Select “1” for the “Number of passengers” dropdown
    Select “Senior (65+)” for the Passenger 1 dropdown
    Click on the “BOOK” button
    Validate the booking information displayed below
    DEPART
    IL to FL
    {dynamic date}
    Number of passengers: 1
    Passenger 1: Senior (65+)
    Cabin Class: Business
    */

    it('Validate the booking for 1 passenger and one way', () => {

        bookingValidation.getRoundTripRadioButton().click()

        bookingValidation.getCabinClassDropdown().select('Business')

        bookingValidation.getFromDropdown().select('Illinois')

        bookingValidation.getToDropDown().find('select').select('Florida')

        bookingValidation.getDepartDropDown().clear().type('05/26/2025')

        bookingValidation.getPassengerSelect().select('1')

        bookingValidation.getPassengerOneDropDown().find('select').select('Senior (65+)')

        bookingValidation.getBookButton().click()

        cy.get('div.mt-4').should('contain', 'Number of passengers: 1')
        cy.get('div.mt-4').should('contain', 'Passenger 1: Senior (65+)')
        cy.get('div.mt-4').should('contain', 'Cabin Class: Business')

    });

    /*
    Navigate to https://techglobal-training.com/frontend/booking
    Select the “Round trip” radio button
    Select “First” for the “Cabin Class” dropdown
    Select “California” for the “From” dropdown
    Select “Illinois” for the “To” dropdown
    Select the next week for the ”Depart”
    Select the next month for the “Return”
    Select “1” for the “Number of passengers” dropdown
    Select “Adult (16-64)” for the Passenger 1 dropdown
    Click on the “BOOK” button
    Validate the booking information displayed below
    DEPART
    CA to IL
    {dynamic date}
    Number of passengers: 1
    Passenger 1: Adult (16-64)
    Cabin Class: First

    RETURN
    IL to CA
    {dynamic date}
   */

    it.only('Validate the booking for 1 passenger and round trip', () => {

        bookingValidation.getOneWayRadioButton().click()

        bookingValidation.getCabinClassDropdown().select('First')

        bookingValidation.getFromDropdown().select('California')

        bookingValidation.getToDropDown().find('select').select('Illinois')

        bookingValidation.getDepartDropDown().clear().type('05/24/2025')

        bookingValidation.getReturnDateEna().clear().type('06/24/2025')

        bookingValidation.getPassengerSelect().select('1')

        bookingValidation.getPassengerOneDropDown().find('select').select('Adult (16-64)')

        bookingValidation.getBookButton().click()

        cy.get('.ml-3').first().within(() => {

            cy.get('h1').should('have.text', 'DEPART')
            cy.get('h3').eq(0).should('have.text', 'CA to IL')
            cy.get('P').should('include.text', 'Sat May 24 2025')

        });

        cy.get('.ml-3').first().within(() => {

            cy.get('h1').should('have.text', 'RETURN')
            cy.get('h3').eq(0).should('have.text', 'IL to CA')
            cy.get('P').should('include.text', 'Tue Hun 24 2025')

        });

        cy.get('div.mt-4').should('include.text', 'Number of passengers: 1')
        cy.get('div.mt-4').should('include.text', 'Passenger 1: Adult (16-64)')
        cy.get('div.mt-4').should('include.text', 'Cabin Class: First')

    });

    /*
    Navigate to https://techglobal-training.com/frontend/booking
    Select the “One way” radio button
    Select “Premium Economy” for the “Cabin Class” dropdown
    Select “New York” for the “From” dropdown
    Select “Texas” for the “To” dropdown
    Select the next day for the ”Depart”
    Select “2” for the “Number of passengers” dropdown
    Select “Adult (16-64)” for the Passenger 1 dropdown
    Select “Child (2-11)” for the Passenger 2 dropdown
    Click on the “BOOK” button
    Validate the booking information displayed below
    DEPART
    NY to TX
    {dynamic date}
    Number of passengers: 2
    Passenger 1: Adult (16-64)
    Passenger 2: Child (2-11)
    Cabin Class: Premium Economy
    */

    it('Validate the booking for 2 passengers and one way', () => {

        bookingValidation.getOneWayRadioButton().click()

        bookingValidation.getCabinClassDropdown().select('Premium Economy')

        bookingValidation.getFromDropdown().select('New York')

        bookingValidation.getToDropDown().find('select').select('Texas')

        bookingValidation.getDepartDropDown().clear().type('05/18/2025')

        bookingValidation.getPassengerSelect().select('2')

        bookingValidation.getPassengerOneDropDown().find('select').select('Adult (16-64)')

        bookingValidation.getPassengerTwoDropdown().select('Child (2-11)')

        bookingValidation.getBookButton().click()

        cy.get('.ml-3').first().within(() => {

            cy.get('h1').should('have.text', 'DEPART')
            cy.get('h3').eq(0).should('have.text', 'NY to TX')
            cy.get('P').should('include.text', 'Please select a date')

        });

        cy.get('div.mt-4').should('contain', 'Number of passengers: 1')
        cy.get('div.mt-4').should('contain', 'Passenger 1: Adult (16-64)')
        cy.get('div.mt-4').should('contain', 'Passenger 2: Child (2-11)')
        cy.get('div.mt-4').should('contain', 'Cabin Class: Premium Economy')

    });

});