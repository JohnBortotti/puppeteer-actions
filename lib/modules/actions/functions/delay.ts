import { ExecutionStep } from "../../../types/executionStep";

module.exports = {
  key: "delay",
  function: async function (page: any, step: ExecutionStep) {
    await page.waitForTimeout(step.value);
  },
};
