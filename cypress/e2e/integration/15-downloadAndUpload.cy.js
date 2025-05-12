/// <reference types="cypress"/>
import fs from "fs";
import path from 'path'

describe("File Download & File Upload", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend");
    cy.clickCard("File Download & Upload");
  });

  const fileName = 'SampleText.txt'
  const downloadPath = path.join('cypress/downloads', fileName)

  it("File Download", () => {
    cy.get("#file_download").click();

    cy.readFile(downloadPath);

    // ways to read file
    // fs.readSync()
    // cy.fixture()
    // fs.unlink('cypress/downloads/SampleText.txt')
  });

  /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "File Upload" card
   * Send the path of the file as keys to the "Choose File" input box
   * Click on the "UPLOAD" button
   * Validate the result message equals "You Uploaded 'SampleText.txt'"
   */
  it("File Upload", () => {
    // .selectFile('pathOfFile')
    cy.get('#file_upload').selectFile(downloadPath)
    cy.get('#file_submit').realClick()
    cy.get('#result').should('be.visible').should('have.text', `You uploaded ${fileName}`)
  });

});

/*
function clickSearchButton() {
  cy.get('.searchButton').click()
}

function searchUser(userName) {
  cy.get('.searchBar').type(userName)
  this.clickSearchButton()
  cy.get('.row').contains(userName).should('have.text', userName)
}

function editOrShowUserByName(buttonType ,userName) {
  cy.get('.row').contains(userName).find(buttonType).click()
  cy.url().should('eq', '/edit/user/18')
}

function searchAndEditOrShowUserByName(buttonType ,userName){
  this.searchUser()
  this.editOrShowUserByName(buttonType ,userName)
}
*/