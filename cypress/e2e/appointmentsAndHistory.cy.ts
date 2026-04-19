/// <reference types="cypress" />

import { loginPage } from "../pages/LoginPage"
import { makeAppointmentPage } from "../pages/MakeAppointmentPage"
import { historyPage } from "../pages/HistoryPage"

const dateTest2 = '20/06/2023'
const dateTest3 = '22/04/2023'
const comment1 = 'Comment in test case 1'
const comment2 = 'Comment in test case 2'
const comment3 = 'Comment in test case 3'


describe('open Appointment app and perform few appointments and check history', () => {
    beforeEach(() => {
        loginPage.navigate('https://katalon-demo-cura.herokuapp.com/')
        loginPage.clickMakeAppointment()
        loginPage.login('John Doe', 'ThisIsNotAPassword')
    })

    it('make appointment for Seoul ', () => {
        makeAppointmentPage.selectFacility(2)
        makeAppointmentPage.typeDate('22/02/2023')
        makeAppointmentPage.closeDatePicker()
        makeAppointmentPage.typeComment(comment1)
        makeAppointmentPage.submitAppointment()
        
        makeAppointmentPage.verifyConfirmation()
        makeAppointmentPage.goToHistory()
        
        historyPage.verifyFacility('Seoul CURA Healthcare Center')
        historyPage.verifyComment(comment1)
        historyPage.verifyDate('22/02/2023')
    })

    it('make an apointment for Tokyo', () => {
        makeAppointmentPage.selectFacility(0)
        makeAppointmentPage.selectHealthcareNone()
        makeAppointmentPage.typeDate(dateTest2)
        makeAppointmentPage.closeDatePicker()
        makeAppointmentPage.typeComment(comment2)
        makeAppointmentPage.submitAppointment()
        
        makeAppointmentPage.verifyConfirmation()
        makeAppointmentPage.goToHistory()
        
        historyPage.verifyFacility('Tokyo CURA Healthcare Center')
        historyPage.verifyHealthcare('None')
        historyPage.verifyComment(comment2)
        historyPage.verifyDate(dateTest2)
    })

    it('make an appointment for HongKong and check history', () => {
        makeAppointmentPage.selectFacility(1)
        makeAppointmentPage.selectHealthcareMedicaid()
        makeAppointmentPage.typeDate(dateTest3)
        makeAppointmentPage.closeDatePicker()
        makeAppointmentPage.typeComment(comment3)
        makeAppointmentPage.submitAppointment()
        
        makeAppointmentPage.verifyConfirmation()
        makeAppointmentPage.goToHistory()
        
        historyPage.verifyFacility('Hongkong CURA Healthcare Center')
        historyPage.verifyHealthcare('Medicaid')
        historyPage.verifyComment(comment3)
        historyPage.verifyDate(dateTest3)
    })
})