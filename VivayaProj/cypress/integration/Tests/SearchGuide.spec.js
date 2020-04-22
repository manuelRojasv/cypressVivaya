/// <reference types="cypress"/>

import {GuidesPage} from "../../page-objects/GuidesPage"

describe('Search a Guide', ()=> {

    const guidesPage = new GuidesPage()

    beforeEach(()=>{
        cy.visit('https://qa.vivayalive.com')
        cy.wait(4000)
        
    })

    it ('Search an Specific Guide',()=>{
        guidesPage.select_Guide_Tab()
        guidesPage.perform_a_Search('automation')
        cy.get('.n').should('contain.text', 'automation user') 
        
    })


})    