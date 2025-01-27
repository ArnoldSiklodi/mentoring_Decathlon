describe('Checkbox Test', () => {
    it('Click on Mai multe button', () => {
      // Visit the website
      cy.visit('https://www.decathlon.ro/');
  
      cy.get('#didomi-notice-disagree-button').click();
      
      //adding assertions to confirm the button click's result:
      cy.url().should('include', '/');                             // checking if I'm still on the homepage
      cy.get('#didomi-notice-disagree-button').should('not.exist');   // checking if the button still exists, expected to not exist anymore
    });
  });
  