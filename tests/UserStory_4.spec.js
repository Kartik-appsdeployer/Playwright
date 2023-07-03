import { chromium, test } from '@playwright/test';
import { LoginCredentials } from '../config';
import { Selector4 } from '../Selectors/UserStory4_Selectors';

test('broswer', async ({ page }) => {
    // Directing to this particular URL
    await page.goto('https://task.appdeployers.com/login');
    await page.getByPlaceholder(Selector4.email).click(); //Finding email input with a placeholder
    await page.getByPlaceholder(Selector4.email).fill(LoginCredentials.email);//Filling email input
    await page.getByPlaceholder(Selector4.password).click();//Finding password input with a placeholder
    await page.getByPlaceholder(Selector4.password).fill(LoginCredentials.password);//Filling password input
    await page.getByRole('button', { name: Selector4.login }).click();//Clicking on a button with name Login
    await page.locator(Selector4.boardSelection).click()//Clicking on Plus button for board creation
    await page.locator(Selector4.newBucketCreation).click()
    await page.getByPlaceholder(Selector4.bucketTitle).click()
    await page.getByPlaceholder(Selector4.bucketTitle).fill("New Bucket");
    await page.getByRole('button',{name: Selector4.addBucketButton}).click()
    await page.locator(Selector4.newCardCreation).click()
    await page.getByPlaceholder(Selector4.cardTitle).click()
    await page.getByPlaceholder(Selector4.cardTitle).fill("New Card")
    await page.getByText(Selector4.addCardButton).click()
    await page.locator(Selector4.selectDescription).click()
    await page.getByText(Selector4.addDescription).click()
    await page.locator(Selector4.descriptionTextArea).fill("Description for testing")
    await page.getByRole('button', {name: Selector4.descriptionSave}).click()
    await page.locator(Selector4.checklistButton).click()
    await page.getByText(Selector4.checklistAddButton, {exact: true}).click()
    await page.locator(Selector4.button_of_item_addition).click()
    await page.getByPlaceholder(Selector4.addItem).click()
    await page.getByPlaceholder(Selector4.addItem).fill("Item1")
    await page.getByText(Selector4.itemAdditionButton, {exact: true}).click()
    await page.locator(Selector4.checkItem).click()
});
