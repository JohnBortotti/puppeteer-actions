import { PuppeteerConfig } from "./types/puppeteerConfig";
import { handleStep } from "./modules/execution/execution";
import { ExecutionStep } from "./types/executionStep";
import { browserInit } from "./modules/puppeteer/actions/browserInit";
import { Payload } from "./types/payload";

/**
 * The executeSteps() is the main interface provided by this lib, by running it, the steps described in json input will be executed,
 * with a callback, wich is also executed at every loop
 *
 * @param payload payload with configs ands steps to be executed
 * @param stepCallback callback wich is executed every step
 * @param errorCallback callback wich is executed at everey excepction occurence
 */
export const executeSteps = async (
  payload: Payload,
  stepCallback: Function,
  errorCallback: Function
) => {
  const config: PuppeteerConfig = payload.config;
  const page = await browserInit(config);

  let step: ExecutionStep;
  for await (step of payload.steps) {
    try {
      await handleStep(page, step);
      await stepCallback(step);
    } catch (e) {
      errorCallback(e, page);
      if (step.criticalStep) break;
    }
  }
};
