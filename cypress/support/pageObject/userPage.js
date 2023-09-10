class LoginPage {
    username = '[id="txt-username"]'
    password = '[id="txt-password"]'
    loginButton = '[id="btn-login"]'
    headingMsg = '[class="col-sm-12 text-center"]'
  
    openLoginPage() {
        cy.visit(Cypress.env('prod_url'))
        cy.get('[class="fa fa-bars"]').click()
        cy.get('[href="profile.php#login"]').click()
        cy.url().should('include', '/profile.php#login')
    }

    submitUsernameAndPassword(username, password) {
      cy.get(this.username).type(username)
      cy.get(this.password).type(password)
      cy.get(this.loginButton).click()
    }

    verifyLoginSuccess() {
        cy.url().should('include', '/#appointment')
        cy.get(this.headingMsg).should('contain.text', 'Make Appointment')
    }

    verifyLoginFailed() {
        cy.url().should('include', '/profile.php#login')
        cy.get(this.headingMsg).should('contain.text', 'Login failed')
    }
}
export default new LoginPage()