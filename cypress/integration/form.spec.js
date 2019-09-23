/* eslint-disable no-undef */
describe('Form', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should focus the input', () => {
    cy.get('[data-test=form-control]').should('be.focused')
  })

  it('should accept input', () => {
    const input = "Learn about Cypress"
    cy.get('[data-test=form-control]')
      .type(input)
      .should('have.value', input)
  })

  it('should display list of todo', () => {
    cy.get('li')
      .should('have.length', 2)
  })

  it('should add a new todo', () => {
    const input = "Learn about cypress"
    cy.get('.form-control')
      .type(input)
      .type('{enter}')
      .get('li')
      .should('have.length', 3)
  })
})
