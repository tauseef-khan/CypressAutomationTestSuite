describe('Triple Trouble Family Box page', () => {
  
  beforeEach(() => {

    cy.visit('/shop/triple-trouble-family-box')
  })

  it('Assert page title and summary', () => {
    
    const pageTitleHeading = 'body > div > astro-island > div > div > h1'
    cy.get(pageTitleHeading).should('contains.text', "Triple Trouble Family Box")

    const pageTitleSummary = 'body > div > astro-island > div:nth-child(1) > div:nth-child(1) > p'
    cy.get(pageTitleSummary).should('contains.text', "When it's too hard to choose, let us choose for you! An awesome bundle of donuts just for you!")
  })

  it('Assert default price', () => {

    const totalPriceLabel = 'body > div > astro-island > div:nth-child(2) > div > p:nth-child(1)'
    cy.get(totalPriceLabel).should('contain.text', "Total price")

    const totalPriceText = 'body > div > astro-island > div:nth-child(2) > div > p:nth-child(2)'
    cy.get(totalPriceText).should('contain.text', "$19.00")
  })

  it('Assert image source links', () => {

    const mainImage = 'body > div > astro-island > div > figure > picture > img'
    cy.get(mainImage).should('have.attr', 'src', 'https://media.crystallize.com/dounot/22/12/2/27/triple_trouble_famimly_box.png')

    const bakeryCounterImage = 'body > div > astro-island > div > div:nth-child(2) > div > figure > picture > img'
    cy.get(bakeryCounterImage).should('have.attr', 'src', 'https://media.crystallize.com/dounot/22/12/2/4/@100/bakery-counter.jpeg')
  })

  it('Assert nutritional information table', () => {

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

  it('Assert related donuts section', () => {

    const relatedDonutsSection = '.items-start'

    cy.get(relatedDonutsSection).within(() => {
      cy.get('a').should('have.length', 3)

      cy.get('a:nth-child(1) > h2').should('contain.text', "Strawberry blast")
      cy.get('a:nth-child(1) > div > div:nth-child(1) > div:nth-child(1)').should('contain.text', "Limited edition")
      cy.get('a:nth-child(1) > div > div:nth-child(1) > div:nth-child(2)').should('contain.text', "Glazed")
      cy.get('a:nth-child(1) > div > div:nth-child(2) ').should('contain.text', "$6")
      cy.get('a:nth-child(1) > figure > picture > img').should('have.attr', 'src', 'https://media.crystallize.com/dounot/23/10/1/2/strawberry_blast.png')

      cy.get('a:nth-child(2) > h2').should('contain.text', "Creamy Nonsense")
      cy.get('a:nth-child(2) > div > div:nth-child(1) > div:nth-child(1)').should('contain.text', "New")
      cy.get('a:nth-child(2) > div > div:nth-child(1) > div:nth-child(2)').should('contain.text', "Glazed")
      cy.get('a:nth-child(2) > div > div:nth-child(2) ').should('contain.text', "$8")
      cy.get('a:nth-child(2) > figure > picture > img').should('have.attr', 'src', 'https://media.crystallize.com/dounot/23/10/1/4/creamy_nonsense.png')

      cy.get('a:nth-child(3) > h2').should('contain.text', "Chocolate Dream")
      cy.get('a:nth-child(3) > div > div:nth-child(1) > div:nth-child(1)').should('contain.text', "New")
      cy.get('a:nth-child(3) > div > div:nth-child(2) ').should('contain.text', "$8")
      cy.get('a:nth-child(3) > figure > picture > img').should('have.attr', 'src', 'https://media.crystallize.com/dounot/23/10/1/3/chocolate_dream.png')
    })
  })
})