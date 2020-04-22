/// <reference types="cypress"/>

import { HomePage } from "../../page-objects/Home";
import {Dashboard} from "../../page-objects/Dashboard"

describe('Verify the Elements within Dashboard', ()=>{
    const homePage = new HomePage()
    const dashBoard = new Dashboard()
    beforeEach(()=>{
        cy.visit('https://qa.vivayalive.com')
        homePage.select_Login()
        homePage.fill_Email('vivaya.automation.one@gmail.com')
        homePage.fill_Password('automation1')
        homePage.submit_Credentials()
        
    })
    it('Test links within Guide Dashboard', () => {  

        //Main Options
        dashBoard.select_UpcomingEvents() //Verify "All upcomin Events" button
        cy.get("body > div.wrap > div.container > h1").should('contain.text', 'Upcoming events')
        cy.go(-1)

        dashBoard.select_One_One_Availability() //Verify "Verify One on One Availability" button
        cy.xpath("/html/body/div[2]/div[2]/h1").should('contain.text', 'Calendar')
        cy.go(-1) 
        
        //Quick Links
        dashBoard.select_View_FullClass_History()
        cy.xpath("/html/body/div[2]/div[2]/h1").should('contains.text', 'Full Class History')
        cy.go(-1)

        dashBoard.select_View_Public_Profile()
        cy.xpath("/html/body/div[2]/div[2]/div[2]/div[4]/div/h2").should('contains.text', 'My Philosophy')
        cy.go(-1)

        dashBoard.select_Contact_Vivaya()
        cy.xpath("/html/body/div[2]/div[2]/div/div/div/div/h1").should('contains.text', 'Contact')
        cy.go(-1)

        dashBoard.select_Write_Blog()
        cy.xpath("/html/body/div[2]/div[2]/h1").should('contains.text', 'Write blog post')
        cy.go(-1)

        dashBoard.select_Edit_My_Offerings()
        cy.xpath("/html/body/div[2]/div[3]/h1").should('contains.text', 'Offerings')
        cy.go(-1)

        dashBoard.select_Update_LInsurance()
        cy.xpath("/html/body/div[2]/div[3]/h1").should('contains.text', 'Liability Insurance')
        cy.go(-1)

        dashBoard.select_Edit_Password()
        cy.xpath('//*[@id="form-signup"]/h1').should('contains.text', 'Account Information')
        cy.go(-1)

        dashBoard.select_Edit_Contact_Info()
        cy.xpath("/html/body/div[2]/div[3]/h1").should('contains.text', 'Profile Information')
        cy.go(-1)

        dashBoard.select_Contact_Vivaya()
        cy.xpath("/html/body/div[2]/div[3]/h1").should('contains.text', 'Profile Information')
        cy.go(-1)

       
    })
})