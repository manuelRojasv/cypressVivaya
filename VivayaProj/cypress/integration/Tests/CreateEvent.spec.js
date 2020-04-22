/// <reference types="cypress"/>

import { HomePage } from "../../page-objects/Home";
import {Dashboard} from "../../page-objects/Dashboard";
import {EventCreationPage} from "../../page-objects/EventCreationPage"

describe('Events Creation', ()=>{
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const eventCreationPage = new EventCreationPage()

    beforeEach(()=>{
        cy.visit('https://qa.vivayalive.com')
        cy.wait(4000)
        homePage.select_Login()
        homePage.fill_Email('vivaya.automation.one@gmail.com')
        homePage.fill_Password('automation1')
        homePage.submit_Credentials()
    })

    after(()=>{
        homePage.logout_Account()
    
    })
    it('Create and Cancel Workshop Event', () => {  
       dashboard.add_NewEvent()
       dashboard.add_Workshop()
       eventCreationPage.add_EventName('Workshop1')
       cy.wait(2000)
       eventCreationPage.add_Description('This is a Test Workshop')
       eventCreationPage.add_Date()
       eventCreationPage.add_Price('40')
       eventCreationPage.press_Add()
       dashboard.cancel_Created_Event()
       cy.wait(3000)   
       
    });
    it('Create and Cancel Class Event', () =>{
        dashboard.add_NewEvent()
        dashboard.add_Class()
        eventCreationPage.add_EventName('Class1')
        cy.wait(2000)
        eventCreationPage.add_Description('This is a Test Class')
        eventCreationPage.add_Date()
        eventCreationPage.press_Add()
        dashboard.cancel_Created_Event()
        cy.wait(3000)  

    });

    it('Create and Cancel One on One', () =>{
        dashboard.add_NewEvent()
        dashboard.add_One_One()
        eventCreationPage.add_EventName('One-One')
        cy.wait(2000)
        eventCreationPage.add_Description('This is a Test for One on One')
        eventCreationPage.add_Date()
        eventCreationPage.press_Add()
        dashboard.cancel_Created_Event()
        cy.wait(3000)  

    });

})