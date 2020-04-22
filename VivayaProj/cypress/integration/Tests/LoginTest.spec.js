/// <reference types="cypress"/>

import { HomePage } from "../../page-objects/Home";


describe('Simple Log in and Log out Tests', ()=>{
    const homePage = new HomePage()
    beforeEach(()=>{
        cy.visit('https://qa.vivayalive.com')
        cy.wait(5000)
    })
    it('Log in and Logut as Guide', () => {  
        homePage.select_Login()
        homePage.fill_Email('vivaya.automation.one@gmail.com')
        homePage.fill_Password('automation1')
        homePage.submit_Credentials()
        homePage.logout_Account()
    });

    it('Log in and Logut as Seeker', () => {
        homePage.select_Login()
        homePage.fill_Email('vivaya.automation.two@gmail.com')
        homePage.fill_Password('automation1')
        homePage.submit_Credentials()
        homePage.logout_Account()
    });


})