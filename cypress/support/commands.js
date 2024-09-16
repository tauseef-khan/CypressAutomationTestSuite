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
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillCheckoutForm', (firstName, lastName, email, street, city, postcode) => {
    const firstNameTextField = 'body > div > astro-island > div > div > form > input:nth-child(1)'
    cy.get(firstNameTextField).type(firstName) 

    const lastNameTextField = 'body > div > astro-island > div > div > form > input:nth-child(2)'
    cy.get(lastNameTextField).type(lastName)

    const emailTextField = 'body > div > astro-island > div > div > form > input:nth-child(3)'
    cy.get(emailTextField).type(email)

    const streetTextField = 'body > div > astro-island > div > div > form > input:nth-child(4)'
    cy.get(streetTextField).type(street)

    const cityTextField = 'body > div > astro-island > div > div > form > input:nth-child(5)'
    cy.get(cityTextField).type(city)

    const postcodeTextField = 'body > div > astro-island > div > div > form > input:nth-child(6)'
    cy.get(postcodeTextField).type(postcode)
})