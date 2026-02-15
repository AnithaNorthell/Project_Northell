@Reg
Feature: Feedback Functionality
  As a user
  I want to validate the Feedback in order page
  So that I can ensure it functions correctly

  @Reg
  Scenario: TC_07 Clicking the Feedback button opens the feedback form panel
    Given User navigates to login page
    When User enters username "testaccount.gamma@northell.com"
    And User enters password "TreeMaroonCharacter7531"
    And User clicks login button
    Then User validate current URL is "https://responseos-portal-test.azurewebsites.net/"
    Then validate order page ResponseOs should be displayed
    And User clicks on Feedback button in order page
    And User validate the Pop up is visible or not
    And User validates the Text "Tell us what you think" in Feedback form

  @Reg
  Scenario: TC_08 Clicking close on the feedback form closes it and returns to main UI.
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

  @Reg @smoke
  Scenario: TC_09 Clicking 'Contact us' opens the default mail client with a new email draft
    Given User navigates to login page
    When User enters username "testaccount.gamma@northell.com"
    And User enters password "TreeMaroonCharacter7531"
    And User clicks login button
    Then User validate current URL is "https://responseos-portal-test.azurewebsites.net/"
    Then validate order page ResponseOs should be displayed
    And User clicks on Feedback button in order page
    And User validate the Pop up is visible or not
    And User click on Contact us button in Feedback form panel
    And User validate the new window is opened and switch main window and swithch to new window and validate the URL

  @Reg
  Scenario: TC_010 Validate Feedback form submission
    Given User navigates to login page
    When User enters username "testaccount.gamma@northell.com"
    And User enters password "TreeMaroonCharacter7531"
    And User clicks login button
    Then User validate current URL is "https://responseos-portal-test.azurewebsites.net/"
    Then validate order page ResponseOs should be displayed
    And User clicks on Feedback button in order page
    Then Validate Feedback form panel should be displayed in order page
    When User fills out the Feedback form with "Great service!" in Like something or not
    And User Validates the entered feedback text "Great service!" in Like something or not
    And User clicks on Like Something or not in Feedback form panel
    When User fills out the Feedback form with "Idead1" in I Have and idea
    And User Validates the entered feedback text "Idead1" in I Have and idea
    And User clicks on I have and idea in Feedback form panel
    When User fills out the Feedback form with "Not working" in Something is not working
    And User Validates the entered feedback text "Not working" in Something is not working
