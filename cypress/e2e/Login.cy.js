import loginPage from '../support/pageObject/userPage'
const user = require('../fixtures/userData.json')

describe('Login Scenario', () => {

  beforeEach(() => {
    loginPage.openLoginPage()
  })

  //it.only hanya tc1 yang dijalankan, it.skip hanya tc1 yang diskip
  it('Success login with valid input', () => {
    loginPage.submitUsernameAndPassword(user.username, user.password)
    loginPage.verifyLoginSuccess()
  })

  it('Failed to log in with invalid input (multiple cases)', () => {
    cy.fixture('wrongUserData.json').then((user) => {
      user.invalidData.forEach((data) => {
        loginPage.submitUsernameAndPassword(data.username, data.password)
        loginPage.verifyLoginFailed()
      })
    })
  })

  it('Failed to login with empty input', () => {
    cy.get(loginPage.loginButton).click()
    loginPage.verifyLoginFailed()
  })

})