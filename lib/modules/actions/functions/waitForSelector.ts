import { ExecutionStep } from "../../../types/executionStep";

module.exports = {
  key: "wait-for-selector",
  function: async function (page: any, step: ExecutionStep) {
    await page.waitForSelector(step.args.selector);
  },
};
