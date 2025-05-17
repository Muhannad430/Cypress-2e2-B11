/// <reference types="cypress"/>

describe("Static Tables", () => {

    const tablePage = 
    beforeEach(() => {
        cy.visit("https://www.techglobal-training.com/frontend");
        cy.clickCard("Tables");

        cy.fixture('example').then((data) => {
            this.headers = data.header
        })
    });

    /**
     * TEST CASE 1
     * Verify the headers of the table
     * Go to https://techglobal-training.com/frontend/
     * Click on the "Tables" card
     * Validate the headers of the table are "Rank", "Company", "Employees", and "Country"
     */
    it("Verify the headers of the table", () => {

        cy.get('#static_table  thead  tr th').each(($ele, index) => {
            cy.wrap($ele).should('have.text', staticTable[index])
        })
    });

});


import TablesPage from '../../pages/TablesPage'

describe('Static Tables', { tags: '@regression' }, () => {
  const tablesPage = new TablesPage()

  beforeEach(() => {
    cy.visit(`${Cypress.env('SITE_URL')}/frontend`)
    cy.clickCard('Tables')

    cy.fixture('example').then(function (data) {
      this.headers = data.headers
    })
  })

  /**
   * TEST CASE 1
   * Verify the headers of the table
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Tables" card
   * Validate the headers of the table are "Rank", "Company", "Employees", and "Country"
   */
  it('Verify the headers of the table', { tags: '@table' }, function () {
    tablesPage.getCompanyTableHeaders().each(($el, index) => {
      cy.wrap($el).should('have.text', this.headers[index])
    })
  })
})