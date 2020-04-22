/// <reference types="cypress"/>
export class HomePage {

    go_Home(){
        cy.visit('https://qa.vivayalive.com')
    }

    select_Login(){
        const login = cy.get('.login-link').click()
        return this
    }

    fill_Email(value){
        
        const typing = cy.get('#loginform-email').type(value)
        return this
    }

    fill_Password(value){

        const typing = cy.get('#loginform-password').type(value)
        return this
    }

    submit_Credentials(){
        cy.get('.form-group.text-center > .btn').click()
        return this
    }

    logout_Account(){
        cy.get('.uname').click({ force: true })
        cy.get('.logout').click({ force: true })
    }

    select_Guide_from_Home(){
        cy.get(':nth-child(4) > a > .name').click()
    }
}