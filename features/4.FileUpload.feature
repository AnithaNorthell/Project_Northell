Feature: Uploading a file in the order page
  As a user

  @Reg @smoke
  Scenario: TC_11 Verify file upload functionality in order page
    Given User navigates to login page
    When User enters username "testaccount.gamma@northell.com"
    And User enters password "TreeMaroonCharacter7531"
    And User clicks login button
    Then User validate current URL is "https://responseos-portal-test.azurewebsites.net/"
    Then validate order page ResponseOs should be displayed
    And User clicks on NewRFP in order page
    Then User clicks on upload RFP "<file>" in order page
    # And User validate upload progress bar is displayed in order page
    Then User validates the "<file>" is uploaded successfully in order page
    Then User Validate "<file>" is displayed in mapping page
    And User validate Umapped value is displayed in mapping page
    Then User Validate the Mapped value is displayed in mapping page
    Then User Validate the UnmappedTagBlueBackground is displayed in mapping page
    Then User Validate the MappedTagBackground is displayed in mapping page
    Then User Validate the UnmappedAccordian is displayed in mapping page
    Then User Validate the MappedAccordian is displayed in mapping page
    Then User Validate SearchBox is displayed in mapping page
    Then User Validate SearchIcon is displayed in mapping page
    Then User Validate CompleteMapping button is displayed in mapping page
    Then User clicks on CompleteMapping button in mapping page
    Then User Validate the MappingCompleted contains Text "Mapping Complete" in mapping page
    Then User Validate the MappingCompletedText contains Text "This will finalise your current mapping configuration. Do you want to proceed with completing the mapping?" in mapping page
    Then User Validate the ContinueMappingBtn is displayed in mapping page
    Then User clicks on CloseBtn in mapping page
    Then User Validate the MappedAccordian is displayed in mapping page
    Then User deletes the uploaded file in the order page and validates the confirmation dialog is displayed before removing the file from the left navigation list in order page

    Examples:
      | file     |
      | 95Record |

  @Reg @smoke
  Scenario: TC_12 Search functionality of Add in mapping page
    Given User navigates to login page
    When User enters username "testaccount.gamma@northell.com"
    And User enters password "TreeMaroonCharacter7531"
    And User clicks login button
    Then User validate current URL is "https://responseos-portal-test.azurewebsites.net/"
    Then validate order page ResponseOs should be displayed
    And User clicks on NewRFP in order page
    Then User clicks on upload RFP "<file>" in order page
    Then User validates the "<file>" is uploaded successfully in order page
    Then User Validate "<file>" is displayed in mapping page
    And User clicks on Add Button in mapping page
    And User Enters value input SearchInputBox "<inputValue>" in mapping page
    Then User Validate the "<inputValue>" is displayed in mapping page
    And User Enters value input SearchInputBox "<inputValueDifferentCase>" in mapping page
    Then User Validate the "<inputValue>" is displayed in mapping page
    And User Enters value input SearchInputBox "<PartialInputValue>" in mapping page
    Then User Validate the "<inputValue>" is displayed in mapping page
    And User Enters value input SearchInputBox "<UnmatchedInputValue>" in mapping page
    Then User Validate the "<UnmatchedInputValue>" is not displayed in mapping page
    And User clicks on NewRFP Button in order page to navigate back to order page
    Then User deletes the uploaded file in the order page and validates the confirmation dialog is displayed before removing the file from the left navigation list in order page

    Examples:
      | file                         | inputValue      | inputValueDifferentCase | PartialInputValue | UnmatchedInputValue |
      | Supplier quotes target _Test | Unit of measure | UNIT OF MEASURE         | Unit of           | Unmatched           |

  @Reg @smoke
  Scenario: TC_13 Search functionality in mapping page
    Given User navigates to login page
    When User enters username "testaccount.gamma@northell.com"
    And User enters password "TreeMaroonCharacter7531"
    And User clicks login button
    Then User validate current URL is "https://responseos-portal-test.azurewebsites.net/"
    Then validate order page ResponseOs should be displayed
    And User clicks on NewRFP in order page
    Then User clicks on upload RFP "<file>" in order page
    Then User validates the "<file>" is uploaded successfully in order page
    Then User Validate "<file>" is displayed in mapping page
    And User Enters value input SearchInputField "<inputValue>" in mapping page
    Then User Validate the "<inputValue>" in Mapped value is displayed in mapping page
    And User Enters value input SearchInputField "<inputValueDifferentCase>" in mapping page
    Then User Validate the "<inputValue>" in Mapped value is displayed in mapping page
    And User Enters value input SearchInputField "<PartialInputValue>" in mapping page
    Then User Validate the "<inputValue>" in Mapped value is displayed in mapping page
    And User Enters value input SearchInputField "<UnmatchedInputValue>" in mapping page
    Then User Validate the SearchInputField "<UnmatchedInputValue>" is not displayed in mapping page
    Then User deletes the uploaded file in the order page and validates the confirmation dialog is displayed before removing the file from the left navigation list in order page

    Examples:
      | file                         | inputValue      | inputValueDifferentCase | PartialInputValue | UnmatchedInputValue |
      | Supplier quotes target _Test | Unit of measure | UNIT OF MEASURE         | Unit of           | Unmatched           |


@Reg @smoke
  Scenario: TC_14 Verify Your File Is Being Processed and Data Extraction In Progress text in mapping page
    Given User navigates to login page
    When User enters username "testaccount.gamma@northell.com"
    And User enters password "TreeMaroonCharacter7531"
    And User clicks login button
    Then User validate current URL is "https://responseos-portal-test.azurewebsites.net/"
    Then validate order page ResponseOs should be displayed
    And User clicks on NewRFP in order page
    Then User clicks on upload RFP "<file>" in order page
    # And User validate upload progress bar is displayed in order page
    Then User validates the "<file>" is uploaded successfully in order page
    Then User Validate "<file>" is displayed in mapping page
    And User validate Umapped value is displayed in mapping page
    Then User Validate the Mapped value is displayed in mapping page
    Then User Validate the UnmappedTagBlueBackground is displayed in mapping page
    Then User Validate the MappedTagBackground is displayed in mapping page
    Then User Validate the UnmappedAccordian is displayed in mapping page
    Then User Validate the MappedAccordian is displayed in mapping page
    Then User Validate SearchBox is displayed in mapping page
    Then User Validate SearchIcon is displayed in mapping page
    Then User Validate CompleteMapping button is displayed in mapping page
    Then User clicks on CompleteMapping button in mapping page
    Then User Validate the MappingCompleted contains Text "Mapping Complete" in mapping page
    Then User Validate the MappingCompletedText contains Text "This will finalise your current mapping configuration. Do you want to proceed with completing the mapping?" in mapping page
    Then User Validate the ContinueMappingBtn is displayed in mapping page
    And User clicks on ContinueMappingBtn in mapping page
    Then User Validate the MappedAccordian is displayed in mapping page
    Then User clicks on CompleteMapping button in mapping page
    Then User clicks on CloseBtn in mapping page
    Then User clicks on CompleteMapping button in mapping page
    Then User clicks on Confirm button in mapping page
    Then User Validate the Your File Is Being Processed is displayed in mapping page
    Then User Validate the Data Extraction In Progress is displayed in mapping page
    Then User deletes the uploaded file in the order page and validates the confirmation dialog is displayed before removing the file from the left navigation list in order page

    Examples:
      | file     |
      | 95Record |