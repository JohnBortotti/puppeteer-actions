# Puppeteer Actions

Puppeteer Actions provides you a interface for run puppeteer executions, through a payload, making easier the way to develop with puppeteer, and reducing duplicated code in your application.

## Installation

To use Puppeteer Actions in your project, run:

```
npm i puppeteer-actions |> not available yet
```

## Usage

Use the function `executeSteps` provided by the lib (lib/index), passing a payload object, and two callbacks, as described below:

- Config: Object to configure Puppeteer (headless, viewPort, etc.)
  - headless: puppeteer headlessMode (boolean)
  - slowMotion: puppeteer slowMotion flag (number)
  - ignoreHttpErrors: puppeteer ignoreHttpErrors flag (boolean)
  - viewPort
    - width: browser window width (number)
    - height: browser window height (number)
- Steps: Array with the execution steps
  - name: step name - used for step identification, debug and tracing (string)
  - action: action key - key to define wich action will be executed. Consult the [Actions](#actions) section (string)
  - value: main param for action - example: url, delay time, etc. Consult the Action to see available params (string)
  - criticalStep: defines if the step is critical, if true, when an exception is throwed, the pipeline will be stopped (boolean)
  - args: other params for action (any)

```ts
const { executeSteps } = require("./dist/lib/index");

const payload = {
  // config object for puppeteer
  config: {
    headless: false,
    slowMotion: 0,
    ignoreHttpErrors: false,
    viewPort: {
      width: 500,
      height: 500,
    },
  },
  // the steps wich will be executed
  steps: [
    {
      name: "step 1",
      action: "goto-url",
      criticalStep: false,
      args: {
        url: "https://www.github.com",
      },
    },
    {
      name: "step 2",
      action: "delay",
      criticalStep: true,
      args: {
        delay: 4000,
      },
    },
  ],
};

// read and execute steps
executeSteps(
  // payload
  payload,
  // step callback
  (step) => console.log(step.name),
  // error callback
  (e, page) => console.log(e)
);
```

## Callbacks

The `executeSteps` provides 2 callbacks:

- Step callback - The first callback, executed at every loop on steps array. Receives the parameter `step`, where all the information about the executing step is acessible. Useful for external logging, integrations and persistences.
- Error callback - Executed at every exception occurrence. Receives the parameters `error` and `browser page` instance. Useful for debug, logs and tracing.

## Actions

Actions are the core of the pipeline, modular and configurable prebuilt functions that will save your time coding puppeteer functions
<br>
All available actions: [Actions Doc](./ACTIONS.md)

## Contributing

- [ ] Add this section
