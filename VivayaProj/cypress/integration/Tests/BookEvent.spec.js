/// <reference types="cypress"/>

import { HomePage } from "../../page-objects/Home";
import {Dashboard} from "../../page-objects/Dashboard";
import {EventCreationPage} from "../../page-objects/EventCreationPage"

describe('Booking Events', ()=> {
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const eventCreationPage = new EventCreationPage()

    beforeEach(()=>{
        cy.visit('https://qa.vivayalive.com')
        cy.wait(4000)
        
    })

    it('Create an Event as a Guide', ()=>{
       homePage.select_Login()
       homePage.fill_Email('vivaya.automation.one@gmail.com')
       homePage.fill_Password('automation1')
       homePage.submit_Credentials()
       dashboard.add_NewEvent()
       dashboard.add_Workshop()
       eventCreationPage.add_EventName('Workshop1')
       cy.wait(2000)
       eventCreationPage.add_Description('This is a Test Workshop')
       eventCreationPage.add_Date()
       eventCreationPage.add_Price('40')
       eventCreationPage.press_Add()
       homePage.logout_Account()
    })

    it('Book las Event Created', ()=>{
        homePage.select_Login()
        homePage.fill_Email('vivaya.automation.two@gmail.com')
        homePage.fill_Password('automation1')
        homePage.submit_Credentials()
        homePage.go_Home()
        homePage.select_Guide_from_Home()
    })

})