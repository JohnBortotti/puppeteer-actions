const puppeteer = require("puppeteer");
import { PuppeteerConfig } from "../../../types/puppeteerConfig";

export const browserInit = async (config: PuppeteerConfig) => {
  const browser = await puppeteer.launch(config);
  return await browser.newPage();
};
