describe('in the tic tac toe game', () => {
  it('the player should win', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Start Game').click()
    cy.contains('Scoreboard')
  })
})
