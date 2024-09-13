describe('Purchasing donut(s)', () => {
  
  it('Purchasing a family box', () => {
    cy.visit('/')
    
    const familyBoxLink = 'body > div > div:nth-child(1) > div > div:nth-child(1) > a > div > div > div:nth-child(1)'
    cy.get(familyBoxLink).should('contains.text', "Triple Trouble Family Box")
    cy.get(familyBoxLink).click()

    const addToCartButton = 'body > div > astro-island > div > button'
    cy.get(addToCartButton).click()

    const cartButton = 'body > astro-island > header > a:nth-child(2) > div'
    cy.get(cartButton).click()

    const checkoutButton = 'body > div > astro-island > div > div > a'
    cy.get(checkoutButton).click()

    const firstNameTextField = 'body > div > astro-island > div > div > form > input:nth-child(1)'
    cy.get(firstNameTextField).type('John') 

    const lastNameTextField = 'body > div > astro-island > div > div > form > input:nth-child(2)'
    cy.get(lastNameTextField).type('Doe')

    const emailTextField = 'body > div > astro-island > div > div > form > input:nth-child(3)'
    cy.get(emailTextField).type('johndoe@dinosdonuts.com')

    const streetTextField = 'body > div > astro-island > div > div > form > input:nth-child(4)'
    cy.get(streetTextField).type('123 Fairy Street')

    const cityTextField = 'body > div > astro-island > div > div > form > input:nth-child(5)'
    cy.get(cityTextField).type('London')

    const postcodeTextField = 'body > div > astro-island > div > div > form > input:nth-child(6)'
    cy.get(postcodeTextField).type('E1 4NS')

    const payNowButton = 'body > div > astro-island > div > div > button'
    cy.get(payNowButton).should('contain.text', "Pay Now")
  })
})