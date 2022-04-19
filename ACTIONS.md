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
- [GetElementInfos](#getelementinfos)
- [GetInnerText](#getinnertext)
- [GetPageScreenshot](#getpagescreenshot)
- [GotoUrl](#gotourl)
- [PageBack](#pageback)
- [PageForward](#pageforward)
- [PageReload](#pagereload)
- [Type](#type)
- [WaitForSelector](#waitforselector)

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
  name: "waiting for anything",
  action: "delay",
  criticalStep: false,
  args: {
    delay: 4000,
  },
}
```

### GetElementInfos

- Description: Evaluates the element and return an object with infos (innerText), mapped from the selectors array, saving it on the defined property.
- Action key: "get-element-infos"
- How to use: set the element selector in `args.elementSelector`, the property key in `args.property`, and the infos inside the `args.infos` array, as described below

```js
{
  name: "Get element infos",
  action: "get-element-infos",
  criticalStep: false,
  args: {
    elementSelector: ".card-selector",
    property: "cardInfos",
    infos: [
      {
        name: "card-title",
        selector: ".card-title > p",
      },
      {
        name: "card-description",
        selector: ".card-description > div",
      },
    ],
  },
},
```

### GetInnerText

- Description: Evaluates the element and get innerText, saving it on the defined property.
- Action key: "get-inner-text"
- How to use: set the target selector in `args.selector`, and the property in `args.property`, on the next steps this property will be populated with the evaluated text

```js
{
  name: "Get inner text from card",
  action: "get-inner-text",
  criticalStep: false,
  args: {
    selector: ".any-selector-card-y",
    property: "cardText"
  }
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

### PageBack

- Description: Navigate to the previous page.
- Action key: "page-back"
- How to use: this action require no args

```js
{
  name: "returning page",
  action: "page-back",
  criticalStep: false,
  args: {},
}
```

### PageForward

- Description: Navigate to the next page.
- Action key: "page-forward"
- How to use: this action require no args

```js
{
  name: "go to next page",
  action: "page-forward",
  criticalStep: false,
  args: {},
}
```

### PageReload

- Description: Reload page.
- Action key: "page-reload"
- How to use: this action require no args

```js
{
  name: "reloading page",
  action: "page-reload",
  criticalStep: false,
  args: {},
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

### WaitForSelector

- Description: Wait for the target selector to appear in page.
- Action key: "wait-for-selector"
- How to use: set the target selector on `args.selector`

```js
{
  name: "waiting for a selector",
  action: "wait-for-selector",
  criticalStep: false,
  args: {
    selector: '#any-selector',
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
      //e.g. console.log('test')//
      await page.goto("https://www.github.com");
    },
  },
}
```
