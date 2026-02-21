const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const OrderPage = require('../support/pages/OrderPage');
const FeedbackPage = require('../support/pages/Feedback');
const FileUploadPage = require('../support/pages/FileUploadPage');
timeout: 120 * 1000;

let orderPage;
let feedbackPage;
let fileUploadPage;

Then("User clicks on NewRFP in order page", async function () {
    fileUploadPage = new FileUploadPage(this.page)
    await fileUploadPage.page.waitForTimeout(5000);  
    
    await fileUploadPage.click(fileUploadPage.NewRFP)
    await fileUploadPage.page.waitForTimeout(5000);
});

Then(`User clicks on upload RFP {string} in order page`, async function (file) {
    fileUploadPage = new FileUploadPage(this.page)
    await fileUploadPage.uploadFile(file);
    await fileUploadPage.page.waitForTimeout(1000);
});

Then("User validate upload progress bar is displayed in order page", async function () {
     fileUploadPage = new FileUploadPage(this.page)
    const uploadingText = await fileUploadPage.getText(fileUploadPage.UploadingText);
    expect(uploadingText).to.equal("Uploading");
});

Then("User validates the {string} is uploaded successfully in order page", async function (file) {
     fileUploadPage = new FileUploadPage(this.page)
    const firstFileName = await fileUploadPage.getText(fileUploadPage.FirstFileName);
    expect(firstFileName).to.include(file);
});
Then("User Validate {string} is displayed in mapping page", async function (file) {
     fileUploadPage = new FileUploadPage(this.page)
    const fileNameInMapperPage = await fileUploadPage.getText(fileUploadPage.FileNameInMapperPage);
    expect(fileNameInMapperPage).to.include(file);
});
Then("User validate Umapped value is displayed in mapping page", async function () {
     fileUploadPage = new FileUploadPage(this.page)
    const unmappedText = await fileUploadPage.getText(fileUploadPage.UnmappedText);
    expect(unmappedText).to.equal("Unmapped");
});

Then("User Validate the Mapped value is displayed in mapping page", async function () {
     fileUploadPage = new FileUploadPage(this.page)
    const mappedText = await fileUploadPage.getText(fileUploadPage.MappedText);
    expect(mappedText).to.equal("Mapped");
});
Then("User Validate the UnmappedTagBlueBackground is displayed in mapping page", async function () {
     fileUploadPage = new FileUploadPage(this.page)
    const unmappedTagBlueBackgroundVisible = await fileUploadPage.isVisible(fileUploadPage.UnmappedTagBlueBackground);
    expect(unmappedTagBlueBackgroundVisible).to.be.true;
});

Then("User Validate the MappedTagBackground is displayed in mapping page", async function () {
     fileUploadPage = new FileUploadPage(this.page)
    const mappedTagBlueBackgroundVisible = await fileUploadPage.isVisible(fileUploadPage.MappedTagBlueBackground);
    expect(mappedTagBlueBackgroundVisible).to.be.true;
}); 
Then("User Validate the UnmappedAccordian is displayed in mapping page", async function () {
     fileUploadPage = new FileUploadPage(this.page)
    const unmappedAccordianVisible = await fileUploadPage.isVisible(fileUploadPage.UnmappedAccordian);
    expect(unmappedAccordianVisible).to.be.true;
});
Then("User Validate the MappedAccordian is displayed in mapping page", async function () {
     fileUploadPage = new FileUploadPage(this.page)
    const mappedAccordianVisible = await fileUploadPage.isVisible(fileUploadPage.MappedAccordian);
    expect(mappedAccordianVisible).to.be.true;
});
Then("User Validate SearchBox is displayed in mapping page", async function () {
     fileUploadPage = new FileUploadPage(this.page)
    const searchBoxVisible = await fileUploadPage.isVisible(fileUploadPage.SearchBox);
    expect(searchBoxVisible).to.be.true;
});
Then("User Validate SearchIcon is displayed in mapping page", async function () {
     fileUploadPage = new FileUploadPage(this.page)
    const searchIconVisible = await fileUploadPage.isVisible(fileUploadPage.SearchIcon);
    expect(searchIconVisible).to.be.true;
});
Then("User Validate CompleteMapping button is displayed in mapping page", async function () {
     fileUploadPage = new FileUploadPage(this.page)
    const completeMappingVisible = await fileUploadPage.isVisible(fileUploadPage.CompleteMapping);
    expect(completeMappingVisible).to.be.true;
}); 
 Then("User clicks on CompleteMapping button in mapping page", async function () {
     fileUploadPage = new FileUploadPage(this.page)
    await fileUploadPage.click(fileUploadPage.CompleteMapping);
    await fileUploadPage.page.waitForTimeout(5000);
 });  
Then("User Validate the MappingCompleted contains Text {string} in mapping page", async function (text) {
     fileUploadPage = new FileUploadPage(this.page)
    const mappingCompletedText = await fileUploadPage.getText(fileUploadPage.MappingComplete);
    expect(mappingCompletedText).to.include(text);
}); 
Then(
    "User Validate the MappingCompletedText contains Text {string} in mapping page",
    async function (text) {

        fileUploadPage = new FileUploadPage(this.page);

        let actualText = await fileUploadPage.getText(fileUploadPage.MappingCompleteText);

        // Normalize UI text
        actualText = actualText.replace(/\s+/g, " ").trim();
        const expectedText = text.replace(/\s+/g, " ").trim();

        console.log("Actual:", actualText);
        console.log("Expected:", expectedText);

        expect(actualText).to.equal(expectedText);
    }
);
Then("User Validate the ContinueMappingBtn is displayed in mapping page", async function () {
     fileUploadPage = new FileUploadPage(this.page)
    const continueMappingBtnVisible = await fileUploadPage.isVisible(fileUploadPage.ContinueMappingBtn);
    expect(continueMappingBtnVisible).to.be.true;
});
Then("User clicks on ContinueMappingBtn in mapping page", async function () {
     fileUploadPage = new FileUploadPage(this.page)
    await fileUploadPage.click(fileUploadPage.ContinueMappingBtn);
    await fileUploadPage.page.waitForTimeout(5000);
});

Then("User clicks on CloseBtn in mapping page", async function () {
     fileUploadPage = new FileUploadPage(this.page)
    await fileUploadPage.click(fileUploadPage.CloseBtn);
    await fileUploadPage.page.waitForTimeout(5000);
});
Then("User Validate the ConfirmBtn is displayed in mapping page", async function () {
     fileUploadPage = new FileUploadPage(this.page)
    const confirmBtnVisible = await fileUploadPage.isVisible(fileUploadPage.ConfirmBtn);
    expect(confirmBtnVisible).to.be.true;
});
Then("User clicks on ContinueMapping button in mapping page", async function () {
     fileUploadPage = new FileUploadPage(this.page)
    await fileUploadPage.click(fileUploadPage.ContinueMappingBtn);
    await fileUploadPage.page.waitForTimeout(5000);
}); 
Then("User clicks on Close button in mapping page", async function () {
    fileUploadPage = new FileUploadPage(this.page)
    await fileUploadPage.click(fileUploadPage.CloseBtn);
    await fileUploadPage.page.waitForTimeout(5000);
});

Then("User clicks on Confirm button in mapping page", async function () {
     fileUploadPage = new FileUploadPage(this.page)
    await fileUploadPage.click(fileUploadPage.ConfirmBtn);
    await fileUploadPage.page.waitForTimeout(5000);
});
//************************FileUploadPage.js***********************

Then("User clicks on Add Button in mapping page", async function () {
     fileUploadPage = new FileUploadPage(this.page)
    await fileUploadPage.click(fileUploadPage.AddBtn);
    await fileUploadPage.page.waitForTimeout(5000);
});
Then("User Enters value input SearchInputBox {string} in mapping page", async function (inputValue) {
     fileUploadPage = new FileUploadPage(this.page)
    await fileUploadPage.fillText(fileUploadPage.SearchInputBox, inputValue);
    await fileUploadPage.page.waitForTimeout(5000);
});
Then("User Validate the {string} is displayed in mapping page", async function (inputValue) {
     fileUploadPage = new FileUploadPage(this.page)
    const searchResultVisible = await fileUploadPage.isVisible(`(//*[@class="category-items"]//div//div//p[contains(text(),'${inputValue}')])[1]`);
    expect(searchResultVisible).to.be.true;
    let text = await fileUploadPage.getText(`(//*[@class="category-items"]//div//div//p[contains(text(),'${inputValue}')])[1]`)
    console.log("Search Result Text:", text);
    expect(text).to.equal(inputValue);
  
});
Then("User Validate the {string} is not displayed in mapping page", async function (inputValue) {
    fileUploadPage = new FileUploadPage(this.page)
    const searchResultVisible = await fileUploadPage.isVisible(`(//*[@class="category-items"]//div//div//p[contains(text(),'${inputValue}')])[1]`);
    expect(searchResultVisible).to.be.false;
});
Then("User clicks on NewRFP Button in order page to navigate back to order page", async function () {
    fileUploadPage = new FileUploadPage(this.page)
    await fileUploadPage.click(fileUploadPage.NewRFP);
    await fileUploadPage.page.waitForTimeout(5000);
});

//************************FileUploadPage.js***********************

Then("User Enters value input SearchInputField {string} in mapping page", async function (inputValue) {
     fileUploadPage = new FileUploadPage(this.page)
    await fileUploadPage.fillText(fileUploadPage.SearchBox, inputValue);
    await fileUploadPage.pressKey(fileUploadPage.SearchBox, 'Enter');
    await fileUploadPage.page.waitForTimeout(5000);

});
Then("User Validate the {string} in Mapped value is displayed in mapping page", async function (inputValue) {
     fileUploadPage = new FileUploadPage(this.page)
    const mappedValueVisible = await fileUploadPage.isVisible(`//label[contains(text(),'${inputValue}')]`);
    expect(mappedValueVisible).to.be.true;
    let text = await fileUploadPage.getText(`//label[contains(text(),'${inputValue}')]`)
    console.log("Mapped Search Result Text:", text);
    expect(text).to.equal(inputValue);  
});

Then("User Validate the SearchInputField {string} is not displayed in mapping page", async function (inputValue) {
     fileUploadPage = new FileUploadPage(this.page)
    const mappedValueVisible = await fileUploadPage.isVisible(`//label[contains(text(),'${inputValue}')]`);
    expect(mappedValueVisible).to.be.false; 
});

Then("User Validate the Your File Is Being Processed is displayed in mapping page", async function () { 

    fileUploadPage = new FileUploadPage(this.page)
    const processingTextVisible = await fileUploadPage.isVisible(fileUploadPage.YourFileIsBeingProcessed);    
    expect(processingTextVisible).to.be.true; 
    let text = await fileUploadPage.getText(fileUploadPage.YourFileIsBeingProcessed);
    console.log("Processing Text:", text);
    expect(text).to.equal("Your file is being processed");
}); 
Then("User Validate the Data Extraction In Progress is displayed in mapping page", async function () {

    fileUploadPage = new FileUploadPage(this.page)  
    const extractionTextVisible = await fileUploadPage.isVisible(fileUploadPage.DataExtractionInProgress);
    expect(extractionTextVisible).to.be.true; 
    let text = await fileUploadPage.getText(fileUploadPage.DataExtractionInProgress);
    console.log("Data Extraction Text:", text);
    expect(text).to.equal("Data extraction in progress…");
});