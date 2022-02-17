import { ExecutionStep } from "../../../types/executionStep";

module.exports = {
  key: "get-inner-text",
  function: async function (page: any, step: ExecutionStep) {
    let element = await page.$(step.args.selector);
    let value = await page.evaluate((el: any) => el.innerText, element);

    page[step.args.property] = value;
  },
};
