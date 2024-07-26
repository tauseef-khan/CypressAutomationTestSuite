describe('Purchasing donut(s)', () => {
  
  it('Purchasing a single donut', () => {
    cy.visit('/')
    
    const familyBoxLink = 'body > div > div:nth-child(1) > div > div:nth-child(1) > a > div > div > div:nth-child(1)'
    cy.get(familyBoxLink).should('contains.text', "Triple Trouble Family Box")
    cy.get(familyBoxLink).click()

    const addToCartButton = 'body > div > astro-island > div > button'
    cy.get(addToCartButton).click()

    const cartButton = 'body > astro-island > header > a:nth-child(2) > div'
    cy.get(cartButton).click()

    // const shoppingCartList = 'body > div > astro-island > div:nth-child(1) > div:nth-child(2)'
    // cy.get(shoppingCartList).within(() => {
    //   cy.get('div').should('have.length', 2)
    // })
  })
})