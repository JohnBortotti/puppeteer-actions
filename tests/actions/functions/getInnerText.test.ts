const puppeteer = require("puppeteer");

test("getInnerText should return correct text on the property 'propertyInnerText'", async () => {
  const action = require("../../../lib/modules/actions/functions/getInnerText");

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://pptr.dev/");
  await page.waitForTimeout(2000);

  const step = {
    name: "getInnerText action test",
    action: "testing puppeteer site",
    args: {
      selector: ".pptr-readme > content-box:nth-child(1) > h1:nth-child(2)",
      property: "propertyInnerText",
    },
  };

  await action.function(page, step);
  await browser.close();

  expect(page.propertyInnerText).toBe("Puppeteer");
});
