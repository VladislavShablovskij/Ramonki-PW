import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    browserName: 'chromium',
    headless: false,
    viewport: { width: 1280, height: 720 },
    baseURL: 'https://ramonki.by',
  },
  retries: 0,
  reporter: [['list'], ['html']],
});
