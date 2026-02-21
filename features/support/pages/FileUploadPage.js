const BasePage = require('./BasePage');
const LoginPage = require('./LoginPage');
const HomePage = require('./HomePage');
const OrderPage = require('./OrderPage');
const FeedbackPage = require('./Feedback');

/**
 * LoginPage - Page object for login functionality
 * Example page object implementation
 */
class FileUploadPage extends FeedbackPage {


    // Selectors
    get UploadingText() {
        return "//*[contains(text(),'Uploading')]";
    }

    get InfoBlock() {
        return "//*[@class='info-block ']";
    }
    get VerticalThreeDot() {
        return "//button[@id='mapping-menu']/span[1]";
    }
    get VerticalThreeDotDropdown() {
        return "//ul[@class='e-dropdown-menu']";
    }
    get ReUpload() {
        return "//li[normalize-space(text())='Re-Upload']";
    }
    get Rename() {
        return "//li[normalize-space(text())='Rename']";
    }
    get Delete() {
        return "//li[normalize-space(text())='Delete']";
    }
    get DeleteProject() {
        return "//h6[normalize-space(text())='Delete project']";
    }
    get AreYouSureYouWantToDelete() {
        return "//p[normalize-space(text())='Are you sure you want to delete this project? This action cannot be undone.']";
    }
    get CancelBtn() {
        return "//span[normalize-space(text())='Cancel']";
    }
    get ConfirmBtn() {
        return "//span[normalize-space(text())='Confirm']";
    }
    get fileNameEditInputbox() {
        return "//div[@class='file-name-edit']//input[1]";
    }

    get MapperSearchSpan() {
        return "(//div[@id='mapping-search']//div)[1]";
    }

    get UploadRFP() {
        return "//span[normalize-space(text())='Upload RFP']";
    }
    get FirstFileName() {
        return "(//h6[@class='nav-menu_files-subheading']/following::div[contains(@class,'nav-menu-file_main has-ellipsis')])[1]//a";
    }
    get FileNameInMapperPage() {
        return "//div[contains(@class,'d-flex gap-8')]//div[1]";
    }
    get CompleteMapping() {
        return "//span[normalize-space(text())='Complete Mapping']";
    }
    get SearchBox() {
        return "//div[contains(@class,'search-wrapper d-flex')]//input[1]";
    }
    get SearchIcon() {
        return "(//div[contains(@class,'search-bar-wrapper d-flex')]//div)[2]";
    }
    get UnmappedText() {
        return "//span[normalize-space(text())='Unmapped']";
    }
    get MappedText() {
        return "//span[normalize-space(text())='Mapped']";
    }
    get UnmappedTagBlueBackground() {
        return "(//span[@class='tag is-blue-background'])[2]";
    }
    get MappedTagBlueBackground() {
        return "(//span[@class='tag is-blue-background'])[3]";
    }
    get UnmappedAccordian() {
        return "(//*[@class='mud-icon-root mud-svg-icon mud-icon-size-medium mud-expand-panel-icon mud-transform'])[1]";
    }
    get MappedAccordian() {
        return "(//*[@class='mud-icon-root mud-svg-icon mud-icon-size-medium mud-expand-panel-icon mud-transform'])[2]";
    }
    get UnmappedFieldArea() {
        return "(//div[@class='mud-collapse-wrapper-inner']//div)[1]";
    }
    get MappedFieldArea() {
        return "(//div[@class='mud-collapse-wrapper-inner']//div)[3]";
    }
    get MappingComplete() {
        return "//h6[normalize-space(text())='Mapping Complete']";
    }
    get MappingCompleteText() {
        return "//p[normalize-space(text())='This will finalise your current mapping configuration. Do you want to proceed with completing the mapping?']";
    }
    get ContinueMappingBtn() {
        return "//span[normalize-space(text())='Continue Mapping']";
    }
    get ConfirmBtn() {
        return "//span[normalize-space(text())='Confirm']";
    }
    get CloseBtn() {
        return "(//button[@aria-label='Close'])[1]";
    }
    get AddBtn() {
        return "(//span[@class='mud-button-label'])[3]";
    }
    get SearchInputBox() {
        return "//input[@inputmode='text']";
    }
    get YourFileIsBeingProcessed() {
        return "//h2[normalize-space(text())='Your file is being processed']";
    }
    get DataExtractionInProgress() {
        return "//h4[normalize-space(text())='Data extraction in progress…']";
    }










    async uploadFile(file) {
        await this.page.waitForTimeout(15000);

        const [fileChooser] = await Promise.all([
            this.page.waitForEvent('filechooser'),
            this.page.click(this.UploadRFP)
            // this.page.click("//span[normalize-space(text())='Upload RFP']")
        ]);
        await fileChooser.setFiles(`D:\\Anitha\\Data\\${file}.xlsx`);
        await this.page.waitForTimeout(30000);
    }

}

module.exports = FileUploadPage;
