describe('Triple Truble Family Box page', () => {
  
  it('Assert text elements', () => {
    cy.visit('/')
    
    const familyBoxLink = 'body > div > div:nth-child(1) > div > div:nth-child(1) > a > div > div > div:nth-child(1)'
    cy.get(familyBoxLink).should('contains.text', "Triple Trouble Family Box")
    cy.get(familyBoxLink).click()

    const pageTitleHeading = 'body > div > astro-island > div > div > h1'
    cy.get(pageTitleHeading).should('contains.text', "Triple Trouble Family Box")

    const pageTitleSummary = 'body > div > astro-island > div:nth-child(1) > div:nth-child(1) > p'
    cy.get(pageTitleSummary).should('contains.text', "When it's too hard to choose, let us choose for you! An awesome bundle of donuts just for you!")

    const totalPriceLabel = 'body > div > astro-island > div:nth-child(2) > div > p:nth-child(1)'
    cy.get(totalPriceLabel).should('contain.text', "Total price")

    const totalPriceText = 'body > div > astro-island > div:nth-child(2) > div > p:nth-child(2)'
    cy.get(totalPriceText).should('contain.text', "$19.00")

    const mainImage = 'body > div > astro-island > div > figure > picture > img'
    cy.get(mainImage).should('have.attr', 'src', 'https://media.crystallize.com/dounot/22/12/2/27/triple_trouble_famimly_box.png')

    const bakeryCounterImage = 'body > div > astro-island > div > div:nth-child(2) > div > figure > picture > img'
    cy.get(bakeryCounterImage).should('have.attr', 'src', 'https://media.crystallize.com/dounot/22/12/2/4/@100/bakery-counter.jpeg')

    const nutritionalInfoTable = 'body > div > astro-island > div > div:nth-child(4) > div:nth-child(2)'
    
    cy.get(nutritionalInfoTable).within(() => {
      cy.get('div').should('have.length', 7)

      cy.get('div:nth-child(1) > p:nth-child(1)').should('contain.text', "Calories")
      cy.get('div:nth-child(1) > p:nth-child(2)').should('contain.text', "143 kj")
      
      cy.get('div:nth-child(2) > p:nth-child(1)').should('contain.text', "Total fat")
      cy.get('div:nth-child(2) > p:nth-child(2)').should('contain.text', "5.4 g")

      cy.get('div:nth-child(3) > p:nth-child(1)').should('contain.text', "Cholesterol")
      cy.get('div:nth-child(3) > p:nth-child(2)').should('contain.text', "0 mg")

      cy.get('div:nth-child(4) > p:nth-child(1)').should('contain.text', "Sodium")
      cy.get('div:nth-child(4) > p:nth-child(2)').should('contain.text', "86 mg")

      cy.get('div:nth-child(5) > p:nth-child(1)').should('contain.text', "Potassium")
      cy.get('div:nth-child(5) > p:nth-child(2)').should('contain.text', "109 mg")

      cy.get('div:nth-child(6) > p:nth-child(1)').should('contain.text', "Total carbohydrates")
      cy.get('div:nth-child(6) > p:nth-child(2)').should('contain.text', "22.8 mg")

      cy.get('div:nth-child(7) > p:nth-child(1)').should('contain.text', "Protein")
      cy.get('div:nth-child(7) > p:nth-child(2)').should('contain.text', "2.4 g")
    })
  })
})