const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const OrderPage = require('../support/pages/OrderPage');
const FeedbackPage = require('../support/pages/Feedback');
timeout: 120 * 1000;
        
let feedbackPage;
Then('User validate Feedback button is displayed in order page', async function () {
    feedbackPage = new FeedbackPage(this.page)
    const isVisible = await feedbackPage.isVisible(feedbackPage.FeedbackBtn)
    expect(isVisible).to.be.true;
});
Then('User clicks on Feedback button in order page', async function () {
    feedbackPage = new FeedbackPage(this.page)
    await feedbackPage.page.waitForTimeout(5000);
    await feedbackPage.click(feedbackPage.FeedbackBtn)
    await feedbackPage.page.waitForTimeout(5000);
});
Then('Validate Feedback form panel should be displayed in order page', async function () {
   
    const feedbackPanel = await this.page.locator('.nH96XKdd7hysef8W_A3L');
    await this.page.waitForTimeout(5000);
    expect(await feedbackPanel.isVisible()).to.be.true;
});

Then('User closes the Feedback form panel in order page', async function () {
    feedbackPage = new FeedbackPage(this.page)
    await feedbackPage.click(feedbackPage.CloseSurveyBtn)
    await feedbackPage.page.waitForTimeout(5000);
});

Then('Validate Feedback form panel is closed in order page', async function () {
    feedbackPage = new FeedbackPage(this.page)
    const isVisible = await feedbackPage.isVisible(feedbackPage.FeedbackFormPanel)
    expect(isVisible).not.to.be.true;
});
Then('User validate the Pop up is visible or not', async function () {
    const feedbackPanel = await this.page.locator('iframe[title="Feedback Widget"]').contentFrame().locator("(//span[text()='Want to discuss? ']/following-sibling::a)[1]");
    await this.page.waitForTimeout(5000);
    expect(await feedbackPanel.isVisible()).to.be.true;
    console.log("✓ Pop-up is visible");
    await this.page.waitForTimeout(5000);
})
Then('User validates the Text {string} in Feedback form', async function (expectedText) {
    feedbackPage = new FeedbackPage(this.page);
    const feedbackFrame = await feedbackPage.switchToFrame(feedbackPage.FeedbackIframe);
    const feedbackInput = feedbackFrame.locator(feedbackPage.TellUsWhatYouThink);
    const enteredText = await feedbackInput.textContent();
    console.log("Entered feedback text:", enteredText);
    expect(enteredText).to.equal(expectedText);
 
})




Then('User click on Contact us button in Feedback form panel', async function () {
    
    await this.page.locator('iframe[title="Feedback Widget"]').contentFrame().locator("(//span[text()='Want to discuss? ']/following-sibling::a)[1]").click();
    await this.page.waitForTimeout(5000);
});
When('User fills out the Feedback form with {string} in Like something or not', async function (feedbackText) {
    feedbackPage = new FeedbackPage(this.page);
    const feedbackFrame = await feedbackPage.switchToFrame("iframe[title='Feedback Widget']");
    await feedbackFrame.locator("(//div[@class='inner']//span)[1]").click();
    const feedbackInput = feedbackFrame.locator("(//textarea[@placeholder='Type here'])[1]");
    await feedbackInput.fill(feedbackText);
    await feedbackPage.page.waitForTimeout(2000);
});

Then("User Validates the entered feedback text {string} in Like something or not", async function (feedbackText) {
    feedbackPage = new FeedbackPage(this.page);
    const feedbackFrame = await feedbackPage.switchToFrame("iframe[title='Feedback Widget']");  
    const feedbackInput = feedbackFrame.locator("(//textarea[@placeholder='Type here'])[1]");
    const enteredText = await feedbackInput.inputValue();
    console.log("Entered feedback text:", enteredText);
    expect(enteredText).to.equal(feedbackText);
    const isvisibleSendBtn=await feedbackFrame.locator(feedbackPage.SendBtn).isVisible();
    expect(isvisibleSendBtn).to.be.true;

});

Then("User validate the new window is opened and switch main window and swithch to new window and validate the URL", async function () {
    const pages = await this.page.context().pages();
   console.log("Page count:", pages.length)
   expect(pages.length).to.equal(2);

})
Then("User clicks on Like Something or not in Feedback form panel", async function () {
    feedbackPage = new FeedbackPage(this.page);
    const feedbackFrame = await feedbackPage.switchToFrame(feedbackPage.FeedbackIframe);
    await feedbackFrame.locator(feedbackPage.LikeSomethingOrNot).click();
})


Then("User fills out the Feedback form with {string} in I Have and idea", async function (feedbackText) {
    feedbackPage = new FeedbackPage(this.page);
    const feedbackFrame = await feedbackPage.switchToFrame(feedbackPage.FeedbackIframe);
    await feedbackFrame.locator(feedbackPage.IHaveAnIdea).click();
    const feedbackInput = feedbackFrame.locator(feedbackPage.IHaveAnIdeaInputBox);
    await feedbackInput.fill(feedbackText);
    await feedbackPage.page.waitForTimeout(2000);
})
Then("User Validates the entered feedback text {string} in I Have and idea", async function (feedbackText) {
    feedbackPage = new FeedbackPage(this.page);
    const feedbackFrame = await feedbackPage.switchToFrame(feedbackPage.FeedbackIframe);
    const feedbackInput = feedbackFrame.locator(feedbackPage.IHaveAnIdeaInputBox);
    const enteredText = await feedbackInput.inputValue();
    console.log("Entered feedback text:", enteredText);
    expect(enteredText).to.equal(feedbackText);
    const isvisibleSendBtn = await feedbackFrame.locator(feedbackPage.SendBtn).isVisible();
    expect(isvisibleSendBtn).to.be.true;
    

});
Then("User clicks on I have and idea in Feedback form panel", async function () {
    feedbackPage = new FeedbackPage(this.page);
    const feedbackFrame = await feedbackPage.switchToFrame(feedbackPage.FeedbackIframe);
    await feedbackFrame.locator(feedbackPage.IHaveAnIdea).click();
})


Then("User fills out the Feedback form with {string} in Something is not working", async function (feedbackText) {
    feedbackPage = new FeedbackPage(this.page);
    const feedbackFrame = await feedbackPage.switchToFrame(feedbackPage.FeedbackIframe);
    await feedbackFrame.locator(feedbackPage.SomethingNotWorking).click();
    const feedbackInput = feedbackFrame.locator(feedbackPage.IHaveAnIdeaInputBox);
    await feedbackInput.fill(feedbackText);
    await feedbackPage.page.waitForTimeout(2000);
})
Then("User Validates the entered feedback text {string} in Something is not working", async function (feedbackText) {
    feedbackPage = new FeedbackPage(this.page);
    const feedbackFrame = await feedbackPage.switchToFrame(feedbackPage.FeedbackIframe);
    const feedbackInput = feedbackFrame.locator(feedbackPage.IHaveAnIdeaInputBox);
    const enteredText = await feedbackInput.inputValue();
    console.log("Entered feedback text:", enteredText);
    expect(enteredText).to.equal(feedbackText);
    const isvisibleSendBtn = await feedbackFrame.locator(feedbackPage.SendBtn).isVisible();
    expect(isvisibleSendBtn).to.be.true;
    

});
