class appointmentPage {
    facility = '[id="combo_facility"]'
    chkbox = '[type="radio"]'
    date = '[id="txt_visit_date"]'
    calendar = '[class="datepicker-days"]' 
    comment = '[id="txt_comment"]'
    bookBtn = '[id="btn-book-appointment"]'

    selectFacility(option) {
        cy.get(this.facility).select(option)
    }
    selectProgram(option) {
        cy.get(this.chkbox).check(option)
    }
    selectFacilityAndProgram(facilityOpt, programOpt) {
        cy.get(this.facility).select(facilityOpt)
        cy.get(this.chkbox).check(programOpt)

    }
    
}
export default new appointmentPage()