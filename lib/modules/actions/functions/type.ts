import { ExecutionStep } from "../../../types/executionStep";

module.exports = {
  key: "type",
  function: async function (page: any, step: ExecutionStep) {
    await page.type(step.args.selector, step.args.input);
  },
};
