import { ExecutionStep } from "../../../types/executionStep";

module.exports = {
  key: "page-forward",
  function: async function (page: any, step: ExecutionStep) {
    await page.goForward();
  },
};
