import { ExecutionStep } from "../../../types/executionStep";

module.exports = {
  key: "custom",
  function: async function (page: any, step: ExecutionStep) {
    await step.args.customFunction(page);
  },
};
