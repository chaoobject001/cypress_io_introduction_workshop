describe(`Hero Detail`, () => {
  it(`should edit name`, () => {
    // test as mobile viewport for different layouts
    cy.viewport(720, 1280);

    cy.visit('/detail/11');

    cy.server(); // 1. start cypress server (engine) to intercept request
    // 2. look for request with specific url endpoint, intercept it from going to server
    // then provide a response body
    cy.route({
      method: "PUT",
      url: '/api/heroes/11',
      response: { id:11, name: "Spider Pig" }
    }).as('hero11update'); 

    
    
    cy.get('input').should('have.value', 'Mr. Nice');
    cy.screenshot(); // capture screenshoot at this point - overwritten in each run - with paid service it can be saved over time


    // if assessor should('have.value', x) does not exist, this is how to get the value of input field 
    // cy.get('input').invoke('val').then(val => {
    //   expect(val).to.equal('Mr. Nice')
    // })

    cy.get('input').clear().type('Spider Pig');
    cy.get('h2').first().should('contain', 'SPIDER PIG');
    cy.contains('save').click()
    cy.wait('@hero11update')

    // a fix with UI to restore DB to the state before edit
    // - can be removed after cy.route() intercept request
    // cy.visit('/detail/11');
    // cy.get('input').clear().type('Mr. Nice');
    // cy.contains('save').click();

  })
})