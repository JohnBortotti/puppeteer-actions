import { ExecutionStep } from "../../../types/executionStep";

module.exports = {
  key: "get-page-screenshot",
  function: async function (page: any, step: ExecutionStep) {
    await page.screenshot({
      path: step.args.path,
      type: step.args.imageType,
      fullPage: step.args.fullPage,
    });
  },
};
