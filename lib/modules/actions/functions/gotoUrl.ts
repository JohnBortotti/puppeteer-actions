import { ExecutionStep } from "../../../types/executionStep";

module.exports = {
  key: "goto-url",
  function: async function (page: any, step: ExecutionStep) {
    await page.goto(step.args.url);
  },
};
