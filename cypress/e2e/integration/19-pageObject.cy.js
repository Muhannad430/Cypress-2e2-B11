/// <reference types="cypress"/>
import LoginPage from "../../pages/LoginPage";

describe("Login Page Test", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("SITE_URL")}/frontend`);
        cy.clickCard("Login Function");

        cy.fixture('example').then((data) => {
            this.username = data.username
            this.password = data.password
        })
    });

    const loginPage = new LoginPage()

    it("Login without POM", () => {
        cy.get("#username").type(Cypress.env("UI_USERNAME"));

        // cy.pause()

        cy.get("#password").type(Cypress.env("UI_PASSWORD"));

        cy.get("#login_btn").click();

        cy.get("#success_lgn").should("be.visible");
    });

    it('Login with POM', () => {
        loginPage.userLogin(Cypress.env("UI_USERNAME"), Cypress.env("UI_PASSWORD"))
        loginPage.getSuccessMessage().should('be.visible')
    });

    it('Login with POM - Negative', () => {
        loginPage.userLogin('MOMO', '123456')
        loginPage.clickLoginButton()
        loginPage.geterrorMessage().should('have.text', 'Invalid Username entered!')
    });

});