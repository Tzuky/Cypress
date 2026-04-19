export class MakeAppointmentPage {
    private facilityLocator = '#combo_facility';
    private glyphiconLocator = '.glyphicon';
    private datePickerSelect = ':nth-child(4) > :nth-child(4)';
    private dateFieldLocator = '#txt_visit_date';
    private commentFieldLocator = '#txt_comment';
    private makeAppointmentButtonLocator = '#btn-book-appointment';
    private radioButtonHealthcareNone = '#radio_program_none';
    private radioButtonHealthcareMadicAid = '#radio_program_medicaid';
    private confirmAppointmentLocation = '.col-xs-12.text-center';
    private menuLocator = '#menu-toggle';
    private historyLocator = ':nth-child(4) > a';

    selectFacility(index: number) {
        cy.get(this.facilityLocator).select(index);
    }

    clickGlyphicon() {
        cy.get(this.glyphiconLocator).click();
    }

    selectDateFromPicker() {
        cy.get(this.datePickerSelect).click();
    }

    closeDatePicker() {
        cy.get(this.dateFieldLocator).type('{esc}');
    }

    typeDate(date: string) {
        cy.get(this.dateFieldLocator).type(date);
    }

    typeComment(comment: string) {
        cy.get(this.commentFieldLocator).type(comment);
    }

    submitAppointment() {
        cy.get(this.makeAppointmentButtonLocator).click();
    }

    selectHealthcareNone() {
        cy.get(this.radioButtonHealthcareNone).click();
    }

    selectHealthcareMedicaid() {
        cy.get(this.radioButtonHealthcareMadicAid).click();
    }

    verifyConfirmation() {
        cy.get(this.confirmAppointmentLocation).should('contain', 'Appointment Confirmation');
    }

    goToHistory() {
        cy.get(this.menuLocator).click();
        cy.get(this.historyLocator).click();
    }
}

export const makeAppointmentPage = new MakeAppointmentPage();
