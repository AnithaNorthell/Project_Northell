const BasePage = require('./BasePage');
const LoginPage = require('./LoginPage');
const HomePage = require('./HomePage');
const OrderPage = require('./OrderPage');
/**
 * LoginPage - Page object for login functionality
 * Example page object implementation
 */
class FeedbackPage extends OrderPage {


    // Selectors
    get FeedbackIframe() {
        return "iframe[title='Feedback Widget']";
    }
    get FeedbackBtn() {
        return "//button[text()='Feedback']";
    }
    get ContactUs() {
        return "(//span[text()='Want to discuss? ']/following-sibling::a)[1]";
    }
    get FeedbackFormPanel() {
        return "(//section[@id='c2'])[1]//ancestor::section[@id='root']";
    }
    get TellUsWhatYouThink() {
        return "(//span[contains(text(),'Tell us what you think')])[1]";
    }
    get WhatKindOfFeedback() {
        return "(//span[contains(text(),'What kind of feedback do you have?')])[1]";
    }
    get LikeSomethingOrNot() {
        return "(//span[contains(text(),'Like something or not?')])[1]";
    }
    get IHaveAnIdea() {
        return "(//span[contains(text(),'I have an idea')])[1]";
    }
    get IHaveAnIdeaInputBox() {
        return "(//textarea[@placeholder='Type here'])[1]";
    }
    get SomethingNotWorking() {
        return "(//span[contains(text(),'not working')])[1]";
    }
    get CloseSurveyBtn() {
        return "//button[@aria-label='Close survey']";
    }
    get SendBtn() {
        return "(//a[@id='btn-submit']//span)[1]";
    }
    get WhatKindOfFeedbackDoYouHave() {
        return "(//*[contains(text(),'What kind of feedback do you have?')])[1]";
    }
   
}

module.exports = FeedbackPage;
