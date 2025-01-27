describe('Checkbox Test', () => {
    it('Click on Mai multe button', () => {
      // Visit the website
      cy.visit('https://www.decathlon.ro/');
  
      //cy.xpath('/html/body/div[1]/div/div/div/div/div/div[2]/button[3]/span').click();  //nok
      //cy.xpath('//*[@id="didomi-notice-agree-button"]/span').click();  //nok

      //cy.xpath('//*[@id="buttons"]/button[3]').click();  //nok! why???

      cy.get('#buttons').find('#didomi-notice-agree-button').click();  //OK!!! :)

 
    });
  });