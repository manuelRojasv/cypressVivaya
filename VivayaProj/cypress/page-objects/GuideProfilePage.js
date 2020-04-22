/// <reference types="cypress"/>
export class GuideProfilePage {

    book_Event_from_GuideProfile(){
        
        cy.get(':nth-child(8) > .btn').click()
    }


}