export class HistoryPage {
    private facilityHistoryLocator = '#facility';
    private healthcareHistoryLocator = '#program';
    private commentHistoryLocator = '#comment';
    private dateHistoryLocator = '.panel-heading';

    verifyFacility(facilityName: string) {
        cy.get(this.facilityHistoryLocator).should('contain', facilityName);
    }

    verifyHealthcare(healthcare: string) {
        cy.get(this.healthcareHistoryLocator).should('contain', healthcare);
    }

    verifyComment(comment: string) {
        cy.get(this.commentHistoryLocator).should('contain', comment);
    }

    verifyDate(date: string) {
        cy.get(this.dateHistoryLocator).should('contain', date);
    }
}

export const historyPage = new HistoryPage();
