import { ExecutionStep } from "../../../types/executionStep";

module.exports = {
  key: "page-reload",
  function: async function (page: any, step: ExecutionStep) {
    await page.reload();
  },
};
