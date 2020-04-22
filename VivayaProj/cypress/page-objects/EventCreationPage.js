/// <reference types="cypress"/>
export class EventCreationPage {

    add_EventName (value){
        const eventName = cy.get('#eventform-name').type(value)
        return this
      
    }

    add_Description(value){
               
        cy.iframe('.cke_wysiwyg_frame').click()
        cy.iframe('.cke_wysiwyg_frame').type(value)   
        
    }

    add_Date(){
        cy.get('.field-eventform-startdate > .col-sm-9 > .input-group > .input-group-addon > .glyphicon').click()
        cy.get("td[data-date='1588204800000']").click()
        return this
    }

    add_Price(value){
        const addPrice = cy.get('#eventform-workshop_price').type(value)
        return this
    }

    press_Add(){
        const pressAddButton = cy.get('.box-footer > .btn').click()
        return this
    }

    add_Current_Date(){
        const todayDate = Cypress.moment().format('DD-MMM-YYYY')
        const typeDate = cy.get('#eventform-startdate').type(todayDate)
    }

    custom_Start_Time(){
        cy.get('.bootstrap-timepicker > .input-group-addon > .glyphicon').click()
        cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()


}
}