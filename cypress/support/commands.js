// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

Cypress.Commands.add('clickCard', (link) => {
    cy.contains('.card, [class*="projectCard"]', link).click();
});


Cypress.Commands.add('selectDropdown', (locator, option) => {
    cy.get(locator).select(option)
});


Cypress.Commands.add('log_in', (email, name) => {
    cy.get('[name="email"]').type(email);
    cy.get('.mb-3 > input').clear().type(name);
    cy.get('.mb-3 + button').click();
});



//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//

Cypress.Commands.add('logText', { prevSubject: true }, (subject) => {
    const text = subject.text()
    cy.log(text)
});

Cypress.Commands.add('haveText', { prevSubject: 'element' }, (subject, expactedText) => {
    cy.wrap(subject).should('have.text', expactedText)
});

/*
Cypress.Commands.add('attr', { prevSubject }, (subject, attr, value) => {
    if (value === null) {
        cy.wrap(subject).should('have.attr', attr)
    }
    else cy.wrap(subject).should('have.attr', attr, value)
});
*/

//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })