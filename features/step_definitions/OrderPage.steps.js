const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const OrderPage = require('../support/pages/OrderPage');
timeout: 120 * 1000;

let orderPage;
Then('validate order page ResponseOs should be displayed', async function () {
    orderPage = new OrderPage(this.page);
    console.log("Locator:", orderPage.ResponseOS);
    const isVisible = await orderPage.isVisible(orderPage.ResponseOS);
    expect(isVisible).to.be.true;
    const ResponseOS = await orderPage.getText(orderPage.ResponseOS);
    console.log("ResponseOS Text:", ResponseOS);
    expect(ResponseOS).to.equal('ResponseOS');
});
Then('validate order page NewRFP should be displayed', async function () {
    orderPage = new OrderPage(this.page);
    const isVisible = await orderPage.isVisible(orderPage.NewRFP);
    expect(isVisible).to.be.true;
    const NewRFP = await orderPage.getText(orderPage.NewRFP);
    expect(NewRFP).to.equal('New RFP');

});
Then('validate order page Upload RFP should be displayed', { timeout: 60 * 1000 }, async function () {
    orderPage = new OrderPage(this.page);
    // const isVisible = await orderPage.isVisible(orderPage.UploadRFP);
    // expect(isVisible).to.be.true;
    const UploadRFP = await orderPage.getText(orderPage.UploadRFP);
    expect(UploadRFP).to.equal('Upload RFP');


});
Then('validate order page N Icon should be displayed', async function () {
    orderPage = new OrderPage(this.page);
    const isVisible = await orderPage.isVisible(orderPage.NIcon);
    expect(isVisible).to.be.true;
});
Then('validate order page Book Icon should be displayed', async function () {
    orderPage = new OrderPage(this.page);
    const isVisible = await orderPage.isVisible(orderPage.BookIcon);
    expect(isVisible).to.be.true;
});
Then('validate order page Feedback should be displayed', async function () {
    orderPage = new OrderPage(this.page);
    const isVisible = await orderPage.isVisible(orderPage.Feedback);
    expect(isVisible).to.be.true;
});
Then('validate order page Profile should be displayed', async function () {
    orderPage = new OrderPage(this.page);
    const isVisible = await orderPage.isVisible(orderPage.Profile);
    expect(isVisible).to.be.true;
});
Then('validate order page Left Nav Bar should be displayed', async function () {
    orderPage = new OrderPage(this.page);
    const isVisible = await orderPage.isVisible(orderPage.leftNavBar);
    expect(isVisible).to.be.true;
});
Then('User scrolls the left navigate bar in order page', async function () {
    orderPage = new OrderPage(this.page);
    await orderPage.page.evaluate(() => {
        const leftNavBar = document.querySelector("div.nav-menu");
        if (leftNavBar) {
            leftNavBar.scrollBy(0, 100);
        }


    });
});


Then('User cilcks on Book Icon', async function () {
    orderPage = new OrderPage(this.page);
    await orderPage.click(orderPage.BookIcon);
});
Then('validate left navigation bar is not displayed on order page', async function () {
    orderPage = new OrderPage(this.page);
    const isVisible = await orderPage.isVisible(orderPage.leftNavBar);
    expect(isVisible).to.be.false;
});
Then('User validate three dots are displayed in left navigation bar in order page', async function () {
    orderPage = new OrderPage(this.page);
    // const threeDotsSelector = "(//span[contains(@class,'e-btn-icon e-icons')])[1]";
    // await this.page.waitForSelector(orderPage.threeDots);
    await this.page.locator(orderPage.firstFileInLeftNavBar).hover();
    const isVisible = await orderPage.isVisible(orderPage.threeDots);
    expect(isVisible).to.be.true;
});

Then('User clicks on three dots options in the left navigation bar in order page', { timeout: 120 * 1000 }, async function () {
    orderPage = new OrderPage(this.page);
    this.page.waitForLoadState('networkidle');
    await this.page.locator(orderPage.threeDots).hover();
    await orderPage.click(orderPage.threeDots);


});
Then('validate three dots options Rename and delete are displayed in left navigation bar in order page', { timeout: 60 * 1000 }, async function () {
    orderPage = new OrderPage(this.page);
    const isRenameVisible = await orderPage.isVisible(orderPage.renameBtn);
    const isDeleteVisible = await orderPage.isVisible(orderPage.deleteBtn);
    expect(isRenameVisible).to.be.true;
    expect(isDeleteVisible).to.be.true;
    await orderPage.click(orderPage.threeDots);
});
Then('validate three dots options Rename and delete are available for all files in the order page', { timeout: 120 * 1000 }, async function () {
    orderPage = new OrderPage(this.page);
    const fileRows = await orderPage.page.$$("(//a[@class='nav-menu_files-link'])"); // Adjust the selector based on actual file row elements

    for (const row of fileRows) {
        console.log('Checking file row', fileRows.indexOf(row) + 1);
        const fileName = await row.$(`(//a[@class='nav-menu_files-link'])[${fileRows.indexOf(row) + 1}]`);
        await fileName.hover();
        const threeDotsInRow = await this.page.waitForSelector(`(//span[contains(@class,'e-btn-icon e-icons')])[${fileRows.indexOf(row) + 1}]`);
        expect(threeDotsInRow).to.not.be.null;
        await fileName.hover();

        await threeDotsInRow.click();


        const isRenameVisible = await orderPage.isVisible(orderPage.renameBtn);
        const isDeleteVisible = await orderPage.isVisible(orderPage.deleteBtn);
        expect(isRenameVisible).to.be.true;
        expect(isDeleteVisible).to.be.true;
        await threeDotsInRow.click();

    }
});
Then('User renames a file in the order page and validates the renamed file name is updated in the left navigation list in order page', async function () {
    orderPage = new OrderPage(this.page);
    const firstFile = await orderPage.page.$("(//a[@class='nav-menu_files-link'])[1]");
    const originalName = await firstFile.textContent();
    console.log("Original File Name:", originalName);
    await firstFile.hover();
    const threeDotsInRow = await this.page.waitForSelector("(//span[contains(@class,'e-btn-icon e-icons')])[1]");
    expect(threeDotsInRow).to.not.be.null;
    await firstFile.hover();
    await threeDotsInRow.click();
    await orderPage.click(orderPage.renameBtn);
    const fileNameInput = await orderPage.page.$("//input[@class='nav-menu-file_input form_input']");
    await fileNameInput.fill('RenamedFile1');
    await fileNameInput.press('Enter');
    await orderPage.page.waitForTimeout(10000);
    const renamedFile = await orderPage.page.$("(//a[@class='nav-menu_files-link'])[1]");
    const renamedFileName = await renamedFile.textContent();
    expect(renamedFileName).to.equal('RenamedFile1');
    console.log("Assertion Passed: Renamed file is displayed in the left navigation list.");
    renamedFile.hover();
    threeDotsInRow.click();

    await orderPage.click(orderPage.renameBtn);
    await orderPage.page.waitForTimeout(3000);
    await this.page.locator("//input[@class='nav-menu-file_input form_input']").fill(originalName);

    // await fileNameInput.fill(originalName);
    await this.page.keyboard.press('Enter');
    await orderPage.page.waitForTimeout(10000);
    const revertedFile = await orderPage.page.$("(//a[@class='nav-menu_files-link'])[1]");
    const revertedFileName = await revertedFile.textContent();
    expect(revertedFileName).to.equal(originalName);
    console.log("Assertion Passed: File name is reverted back to original name in the left navigation list.");

});

// ******
Then('User Valiates Upload RFP buttton is displayed in order page', async function () {
    orderPage = new OrderPage(this.page);
    const isVisible = await orderPage.isVisible(orderPage.UploadRFP);
    expect(isVisible).to.be.true;
});

Then('User uploads a file in order page', async function () {
    orderPage = new OrderPage(this.page);
    const [fileChooser] = await Promise.all([

        orderPage.page.waitForEvent('filechooser'),
        orderPage.click(orderPage.UploadRFP)
    ]);
    const filePath = 'D:\\Anitha\\Project_Northell\\features\\support\\TestData\\95Record.xlsx';
    await fileChooser.setFiles(filePath);
    const getExcelFileName = filePath.split('\\').pop().replace('.xlsx', '');
    console.log("Uploaded File Name:", getExcelFileName);


    await orderPage.page.waitForTimeout(5000);
    const uploadedFile = await orderPage.page.$("(//a[@class='nav-menu_files-link'])[1]");
    const uploadedFileName = await uploadedFile.textContent();
    expect(uploadedFileName).to.equal(getExcelFileName);
    console.log("Assertion Passed: Uploaded file is displayed in the left navigation list.");
});
// features/support/pages/OrderPage.js
Then('User deletes the uploaded file in the order page and validates the confirmation dialog is displayed before removing the file from the left navigation list in order page', async function () {
    orderPage = new OrderPage(this.page);
    const firstFile = await orderPage.page.$("(//a[@class='nav-menu_files-link'])[1]");
    const firstFilename = await firstFile.textContent();
    const fileName = firstFilename.trim();
    console.log("File Name to be deleted:", fileName);
    await firstFile.hover();
    const threeDotsInRow = await this.page.waitForSelector("(//span[contains(@class,'e-btn-icon e-icons')])[1]");
    expect(threeDotsInRow).to.not.be.null;
    await firstFile.hover();
    await threeDotsInRow.click();
    await orderPage.click(orderPage.deleteBtn);
    const confirmationDialog = await orderPage.page.waitForSelector("//div[normalize-space(text())='Are you sure you want to delete this project? This action cannot be undone.']");
    const DeleteProjectHeader = await orderPage.page.$("//div[normalize-space(text())='Delete project']");
    const DeleteProjectHeaderText = await DeleteProjectHeader.textContent();
    expect(DeleteProjectHeaderText).to.equal("Delete project");
    const cancelButton = await orderPage.page.$("//button[normalize-space(text())='Cancel']");
    const cancelButtonText = await cancelButton.textContent();
    expect(cancelButtonText).to.equal("Cancel");
    const isenable = await cancelButton.isEnabled();
    expect(isenable).to.be.true;


    expect(confirmationDialog).to.not.be.null;
    const dialogText = await confirmationDialog.textContent();
    expect(dialogText).to.equal('Are you sure you want to delete this project? This action cannot be undone.');
    console.log("Are you sure you want to delete this project? This action cannot be undone.");
    await orderPage.page.click("//button[normalize-space(text())='OK']");
    await orderPage.page.waitForTimeout(15000);
    const deletedFile = await orderPage.page.$("(//a[@class='nav-menu_files-link'])[1]");
    const deletedFileName = (await deletedFile.textContent()).trim();
    console.log("Deleted File Name:", deletedFileName);
    if (deletedFileName) {

        expect(deletedFileName).to.not.equal(fileName);
        console.log("Assertion Passed: Deleted file is removed from the left navigation list.");
    } else {
        console.log("Pelease check the file name in the left navigation list.");
    }
});
//** */
Then('validate order page Bottom-left area should display user name and copyright text for Northell Partners', async function () {
    orderPage = new OrderPage(this.page);
    const isVisible = await orderPage.isVisible(orderPage.bottomLeftArea);
    expect(isVisible).to.be.true;

});
Then('User validates the user name and copyright text for Northell Partners in the bottom-left area', async function () {
    orderPage = new OrderPage(this.page);
    const bottomLeftAreaText = await orderPage.getText(orderPage.bottomLeftArea);
    console.log("Bottom-left area Text:", bottomLeftAreaText);
    expect(bottomLeftAreaText).to.include('Copyright 2004 - 2026 Northell Partners Ltd. All Rights Reserved. v1.1.0');

});

//*********FeedBack */

