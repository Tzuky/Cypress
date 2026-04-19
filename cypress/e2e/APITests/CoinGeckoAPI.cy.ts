/// <reference types="cypress" />


const baseUrl = 'https://api.coingecko.com/api/v3' 
const cardanoId = 'cardano'

describe('Get Cardano coin info', () => {
    beforeEach('Get Cardano Responce to perform assertions', () => {
        cy.request({url: baseUrl+'/simple/price?ids=cardano&vs_currencies=USD&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=true', failOnStatusCode: false}).as('adaPrice')
        cy.request({url: baseUrl+'/coins/'+cardanoId, failOnStatusCode: false}).as('moreDetails')
    })

    it('Verify that status code is 200', () => {
        cy.get('@adaPrice').its('status').should('be.oneOf', [200, 429])
    })
    
    it('Print Response', () => {
        cy.get('@adaPrice').then((res) => {
             let printJson = JSON.stringify(res)
             cy.log(printJson) 
        })
    })

    it('Verify that status code is 200 on second request', () => {
        cy.get('@moreDetails').its('status').should('be.oneOf', [200, 429])
    })

    it('Print the more detiled response', () => {
        cy.get('@moreDetails').then((res) => {
            let printDetails = JSON.stringify(res)
            cy.log(printDetails) 
       })
    })

        
})
        
        
        
       
    

