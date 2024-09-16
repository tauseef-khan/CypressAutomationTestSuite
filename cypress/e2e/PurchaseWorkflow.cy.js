describe('Purchasing donut(s)', () => {
  
  it('Purchasing a single donut', () => {
    cy.visit('/')
    
    const chocolateDreamDonutLink = 'body > div > div:nth-child(1) > div > div:nth-child(3) > a > div'
    cy.get(chocolateDreamDonutLink).should('contains.text', "Chocolate Dream")
    cy.get(chocolateDreamDonutLink).click()

    const addToCartButton = 'body > div > astro-island > div > button'
    cy.get(addToCartButton).click()

    const cartButton = 'body > astro-island > header > a:nth-child(2) > div'
    cy.get(cartButton).click()

    const shoppingCartListSection = 'body > div > astro-island > div > div'
    cy.get(shoppingCartListSection).should('contain.text', "Chocolate Dream")

    const checkoutButton = 'body > div > astro-island > div > div > a'
    cy.get(checkoutButton).click()

    cy.fillCheckoutForm('John', 'Single-Donut', 'johndoe@dinosdonuts.com', '123 Fairy Street', 'London', 'E1 4NS')

    const payNowButton = 'body > div > astro-island > div > div > button'
    cy.get(payNowButton).should('contain.text', "Pay Now")
  })

  it('Purchasing a family box', () => {
    cy.visit('/')
    
    const familyBoxLink = 'body > div > div:nth-child(1) > div > div:nth-child(1) > a > div > div > div:nth-child(1)'
    cy.get(familyBoxLink).should('contains.text', "Triple Trouble Family Box")
    cy.get(familyBoxLink).click()

    const addToCartButton = 'body > div > astro-island > div > button'
    cy.get(addToCartButton).click()

    const cartButton = 'body > astro-island > header > a:nth-child(2) > div'
    cy.get(cartButton).click()

    const shoppingCartListSection = 'body > div > astro-island > div > div'
    cy.get(shoppingCartListSection).should('contain.text', "Triple Trouble Family Box")

    const checkoutButton = 'body > div > astro-island > div > div > a'
    cy.get(checkoutButton).click()

    cy.fillCheckoutForm('John', 'Family-Box', 'johndoe@dinosdonuts.com', '123 Fairy Street', 'London', 'E1 4NS')

    const payNowButton = 'body > div > astro-island > div > div > button'
    cy.get(payNowButton).should('contain.text', "Pay Now")
  })

  it('Purchasing multiple single donuts family box', () => {
    cy.visit('/')
    
    const mixedDelightDonutLink = 'body > div > div:nth-child(1) > div > div:nth-child(2) > a > div'
    cy.get(mixedDelightDonutLink).should('contains.text', "Mixed Delight")
    cy.get(mixedDelightDonutLink).click()

    const addToCartButton = 'body > div > astro-island > div > button'
    cy.get(addToCartButton).click()

    const homePageIcon = 'body > astro-island > header > a:nth-child(1) > img'
    cy.get(homePageIcon).click()

    const chocolateDreamDonutLink = 'body > div > div:nth-child(1) > div > div:nth-child(3) > a > div'
    cy.get(chocolateDreamDonutLink).should('contains.text', "Chocolate Dream")
    cy.get(chocolateDreamDonutLink).click()

    cy.get(addToCartButton).click()
    cy.get(homePageIcon).click()

    const strawberryBlastDonutLink = 'body > div > div:nth-child(1) > div > div:nth-child(4) > a > div'
    cy.get(strawberryBlastDonutLink).should('contains.text', "Strawberry blast")
    cy.get(strawberryBlastDonutLink).click();

    cy.get(addToCartButton).click()

    const cartButton = 'body > astro-island > header > a:nth-child(2) > div'
    cy.get(cartButton).click()

    const shoppingCartListSection = 'body > div > astro-island > div > div'
    cy.get(shoppingCartListSection).should('contain.text', "Mixed Delight")
    cy.get(shoppingCartListSection).should('contain.text', "Chocolate dream")
    cy.get(shoppingCartListSection).should('contain.text', "Strawberry blast")

    const checkoutButton = 'body > div > astro-island > div > div > a'
    cy.get(checkoutButton).click()

    cy.fillCheckoutForm('John', 'Multiple-Single', 'johndoe@dinosdonuts.com', '123 Fairy Street', 'London', 'E1 4NS')

    const payNowButton = 'body > div > astro-island > div > div > button'
    cy.get(payNowButton).should('contain.text', "Pay Now")
  })
})