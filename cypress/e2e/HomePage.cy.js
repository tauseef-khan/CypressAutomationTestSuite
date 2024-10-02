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
})