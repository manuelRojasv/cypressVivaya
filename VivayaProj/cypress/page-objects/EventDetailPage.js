/// <reference types="cypress"/>
export class EventDetailPage {

    book_Event_from_EventDetail(){
        cy.get('#buttonDiv > .btn').click()
    }

    cancel_Event_from_EventDetail(){
        cy.get('#buttonDiv > .btn').click()
    }

    confirm_Cancelation_from_EventDetail(){
        cy.get('.btn-success').click()
    }


}
