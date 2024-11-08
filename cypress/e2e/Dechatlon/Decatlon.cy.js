/// <reference types="cypress" />

// Welcome to Cypress!

describe('Dechatlon click ', () => {
  it("Visit", () => {
    cy.visit('https://www.decathlon.ro/')
    //cy.get('#didomi-notice-agree-button').click()
    //cy.xpath('/html/body/div[1]/div/div/div/div/div/div[2]/button[3]/span').click()
    //cy.xpath('//*[@id="buttons"]/button[3]').click()
    //cy.get('#buttons').find('#didomi-notice-agree-button').click()
  })
})