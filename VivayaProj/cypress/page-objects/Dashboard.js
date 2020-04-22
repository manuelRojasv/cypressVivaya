///<reference types="cypress"/>

export class Dashboard{

    add_NewEvent(){
        const newEvent = cy.get('.show-modal-btn').click()
        return this

    }

    add_Workshop(){
        const selectWorkshop = cy.get('[href="/events/workshop/create"]').click()
        return this
    }

    add_One_One(){
        const selectOnetoOne = cy.get('[href="/events/1-on-1/create"]').click()
        return this
    }

    add_Class(){
        const selectClass = cy.get('[href="/events/class/create"]').click()
        return this
    }

    close_NewEvent_Modal(){
        const closeNewEvent = cy.get('#modalHeader > .close').click()
        return this
    }

    cancel_Created_Event(){
        cy.get('.cancel-event').click()
        cy.get('.btn-success').click()

    }

    select_UpcomingEvents(){
        cy.get('.row > :nth-child(1) > .btn').click()
    }

    select_One_One_Availability(){
        cy.get(':nth-child(2) > .btn').click()
    }

    select_View_FullClass_History(){
        cy.get('.quick-links > :nth-child(2) > :nth-child(1) > a').click()
    }

    select_View_Public_Profile(){
        cy.get('.quick-links > :nth-child(3) > :nth-child(1) > a').click()
    }

    select_Contact_Vivaya(){
        cy.get('.quick-links > :nth-child(4) > :nth-child(1) > a').click()
    }

    select_Write_Blog(){
        cy.get('.quick-links > :nth-child(2) > :nth-child(2) > a').click()
    }

    select_Edit_My_Offerings(){
        cy.get('.quick-links > :nth-child(3) > :nth-child(2) > a').click()
    }

    select_Update_LInsurance(){
        cy.get('.quick-links > :nth-child(4) > :nth-child(2) > a').click()
    }

    select_Edit_Password(){
        cy.get('.quick-links > :nth-child(3) > :nth-child(3) > a').click()
    }

    select_Edit_Contact_Info(){
        cy.get('.quick-links > :nth-child(4) > :nth-child(3) > a').click()
    }



}