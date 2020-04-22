/// <reference types="cypress"/>

import { HomePage } from "../../page-objects/Home";
import {Dashboard} from "../../page-objects/Dashboard";
import {EventCreationPage} from "../../page-objects/EventCreationPage"
import {SchedulePage} from "../../page-objects/SchedulePage"
import {EventDetailPage} from "../../page-objects/EventDetailPage" 
import {GuideProfilePage} from "../../page-objects/GuideProfilePage"

describe('Booking Events', ()=> {
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const eventCreationPage = new EventCreationPage()
    const guideProfilePage = new GuideProfilePage()
    const eventDetailPage = new EventDetailPage()

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
       dashboard.add_Class()
       eventCreationPage.add_EventName('Class to be Booked')
       cy.wait(2000)
       eventCreationPage.add_Description('This is a Class Test to be booked')
       eventCreationPage.add_Current_Date()
       eventCreationPage.custom_Start_Time()
       eventCreationPage.press_Add()
       homePage.logout_Account()
    })

    it('Book the Last Event from Home page', ()=>{
        homePage.select_Login()
        homePage.fill_Email('vivaya.automation.two@gmail.com')
        homePage.fill_Password('automation1')
        homePage.submit_Credentials()
        cy.wait(3000)
        homePage.go_Home()
        homePage.select_Guide_from_Home() 
        guideProfilePage.book_Event_from_GuideProfile()
        eventDetailPage.cancel_Event_from_EventDetail()
        eventDetailPage.confirm_Cancelation_from_EventDetail()
        homePage.logout_Account()
    })

    it('Cancel Event from Guide account', ()=>{
        homePage.select_Login()
        homePage.fill_Email('vivaya.automation.one@gmail.com')
        homePage.fill_Password('automation1')
        homePage.submit_Credentials()
        dashboard.cancel_Created_Event()
        cy.wait(3000) 
        homePage.logout_Account()
 
     })

})    