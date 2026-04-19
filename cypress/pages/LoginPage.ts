export class LoginPage {
    private userNameLocator = '#txt-username';
    private passwordLocator = '#txt-password';
    private loginButton = '#btn-login';
    private makeAppointmentButton = '#btn-make-appointment';

    navigate(url: string) {
        cy.visit(url);
    }
    
    clickMakeAppointment() {
        cy.get(this.makeAppointmentButton).click();
    }

    login(username: string, password: string) {
        cy.get(this.userNameLocator).type(username);
        cy.get(this.passwordLocator).type(password);
        cy.get(this.loginButton).click();
    }
}

export const loginPage = new LoginPage();
