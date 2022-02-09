# Puppeteer Actions

## Actions
All the actions and how to use them are described below:

how to use this section:
- Description: describes the action functionality
- Action key: the action identifier, use it in `action` field
- How to use: describes the params and args available for the action

All actions available:

- [GotoUrl](#gotourl)
- [Delay](#delay)
- [GetPageScreenshot](#getpagescreenshot)
- [Custom](#custom-action)

### GotoUrl

- Description: Redirect your browser page to the provided URL.
- Action key: "goto-url"
- How to use: set the destinantion URL on `value` field

```js
{
    name: "opening github page",
    action: "goto-url",
    value: "https://www.github.com",
    criticalStep: false,
    args: {},
}
```

### Delay

- Description: Set a delay in your pipeline
- Action key: "delay"
- How to use: set the delay (miliseconds) in `value` field

```js
{
  name: "waiting for any",
  action: "delay",
  value: "4000",
  criticalStep: false,
  args: {},
}
```

### GetPageScreenshot

- Description: Get a screenshot of browser page and save file
- Action key: "get-page-screenshot"
- How to use: set the path to file be stored in `value` field, set the image type in `args.imageType` field, set the fullPage option in `args.fullPage`

```js
{
  name: "get a screenshot",
  action: "get-page-screenshot",
  value: "./my-image.jpg",
  criticalStep: false,
  args: {
      type: "jpg",
      fullPage: true
  }
}
```

### Custom Action

There is a special action, called "Custom". This action allows you to inject your own code, you can use your own function inside "Puppeteer Actions" pipeline, allowing any behaviour implementation.

- Description: Execute any custom function provided
- Action key: "custom"
- How to use: create an `async function` on `args.customFunction` field, receiving a puppeteer page instance

```js
{
  name: "custom",
  action: "custom",
  criticalStep: true,
  args: {
    customFunction: async function (page) {
      //any function here//
      await page.goto("https://www.github.com");
    },
  },
}
```
