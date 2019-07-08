describe(`Hero Detail`, () => {
  it(`should edit name`, () => {
    cy.visit('/detail/11');

    cy.server(); // start cypress server (engine) to intercept request

    
    
    cy.get('input').should('have.value', 'Mr. Nice');
    
    // if assessor should('have.value', x) does not exist, this is how to get the value of input field 
    // cy.get('input').invoke('val').then(val => {
    //   expect(val).to.equal('Mr. Nice')
    // })

    cy.get('input').clear().type('Spider Pig');
    cy.contains('save').click();

  })
})