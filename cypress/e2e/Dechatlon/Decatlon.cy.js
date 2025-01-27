/// <reference types="cypress" />

// Welcome to Cypress!

describe('Dechatlon click ', () => {
  it("Visit", () => {
    //cy.visit('https://www.decathlon.ro/');
    cy.visit('https://www.decathlon.ro/', { failOnStatusCode: false });
    
    cy.get('#didomi-notice-agree-button').click();  //find button by its ID and click on it
    //cy.get('#didomi-notice-agree-button', { timeout: 10000 }).should('be.visible').click();
 
    cy.wait(2000)
   
    //adding assertions to confirm the button click's result:
    cy.url().should('include', '/');                             // checking if I'm still on the homepage
    cy.get('#didomi-notice-agree-button').should('not.exist');   // checking if the button still exists, expected to not exist anymore
    
    cy.wait(2000)

    cy.get('.vtmn-truncate.vtmn-hidden.gt-small-desktop\\:vtmn-block.svelte-1hmrk47') 
    .contains('Contul meu')
    .click();  ////click on btn Contul meu

    cy.wait(2000)

    // //cy.get('input[type="checkbox"]').click();
    // cy.origin('https://login.decathlon.net', () => {
    // // Interact with the checkbox on the login page:
    // cy.get('input[type="checkbox"]').should('be.visible').click();
    // });




    //Exemple de la Arnold:
    //cy.get('#didomi-notice-agree-button').click()   //OK!
    //cy.xpath('/html/body/div[1]/div/div/div/div/div/div[2]/button[3]/span').click()  //NOK!!!
    //cy.xpath('//*[@id="buttons"]/button[3]').click()
    //cy.get('#buttons').find('#didomi-notice-agree-button').click()
    
  })
})

//run with the commands:
//first run command:  npm install cypress
//second run command: npx cypress open
//or
//run this command for executing in CLI mode: npx cypress run
