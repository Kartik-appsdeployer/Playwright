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
    await page.getByRole('button', { name: Selector4.login }).click();
    await page.locator(Selector4.boardSelection).click()
    await page.locator("div[role='button'][data-rbd-draggable-context-id='0'][data-rbd-draggable-id='64a26e81237085c4e89d2e1f']").dragTo(await page.locator("//body/div/div/div/main/div/div[2]/div[2]"))
});