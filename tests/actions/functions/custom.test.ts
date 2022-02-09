const puppeteer = require("puppeteer");

test("custom action function should execute mocked function", async () => {
  const customAction = require("../../../lib/modules/actions/functions/custom");

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  let customMockedFunction = jest.fn();

  const step = {
    name: "custom action test",
    action: "custom",
    args: {
      customFunction: async function (page) {
        customMockedFunction(page);
      },
    },
  };

  await customAction.function(page, step);
  await browser.close();

  expect(customMockedFunction.mock.calls.length).toBe(1);
});

test("custom action should execute mocked function with puppeteer page instance as parameter", async () => {
  const customAction = require("../../../lib/modules/actions/functions/custom");

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  let customMockedFunction = jest.fn();

  const step = {
    name: "custom action test",
    action: "custom",
    args: {
      customFunction: async function (page) {
        customMockedFunction(page);
      },
    },
  };

  await customAction.function(page, step);
  await browser.close();

  expect(customMockedFunction.mock.calls[0][0]).toBe(page);
});
