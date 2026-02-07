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
    // feedbackPage = new FeedbackPage(this.page)
    // const frame = await feedbackPage.switchToFrame("iframe[title='Feedback Widget']");
    // const visible=frame.locator(".nH96XKdd7hysef8W_A3L")
    // const isVisible = await feedbackPage.isVisible(visible)
    // expect(isVisible).to.be.true;
    await expect(this.page.locator('iframe[title="Feedback Widget"]').contentFrame().locator('#i3ch-first-page-bottom-spacer').first()).toBeVisible();
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
Then('User click on Contact us button in Order page', async function () {
    // feedbackPage = new FeedbackPage(this.page)
    // await feedbackPage.click(feedbackPage.ContactUs)
    // await feedbackPage.page.waitForTimeout(5000);

    feedbackPage = new FeedbackPage(this.page);

    const frame = await feedbackPage.switchToFrame(
        "iframe[title='Feedback Widget']"
    );

    const feedbackPanel = frame.locator(".nH96XKdd7hysef8W_A3L");
    const isVisible = await feedbackPage.isVisible(feedbackPanel)
    expect(isVisible).to.be.true;
    // await expect(page.locator('iframe[title="Feedback Widget"]').contentFrame().locator('#i3ch-first-page-bottom-spacer').first()).toBeVisible();


});