import { BasePage } from './BasePage'


export class BookingPage extends BasePage {

    getTripTtype() {
        cy.get('.radio') // gives you both OneWay and Round trip
    }

    getCabinClassDropDown() {
        
    }
}