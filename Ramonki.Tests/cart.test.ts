import { test, expect } from '@playwright/test';

// test.skip('Проверка добавления товара в корзину', async ({ page }) => {
  
//   //Arrange
//   await page.goto('https://ramonki.by');
//   await page.click('.cookies-modal__button--white');
//   await page.locator('//li[@class="categories__item"]//span[text()="Платья и сарафаны"]').click();
//   await page.locator('//*[@id="ramonki"]//*[@class="product-card__image_container"]').first().click();

//   const expectedProductName = await page.locator('//a[@class="product-page__title--text"]').textContent();
//   const expectedProductPrice = await page.locator('//p[@class="price__final"]').textContent();
//   const expectedProductSize = await page.locator('//li[@class="options-selector__item"]').first().textContent();
 
//   // Act
//   await page.locator('//ul[@class="options-selector__list"]//li[@class="options-selector__item"]').first().click();
//   await page.click('.buttons__add-to-cart');
//   await page.waitForSelector('.v-modal__close');
//   await page.locator('.button', { hasText: 'Оформить заказ' }).click();
//   await page.waitForSelector('.cart-item');

//   const productName = await page.locator('.cart-item__text[href*="product"]').textContent(); 
//   const productPrice = await page.locator('//p[@class="order-form__text order-form__text--total"]//span').textContent(); 
//   const productSize = await page.locator('//p[@class="cart-item__text"]', { hasText: 'Размер' }).textContent();

//   // Assert
//   expect(productName?.trim()).toContain(expectedProductName?.trim());
//   expect(productPrice?.trim()).toContain(expectedProductPrice?.trim());
//   expect(productSize?.trim().split(" ")[1]).toContain(expectedProductSize?.trim().split(" ")[0]);
// });



test('Alt version - сравнение товара в карточке и корзине', async ({ page }) => {

  //Arrange
  await page.goto('https://ramonki.by');
  await page.click('.cookies-modal__button--white');
  await page.getByRole('link', { name: 'Платья и сарафаны' }).click();
  await page.locator('a[href="/product/almirastyle-232-serebro-100103800085"]').click();

  const expectedProductName = await page.locator('span.product-page__title--sku').textContent();
  const expectedProductPrice = await page.locator('.price__final').textContent();
  const expectedProductSize = await page.locator('//li[@class="options-selector__item"]').first().textContent();

  // Act
  await page.locator('.options-selector__list .options-selector__item').first().click();
  await page.getByRole('button', { name: 'В корзину' }).click();
  await page.getByRole('link', { name: 'Корзина' }).click();

  const productName = await page.locator('a.cart-item__text').textContent();
  const productPrice = await page.locator('.order-form__text--total span').textContent();
  const productSize = await page.locator('//p[@class="cart-item__text"]', { hasText: 'Размер' }).textContent();

  // Assert
  expect(productName?.trim()).toBe(expectedProductName?.trim());
  expect(productPrice?.trim()).toBe(expectedProductPrice?.trim());
  expect(productSize?.trim().split(" ")[1]).toContain(expectedProductSize?.trim().split(" ")[0]);
});


