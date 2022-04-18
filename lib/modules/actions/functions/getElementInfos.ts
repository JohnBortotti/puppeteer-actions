import { ExecutionStep } from "../../../types/executionStep";

module.exports = {
  key: "get-element-infos",
  function: async function(page: any, step: ExecutionStep) {
    let values = await page.$eval(
      step.args.elementSelector,
      (element: any, step: any) => {
        let results = {};

        step.args.infos.map((info: any) => {
          results[info.name] = element.querySelector(info.selector).innerText;
        });

        return results;
      },
      step
    );

    page[step.args.property] = values;
  },
};
