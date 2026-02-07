@Reg
Feature: Feedback Functionality
  As a user
  I want to validate the Feedback in order page
  So that I can ensure it functions correctly

 @Reg
  Scenario: Clicking the Feedback button opens the feedback form panel.
    Given User navigates to login page
    When User enters username "testaccount.gamma@northell.com"
    And User enters password "TreeMaroonCharacter7531"
    And User clicks login button
    Then User validate current URL is "https://responseos-portal-test.azurewebsites.net/"
    Then validate order page ResponseOs should be displayed
    Then validate order page NewRFP should be displayed
    Then User validate Feedback button is displayed in order page
    And User clicks on Feedback button in order page
    Then Validate Feedback form panel should be displayed in order page
    And User closes the Feedback form panel in order page
    Then Validate Feedback form panel is closed in order page

 @Reg   @smoke 
 Scenario: Clicking 'Contact us' opens the default mail client with a new email draft
    Given User navigates to login page
    When User enters username "testaccount.gamma@northell.com"
    And User enters password "TreeMaroonCharacter7531"
    And User clicks login button
    Then User validate current URL is "https://responseos-portal-test.azurewebsites.net/"
    Then validate order page ResponseOs should be displayed
     And User clicks on Feedback button in order page
    And User click on Contact us button in Order page