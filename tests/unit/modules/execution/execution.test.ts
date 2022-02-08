import { StepExecutionException } from "../../../../lib/exceptions/StepExecutionException";
import { ExecutionStep } from "../../../../lib/types/executionStep";
import {
  executeStepAction,
  findActionByKey,
  handleStep,
} from "../../../../lib/modules/execution/execution";

test("executeStepAction should execute action function", async () => {
  let customMockedFunction = jest.fn();

  let actions = [
    {
      key: "action-test",
      function: customMockedFunction,
    },
  ];

  let step: ExecutionStep = {
    name: "custom",
    action: "action-test",
    value: "any",
    criticalStep: false,
    args: {},
  };

  await executeStepAction("action-test", step, actions);

  expect(customMockedFunction.mock.calls.length).toBe(1);
});

test("executeStepAction should throw Error if action not found", async () => {
  let step: ExecutionStep = {
    name: "test",
    action: "any-action-that-doesnt-exists",
    value: "any",
    criticalStep: false,
    args: {},
  };

  await expect(executeStepAction("any page", step, [])).rejects.toThrow(
    "action not found"
  );
});

test("findActionByKey should return correct action", () => {
  let actionsList = [
    {
      key: "action-1",
      function: function () {},
    },
    {
      key: "action-2",
      function: function () {},
    },
    {
      key: "action-3",
      function: function () {},
    },
  ];

  let resultAction = findActionByKey(actionsList, "action-2");

  expect(resultAction.key).toBe("action-2");
});

test("findActionByKey should return undefined when action not found", () => {
  let actionsList = [
    {
      key: "action-1",
      function: function () {},
    },
    {
      key: "action-2",
      function: function () {},
    },
    {
      key: "action-3",
      function: function () {},
    },
  ];

  let resultAction = findActionByKey(actionsList, "action-4");

  expect(resultAction).toBe(undefined);
});

test("handleStep should throw StepExecutionException", async () => {
  let step: ExecutionStep = {
    name: "test123",
    action: "any-action-that-doesnt-exists",
    value: "any",
    criticalStep: false,
    args: {},
  };

  await expect(handleStep("any page", step)).rejects.toThrowError(
    StepExecutionException
  );
});
