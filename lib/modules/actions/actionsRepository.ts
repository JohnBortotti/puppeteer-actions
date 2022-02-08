import { Action } from "../../types/action";

const fs = require("fs");
const path = require("path");
const basePath = path.resolve(__dirname, "./functions/");

export const getActions = () => {
  const actionsArray: Array<Action> = [];

  fs.readdirSync(basePath).forEach((file: any) => {
    let module = require(`${basePath}/${file}`);
    actionsArray.push(module);
  });

  return actionsArray;
};
