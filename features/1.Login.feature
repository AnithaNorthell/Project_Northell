@disabled
Feature: User Login Functionality
  As a user
  I want to login to the application
  So that I can access my account

  @Reg
  Scenario:TC_01 Successful login with valid credentials
    Given User navigates to login page
    When User enters username "testaccount.gamma@northell.com"
    And User enters password "TreeMaroonCharacter7531"
    And User clicks login button
    Then User validate current URL is "https://responseos-portal-test.azurewebsites.net/"
    Then validate order page ResponseOs should be displayed
