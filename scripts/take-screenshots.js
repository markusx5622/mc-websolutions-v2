const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: "new"
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const demos = [
    { url: 'http://localhost:3000/demo-mascotas', name: 'mascotas.png' },
    { url: 'http://localhost:3000/demo-speed', name: 'speed.png' },
    { url: 'http://localhost:3000/demo-local', name: 'local.png' },
    { url: 'http://localhost:3000/demo-premium', name: 'premium.png' },
    { url: 'http://localhost:3000/demo-sastre', name: 'sastre.png' },
    { url: 'http://localhost:3000/demo-padel', name: 'padel.png' }
  ];

  for (const demo of demos) {
    console.log(`Taking screenshot for ${demo.url}`);
    try {
      await page.goto(demo.url, { waitUntil: 'load', timeout: 60000 });
      await new Promise(resolve => setTimeout(resolve, 5000));
      await page.screenshot({ path: `public/demos/${demo.name}` });
      console.log(`Saved ${demo.name}`);
    } catch (e) {
      console.error(`Failed ${demo.url}:`, e);
    }
  }

  await browser.close();
  console.log("Done");
  process.exit(0);
})();
