context('Actions', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('BASE_URL'))
  })


it('reset passwrod', () => {
    cy.get('a[title="Click here to reset your password"]').click()
    cy.get('#resetPassword_username').type('sreelatha.b84@gmail.com')
    cy.get('#resetPasswordSaveButton').click()
    cy.get('div').should('contain', 'Reset password request successfully submitted.')
  })


  it('Invalid username and password', () => {
    cy.get('#loginEmail').type('sreelatha.b84@gmail.com')
    cy.get('#password').type('password')
    cy.get('#loginSubmitButton').click()
    cy.get('div').should('contain', 'Username and/or password invalid')
  })


it('Blank username and blank password', () => {
    cy.get('#loginSubmitButton').should('have.attr', 'disabled', 'disabled')
  })


 it('blank username and some password', () => {
    cy.get('#password').type('password')
    cy.get('#loginSubmitButton').click()
    cy.get('#loginEmail').should('have.attr','required','required')
  })

it('some username and blank password', () => {
    cy.get('#loginEmail').type('abc.com')
    cy.get('#loginSubmitButton').click()
    cy.get('#password').should('have.attr','required','required')
  })
 })