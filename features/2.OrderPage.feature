@Reg
Feature: Order Page Functionality
  As a user
  I want to validate the order page
  So that I can ensure it functions correctly

  @Reg
  Scenario:TC_02 Successful login with valid credentials
    Given User navigates to login page
    When User enters username "testaccount.gamma@northell.com"
    And User enters password "TreeMaroonCharacter7531"
    And User clicks login button
    Then User validate current URL is "https://responseos-portal-test.azurewebsites.net/"
    Then validate order page ResponseOs should be displayed
    Then validate order page NewRFP should be displayed
    Then validate order page Upload RFP should be displayed
    Then validate order page N Icon should be displayed
    Then validate order page Book Icon should be displayed
    Then validate order page Feedback should be displayed
    Then validate order page Profile should be displayed

  @Reg
  Scenario:TC_03 validate left navigation bar on order page
    Given User navigates to login page
    When User enters username "testaccount.gamma@northell.com"
    And User enters password "TreeMaroonCharacter7531"
    And User clicks login button
    Then User validate current URL is "https://responseos-portal-test.azurewebsites.net/"
    Then validate order page ResponseOs should be displayed
    Then validate order page Left Nav Bar should be displayed
    And User scrolls the left navigate bar in order page
    And User cilcks on Book Icon
    Then validate left navigation bar is not displayed on order page

  @Reg
  Scenario:TC_03 validate left navigation bar on order page
    Given User navigates to login page
    When User enters username "testaccount.gamma@northell.com"
    And User enters password "TreeMaroonCharacter7531"
    And User clicks login button
    Then User validate current URL is "https://responseos-portal-test.azurewebsites.net/"
    Then validate order page ResponseOs should be displayed
    Then validate order page Left Nav Bar should be displayed
    And User validate three dots are displayed in left navigation bar in order page
    And User clicks on three dots options in the left navigation bar in order page
    Then validate three dots options Rename and delete are displayed in left navigation bar in order page
    Then validate three dots options Rename and delete are available for all files in the order page

  @Reg
  Scenario:TC_04 Editing a file name updates the label in the left navigation list.
    Given User navigates to login page
    When User enters username "testaccount.gamma@northell.com"
    And User enters password "TreeMaroonCharacter7531"
    And User clicks login button
    Then User validate current URL is "https://responseos-portal-test.azurewebsites.net/"
    Then validate order page ResponseOs should be displayed
    Then validate order page Left Nav Bar should be displayed
    Then User renames a file in the order page and validates the renamed file name is updated in the left navigation list in order page

  @Reg 
  Scenario:TC_05 Choosing 'Delete' opens a confirmation dialog before removal.
    Given User navigates to login page
    When User enters username "testaccount.gamma@northell.com"
    And User enters password "TreeMaroonCharacter7531"
    And User clicks login button
    Then User validate current URL is "https://responseos-portal-test.azurewebsites.net/"
    Then validate order page ResponseOs should be displayed
    And User Valiates Upload RFP buttton is displayed in order page
    Then User uploads a file in order page
    Then User deletes the uploaded file in the order page and validates the confirmation dialog is displayed before removing the file from the left navigation list in order page

  @Reg
  Scenario:TC_06 Bottom-left area shows user name and copyright text for Northell Partners
    Given User navigates to login page
    When User enters username "testaccount.gamma@northell.com"
    And User enters password "TreeMaroonCharacter7531"
    And User clicks login button
    Then User validate current URL is "https://responseos-portal-test.azurewebsites.net/"
    Then validate order page ResponseOs should be displayed
    Then validate order page Profile should be displayed
    Then validate order page Bottom-left area should display user name and copyright text for Northell Partners
    And User validates the user name and copyright text for Northell Partners in the bottom-left area
