describe('input testing', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('input exists and is empty', () => {
    cy.get('input').should('exist').and('be.empty')
  })
  it('input can be typed into, and deleted', () => {
    cy.get('input').type('some text').should('have.value', 'some text')
    cy.get('input').clear().should('be.empty')
  })
  it('can paste and copy text', () => {
    cy.get('input').type('some text')
    cy.get('input').invoke('val').then((copiedText) => {
      cy.get('input').clear().should('be.empty')
      cy.get('input').invoke('val', copiedText).should('have.value', 'some text')
    })
  })
})
