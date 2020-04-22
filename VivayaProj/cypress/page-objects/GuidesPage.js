/// <reference types="cypress"/>
export class GuidesPage {

    select_Guide_Tab(){

        cy.get(':nth-child(6) > a').click()
    }

    perform_a_Search(guideName){
        cy.get('#guidesearch-q').type(guideName)
        cy.get('.col-lg-4 > .btn').click()
    }

}