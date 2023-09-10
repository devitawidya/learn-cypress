import loginPage from '../support/pageObject/userPage'
const user = require('../fixtures/userData.json')
import appointmentPage from '../support/pageObject/appointmentPage'

const uuid = () => Cypress._.random('^[A-Za-z]+$')
//const id = uuid()
const randomText = `${uuid()}`

describe('Make Appointment Scenario', () => {

  beforeEach(() => {
    loginPage.openLoginPage()
    loginPage.submitUsernameAndPassword(user.username, user.password)
  })

  it('Empty required field', () => {
    cy.get(appointmentPage.bookBtn).click()
    cy.get(appointmentPage.calendar).should('be.visible')
  })

  it('Submit form with different facilities and programs (multiple cases)', () => {
    cy.fixture('appointmentForm.json').then((user) => {
      user.option.forEach((data) => {
        appointmentPage.selectFacilityAndProgram(data.facility, data.program)
        cy.get('[id="txt_visit_date"]').type('10/09/2023')
        cy.get('[id="btn-book-appointment"]').click()
        cy.url().should('include', '/appointment.php#summary')
        cy.get('[class="btn btn-default"]').click()
      })
    })
  })

  

})