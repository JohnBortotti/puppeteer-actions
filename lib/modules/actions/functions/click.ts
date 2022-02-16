import { ExecutionStep } from "../../../types/executionStep";

module.exports = {
  key: "click",
  function: async function (page: any, step: ExecutionStep) {
    await page.click(step.args.selector, step.args.button);
  },
};
