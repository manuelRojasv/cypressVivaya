/// <reference types="cypress"/>
export class SchedulePage {
  
    select_Schedule_Tab(){
        cy.get('#mainNav > :nth-child(1) > a').click()
    }

    select_specific_Event(){
      cy.xpath("//a[.='Class to be Booked']").click()

    }



}