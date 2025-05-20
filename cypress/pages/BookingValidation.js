

export default class BookingValidation {

    getOneWayRadioButton() {
        return cy.get('[class$="ml-0"] .mr-1')
    }

    getRoundTripRadioButton() {
        return cy.get('label[class$="radio"] .mr-1')
    }

    getCabinClassLabel() {
        return cy.contains('label', 'Cabin Class')
    }

    getCabinClassDropdown() {
        return cy.contains('label', 'Cabin Class')
            .nextAll('div.select')
            .first()
            .find('select')
    }

    getFromLabel() {
        return cy.contains('label', 'From')
    }

    getFromDropdown() {
        return cy.contains('label', 'From')
            .nextAll('div.select')
            .first()
            .find('select')
    }

    getToLabel() {
        return cy.get('.field:nth-of-type(4) > label')
    }

    getToDropDown() {
        return cy.get('.select').eq(2)
    }

    getDepartLabel() {
        return cy.get('.field:nth-of-type(5) > label')
    }

    getDepartDropDown() {
        return cy.get('input[type="text"][placeholder*="MM"]').first()
    }

    getReturnLabel() {
        return cy.get('label[class="label"]').eq(5)
    }

    getReturnedDateDis() {
        return cy.get('input[disabled]')
    }

    getReturnDateEna() {
        return cy.get('input[placeholder="MM/DD/YY"]').eq(1)
    }

    getNumberOfPassengersLabel() {
        return cy.get('.field').eq(6).first()
    }

    getPassengerSelect() {
        return cy.get('select[style]').eq(3)
    }

    getPassengerOneDropDown() {
        return cy.get('.select').eq(4)
    }

    getPassengerOneLabel() {
        return cy.get("label[class='label']").eq(7)
    }

    getPassengerTwoDropdown() {
        return cy.contains('label', 'Passenger 2')
            .nextAll('div.select')
            .first()
            .find('select')
    }

    getBookButton() {
        return cy.get('.Button_c_button__TmkRS ')
    }
};