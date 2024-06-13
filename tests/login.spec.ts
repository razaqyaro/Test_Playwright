import { test, expect, chromium, firefox, webkit } from '@playwright/test';

test('login', async () => {
  for (const browserType of [chromium, firefox, webkit]) {
    const browser = await browserType.launch({ headless: false });
    const context = await browser.newContext({ ignoreHTTPSErrors: true });
    const page = await context.newPage();
    await page.goto('https://wip-ent2.t-internal.com:8443/microfrontend/');
    await page.locator('.meta-navigation__item-label').click();
    await page.locator("#viewns_Z7_70I81C41OOLS90QCS3N55924J4_:loginForm:textfieldUsername").fill("antest-mi");
    await page.locator("#viewns_Z7_70I81C41OOLS90QCS3N55924J4_:loginForm:textsecretPassword").fill("Telekom01")
    await page.locator("#viewns_Z7_70I81C41OOLS90QCS3N55924J4_:loginForm:buttonLogin").click();
    await page.pause(); 
  
  }
});
