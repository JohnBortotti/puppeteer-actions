import { ExecutionStep } from "./executionStep";

export type Payload = {
  config: {
    headless: boolean;
    slowMotion: number;
    ignoreHttpErrors: boolean;
    viewPort: {
      width: number;
      height: number;
    };
  };
  steps: Array<ExecutionStep>;
}
