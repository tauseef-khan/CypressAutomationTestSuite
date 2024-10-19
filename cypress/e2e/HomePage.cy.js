describe('Home page', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Assert grid layout', () => {
    
    const gridLayout = '.crystallize-grid--css-grid'

    cy.get(gridLayout).within(() => {
      cy.get('.crystallize-grid__cell').should('have.length', 8)
      
      cy.get('.crystallize-grid__cell:nth-child(1)').should('have.attr', 'style', 'grid-column:span 3;grid-row:span 1')
      cy.get('.crystallize-grid__cell:nth-child(2)').should('have.attr', 'style', 'grid-column:span 1;grid-row:span 1')
      cy.get('.crystallize-grid__cell:nth-child(3)').should('have.attr', 'style', 'grid-column:span 1;grid-row:span 1')
      cy.get('.crystallize-grid__cell:nth-child(4)').should('have.attr', 'style', 'grid-column:span 1;grid-row:span 1')
      cy.get('.crystallize-grid__cell:nth-child(5)').should('have.attr', 'style', 'grid-column:span 3;grid-row:span 1')
      cy.get('.crystallize-grid__cell:nth-child(6)').should('have.attr', 'style', 'grid-column:span 1;grid-row:span 1')
      cy.get('.crystallize-grid__cell:nth-child(7)').should('have.attr', 'style', 'grid-column:span 1;grid-row:span 1')
      cy.get('.crystallize-grid__cell:nth-child(8)').should('have.attr', 'style', 'grid-column:span 1;grid-row:span 1')
    })
  })

  it('Assert donut names and prices', () => {
    
    const gridLayout = '.crystallize-grid--css-grid'

    cy.get(gridLayout).within(() => {
     
      const donutOne = '.crystallize-grid__cell:nth-child(1) > a > div > div'

      cy.get(donutOne).within(() => {
        cy.get('h2').should('contain.text', "Triple Trouble Family Box")
        cy.get('p').should('contain.text', "$19")
      })

      const donutTwo = '.crystallize-grid__cell:nth-child(2) > a > div'

      cy.get(donutTwo).within(() => {
        cy.get('h2').should('contain.text', "Mixed Delight")
        cy.get('div > p').should('contain.text', "$2")
      })

      const donutThree = '.crystallize-grid__cell:nth-child(3) > a > div'

      cy.get(donutThree).within(() => {
        cy.get('h2').should('contain.text', "Chocolate Dream")
        cy.get('div > p').should('contain.text', "$8")
      })

      const donutFour = '.crystallize-grid__cell:nth-child(4) > a > div'

      cy.get(donutFour).within(() => {
        cy.get('h2').should('contain.text', "Strawberry blast")
        cy.get('div > p').should('contain.text', "$6")
      })

      const donutFive = '.crystallize-grid__cell:nth-child(5) > a > div'

      cy.get(donutFive).within(() => {
        cy.get('h2').should('contain.text', "Strawberry Massacre")
        cy.get('div > p').should('contain.text', "$1")
      })

      const donutSix = '.crystallize-grid__cell:nth-child(6) > a > div'

      cy.get(donutSix).within(() => {
        cy.get('h2').should('contain.text', "Strawberry blast")
        cy.get('div > p').should('contain.text', "$6")
      })

      const donutSeven = '.crystallize-grid__cell:nth-child(7) > a > div'

      cy.get(donutSeven).within(() => {
        cy.get('h2').should('contain.text', "Mixed Delight")
        cy.get('div > p').should('contain.text', "$2")
      })

      const donutEight = '.crystallize-grid__cell:nth-child(8) > a > div'

      cy.get(donutEight).within(() => {
        cy.get('h2').should('contain.text', "Chocolate Dream")
        cy.get('div > p').should('contain.text', "$8")
      })
    })
  })

})