# Puppeteer Actions

## Actions

All the actions and how to use them are described below:

how to use this section:

- Description: describes the action functionality
- Action key: the action identifier, use it in your step `action` field
- How to use: describes the params and args available for the action

All actions available:

- [Click](#click)
- [Delay](#delay)
- [GetPageScreenshot](#getpagescreenshot)
- [GotoUrl](#gotourl)
- [Type](#type)

- [Custom Action](#custom-action)

### Click

- Description: Click on selector.
- Action key: "click"
- How to use: set the target selector on `args.selector` and mouse button on `args.button`

```js
{
  name: "I'm Feeling Lucky",
  action: "click",
  criticalStep: false,
  args: {
    selector: "#gb > div > div:nth-child(1) > div > div:nth-child(1) > a",
    button: "middle",
  },
}
```

### Delay

- Description: Set a delay in your pipeline
- Action key: "delay"
- How to use: set the delay (miliseconds) in `args.delay` field

```js
{
  name: "waiting for any",
  action: "delay",
  criticalStep: false,
  args: {
    delay: 4000,
  },
}
```

### GetPageScreenshot

- Description: Get a screenshot of browser page and save file
- Action key: "get-page-screenshot"
- How to use: set the path to file be stored in `args.path` field, set the image type in `args.imageType` field, set the fullPage option in `args.fullPage`

```js
{
  name: "get a screenshot",
  action: "get-page-screenshot",
  criticalStep: false,
  args: {
    path: "./my-image.jpg",
    type: "jpg",
    fullPage: true
  }
}
```

### GotoUrl

- Description: Redirect your browser page to the provided URL.
- Action key: "goto-url"
- How to use: set the destinantion URL on `args.url` field

```js
{
  name: "opening github page",
  action: "goto-url",
  criticalStep: false,
  args: {
    url: "https://www.github.com"
  },
}
```

### Type

- Description: Insert keyboard input.
- Action key: "type"
- How to use: set the target selector on `args.selector` and input string on `args.input`

```js
{
  name: "type a string",
  action: "type",
  criticalStep: false,
  args: {
    selector: '.class',
    input: 'anything here',
  },
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
