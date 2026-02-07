const { Given, When, Then } = require('@cucumber/cucumber');
const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

// Read Excel file
const readExcelFile = (filePath) => {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(worksheet);
};

// Get table data from webpage
const getTableData = async (page, tableSelector) => {
    return await page.evaluate((selector) => {
        const rows = document.querySelectorAll(`${selector} tbody tr`);
        const data = [];
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const rowData = {};
            cells.forEach((cell, index) => {
                rowData[`col_${index}`] = cell.textContent.trim();
            });
            data.push(rowData);
        });
        return data;
    }, tableSelector);
};

// Compare Excel and Table data
Given('I upload Excel file {string} to the webpage', async function (filePath) {
    const fullPath = path.join(__dirname, `../../${filePath}`);

    // Upload file
    const fileInput = await this.page.$('input[type="file"]');
    await fileInput.setInputFiles(fullPath);

    // Wait for table to load
    await this.page.waitForLoadState('networkidle');

    // Store Excel data for later comparison
    this.excelData = readExcelFile(fullPath);
    console.log('Excel data:', this.excelData);
});

Then('I compare Excel data with web table {string}', async function (tableSelector) {
    // Get table data
    const tableData = await getTableData(this.page, tableSelector);
    console.log('Table data:', tableData);

    // Compare and find missing values
    const missingValues = [];

    this.excelData.forEach((excelRow, rowIndex) => {
        const tableRow = tableData[rowIndex];

        Object.keys(excelRow).forEach((key, colIndex) => {
            const excelValue = String(excelRow[key]).trim();
            const tableValue = tableRow[`col_${colIndex}`] || '';

            if (excelValue !== tableValue) {
                missingValues.push({
                    rowIndex,
                    colIndex,
                    excelValue,
                    tableValue,
                    key
                });
            }
        });
    });

    this.missingValues = missingValues;
    console.log('Missing values:', missingValues);
});

Then('I update missing values in the table {string}', async function (tableSelector) {
    for (const missing of this.missingValues) {
        // Get the specific cell
        const cellSelector = `${tableSelector} tbody tr:nth-child(${missing.rowIndex + 1}) td:nth-child(${missing.colIndex + 1})`;
        const cell = await this.page.$(cellSelector);

        if (cell) {
            // Click to edit (adjust based on your table's edit mechanism)
            await cell.click();

            // Find input field or editable element
            const inputField = await cell.$('input') || await this.page.$(`${cellSelector} input`);

            if (inputField) {
                await inputField.fill(missing.excelValue);
                await inputField.press('Enter');
                console.log(`✓ Updated cell [${missing.rowIndex}, ${missing.colIndex}] with value: ${missing.excelValue}`);
            }
        }
    }

    // Take screenshot after updates
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const screenshotPath = path.join(__dirname, `../../reports/screenshots/UPDATED_TABLE_${timestamp}.png`);
    await this.page.screenshot({ path: screenshotPath });
    console.log(`✓ Screenshot of updated table: ${screenshotPath}`);
});