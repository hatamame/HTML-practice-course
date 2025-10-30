import { test, expect } from '@playwright/test';

test('has new courses', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // "CSSの応用" chapter
  await expect(page.locator('h3:has-text("CSSの応用")')).toBeVisible();
  await expect(page.locator('button:has-text("トランジションとアニメーション")')).toBeVisible();
  await expect(page.locator('button:has-text("疑似要素")')).toBeVisible();

  // "JavaScriptの応用" chapter
  await expect(page.locator('button:has-text("配列の便利なメソッド")')).toBeVisible();
  await expect(page.locator('button:has-text("非同期処理(発展)")')).toBeVisible();

  // "総まとめプロジェクト" chapter
  await expect(page.locator('button:has-text("シンプルなTodoアプリ")')).toBeVisible();
});
