/*
/// <reference types="cypress" />  
// this adds cypress global type inside this file
// use this method require the statement at begining of each file
*/

describe('dashboard', () => {
  
  beforeEach(() => {
    cy.visit("/dashboard"); // domain - 'baseUrl' in cypress.json 
    // cy.get('nav a').as('Dashboardlinks');  // create alias

  })

  it(`has basic info`, () => {
    cy.contains('Tour of Heroes'); 
    cy.get('h1').should('contain', 'Tour');
    cy.title().should('eq', Cypress.env("defaultTitle"));

    

    // drill up then down
    // cy.get() is global
    // node.get() only look for children  
    cy.get('nav a').first().contains('Dashboard')
      .parent().children().last().contains('Heroes');

    // first and last  
    // cy.get('nav a').first().contains('Dashboard');
    // cy.get('nav a').last().contains('Heroes');

    // cy.get('@Dashboardlinks').should('contain', 'Dashboard');
    // cy.get('@Dashboardlinks').eq(0).should('contain', 'Dashboard'); // get alias will re-run selector
    // cy.get('@Dashboardlinks').eq(1).should('contain', 'Heroes');

    cy.get('h3').should('contain', 'Top Heroes');
    cy.get('app-hero-search h4').should('contain', 'Hero Search');
  })


  it.skip(`has title 'Tour of Heroes'`, () => {
    // cy.visit("localhost:4200/dashboard");

    cy.contains('Tour of Heroes'); 
    // find 'Tour of Heros' somewhere on the page
    // this assert a DOM object has this text on page
    // good for initial chacking, then follow by chainning 

    cy.get('h1').should('contain', 'Tour'); // DOM node
    // get let you find various DOM nodes
    // get can return 1 or many potential h1
    // then deal with single results or collections by following methods

    cy.get('h1').then(
      h1 => {

      }
    )
    // this will get access to the raw DOM node h1
    
    cy.title().should('eq', 'Tour of Heroes'); // non-DOM
  })

  it.skip(`has link with text 'Dashboard'`, () => {
    // cy.visit("localhost:4200/dashboard");
    cy.get('nav a').should('contain', 'Dashboard');
  })

  it.skip(`has link with text 'Heroes'`, () => {
    // cy.visit("localhost:4200/dashboard");
    cy.get('nav a').eq(1).should('contain', 'Heroes');
    // eq(1) will get the second element of the collection return by get
  })

  it.skip(`has title 'Top Heroes'`, () => {
    // cy.visit("localhost:4200/dashboard");
    cy.get('h3').should('contain', 'Top Heroes');
  })

  it.skip(`has title 'Heroe Search'`, () => {
    // cy.visit("localhost:4200/dashboard");
    cy.get('#search-component h4').should('contain', 'Hero Search');
  })

  it(`can search`, () => {
    /*
    cy.get(`#search-box`).type("mr. nice");
    cy.get(`.search-result li`).should('contain', 'Mr. Nice').click();
    cy.url().should(`include`, `/detail/11`)
    cy.get(`[ng-reflect-model='Mr. Nice']`).should('be.visible');
    */

    cy.get(`#search-box`).type("n");
    cy.get(`.search-result li`)
      .should('have.length', 6)
      .first().contains('Narco');
    cy.get(`.search-result li`).contains('Mr. Nice').click();
    cy.url().should(`include`, `/detail/11`)
    
  })

})