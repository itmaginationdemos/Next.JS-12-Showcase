/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {

    cy.visit('http://localhost:3000')
  })

  it('renders the home page', () => {

    cy.get('h1').should('contain.text', "Next.js 12")
  })

  it('you may click the button, and get a new cat name', () => {
    cy.get('p#cat-name')
      .invoke("text")
      .then(text1 => {
        cy.get('button').click()
        cy.get('p#cat-name')
          .invoke("text")
          .should(text2 => {
            expect(text1).not.to.eq(text2)
          })
      })
  })
})
