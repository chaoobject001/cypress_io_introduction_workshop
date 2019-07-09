describe(`Hero Detail`, () => {
  it(`should edit name`, () => {
    cy.visit('/detail/11');

    cy.server(); // 1. start cypress server (engine) to intercept request
    // 2. look for request with specific url endpoint, intercept it from going to server
    // then provide a response body
    cy.route({
      method: "PUT",
      url: '/api/heroes/11',
      response: { id:11, name: "Spider Pig" }
    }); 

    
    
    cy.get('input').should('have.value', 'Mr. Nice');
    
    // if assessor should('have.value', x) does not exist, this is how to get the value of input field 
    // cy.get('input').invoke('val').then(val => {
    //   expect(val).to.equal('Mr. Nice')
    // })

    cy.get('input').clear().type('Spider Pig');
    cy.get('h2').first().should('contain', 'SPIDER PIG');
    cy.contains('save').click()

    // a fix with UI to restore DB to the state before edit
    // - can be removed after cy.route() intercept request
    // cy.visit('/detail/11');
    // cy.get('input').clear().type('Mr. Nice');
    // cy.contains('save').click();

  })
})