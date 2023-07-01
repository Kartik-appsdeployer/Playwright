import { chromium, test } from '@playwright/test';
import { LoginCredentials } from '../config'; //Login Credentials
import { Selector3 } from '../Selectors/UserStory3_Selectors';
test('broswer', async ({ page }) => {

  // Here I'm launching a browser
  const browser = await chromium.launch({
    headless: false
  });

  // Directing to this particular URL
  await page.goto('https://task.appdeployers.com/login');
  await page.getByPlaceholder(Selector3.email).click(); //Finding email input with a placeholder
  await page.getByPlaceholder(Selector3.email).fill(LoginCredentials.email);//Filling email input
  await page.getByPlaceholder(Selector3.password).click();//Finding password input with a placeholder
  await page.getByPlaceholder(Selector3.password).fill(LoginCredentials.password);//Filling password input
  await page.getByRole('button', { name: Selector3.login }).click();//Clicking on a button with name Login
  await page.locator(Selector3.plus_button).click()//Clicking on Plus button for board creation
  await page.locator(Selector3.create_board_button).click()//Clicking on Create board button
  await page.getByPlaceholder(Selector3.board_title).click()//Finding title input of board
  await page.getByPlaceholder(Selector3.board_title).fill("TestingBoard")//Filling title of board
  await page.locator(Selector3.colorSelector1).click()//Color selection
  await page.locator(Selector3.colorSelector2).click();//Color selection
  await page.getByRole('button', {name: Selector3.create_button}).click()//Finish Button
});