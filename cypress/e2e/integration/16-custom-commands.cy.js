/// <reference types="cypress"/>

describe("Cypress Custom Commands", () => {
    beforeEach(() => {
        cy.visit("https://www.techglobal-training.com/frontend");
        cy.clickCard("HTML Elements");
    });

    it("Parent Command", () => {

        cy.log_in('randomemail@gmail.com', 'muhannad')
    });

    it('Child commands', () => {

        cy.get('#main_heading').then(($el) => {
            const text = $el.text()
            cy.log(text)
        })

        cy.get('#main_heading')

    })
});