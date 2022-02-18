import { ExecutionStep } from "../../../types/executionStep";

module.exports = {
  key: "page-back",
  function: async function (page: any, step: ExecutionStep) {
    await page.goBack();
  },
};
