import { StepExecutionException } from "../../exceptions/StepExecutionException";
import { Action } from "../../types/action";
import { ExecutionStep } from "../../types/executionStep";
import { getActions } from "../actions/actionsRepository";

/**
 * this function is where we get the action (findByKey) and execute his funcion itself
 * @param page Puppeteer page instance
 * @param step The step wich will be executed
 * @param actions Array where all the actions are provided
 */
export const executeStepAction = async (
  page: any,
  step: ExecutionStep,
  actions: Array<Action>
): Promise<void> => {
  let action = findActionByKey(actions, step.action);

  if (!action) throw new Error("action not found");

  await action.function(page, step);
};

/**
 * function responsible to find the action (on actionsList) based on action-key provided
 * @param actionsList Array where all the actions is provided
 * @param actionKey  String used to find the action (search input)
 */
export const findActionByKey = (
  actionsList: Array<Action>,
  actionKey: String
): Action => {
  let action = actionsList.find((el) => el.key == actionKey);

  return action;
};

/**
 * Handles the step execution, and throw exception if its needed
 * @param page Puppeteer page instance
 * @param step The execution step
 */
export const handleStep = async (
  page: any,
  step: ExecutionStep
): Promise<void> => {
  try {
    await executeStepAction(page, step, getActions());
  } catch (e) {
    throw new StepExecutionException(`${e} at step: ${JSON.stringify(step)}`);
  }
};
