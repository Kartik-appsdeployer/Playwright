import { chromium, test } from '@playwright/test';
import { LoginCredentials } from '../config'; //Login Credentials
import { Selector2 } from '../Selectors/UserStory2_Selectors';
test('broswer', async ({ page }) => {

  // Here I'm launching a browser
  const browser = await chromium.launch({
    headless: false
  });

  // Directing to this particular URL
  await page.goto('https://task.appdeployers.com/login');
  await page.getByPlaceholder(Selector2.email).click(); //Finding email input with a placeholder
  await page.getByPlaceholder(Selector2.email).fill(LoginCredentials.email);//Filling email input
  await page.getByPlaceholder(Selector2.password).click();//Finding password input with a placeholder
  await page.getByPlaceholder(Selector2.password).fill(LoginCredentials.password);//Filling password input
  await page.getByRole('button', { name: Selector2.login }).click();//Clicking on a button with name Login
  await page.locator(Selector2.workspaceInput).click(); //Finding an input with type text.
  await page.locator(Selector2.workspaceInput).fill("NewWorkspace"); //Creating a new workspace by filling name of workspace
  await page.getByRole('button', {name: Selector2.workspaceButton}).click(); //Clicking on a button with having name Next
  await page.locator(Selector2.boardInput).click();//Finding an input with type text.
  await page.locator(Selector2.boardInput).fill("Board"); //Creating a new board by filling name of board
  await page.locator(Selector2.boardColor1).click(); //Click on a button with given classname
  await page.locator(Selector2.boardColor2).click()//Clicking on a div with the given title
  await page.getByRole('button', {name: Selector2.boardButton}).click();//Clicking on a button for next
  await page.getByRole('button', {name: Selector2.finshButton}).click();//Clicking on a button for finish
});

