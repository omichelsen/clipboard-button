# clipboard-button

[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

Copy text to clipboard by clicking a button, using only vanilla javascript without Flash. This is using the new [Selection API](https://developer.mozilla.org/en-US/docs/Web/API/Selection) and [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/ClipboardEvent) available in the latest browsers.

Browser support: Chrome 43+, Firefox 41+, Opera 29+ and IE10+.

See the [demo](https://rawgit.com/omichelsen/clipboard-button/master/demo/demo.html).

## Install

Install using `npm` or `bower`:

```bash
$ npm install clipboard-button --save
```
```bash
$ bower install clipboard-button --save
```

clipboard-button has no dependencies.

## Usage

Create a button on your page, and specify the text you want to copy in the `data-clipboard-text` attribute:

```html
<button id="myButton" data-clipboard-text="textToCopy">Copy</button>
```

Initialize clipboard-button by specifying a target button, either by a selector string or element instance:

```javascript
function success() {
    console.log('Copied!');
};

function fail(err) {
    console.error('Error!', err);
};

var cpb = clipboardButton('#myButton', success, fail);
```

You can supply optional callback methods to be called for the `success` and `error` event. The `error` function will be called with the error object as first argument.

To clean up all event handlers and resources, you can call `cpb.destroy()`.

[travis-image]: https://img.shields.io/travis/omichelsen/clipboard-button/master.svg
[travis-url]: https://travis-ci.org/omichelsen/clipboard-button
[coveralls-image]: https://img.shields.io/coveralls/omichelsen/clipboard-button/master.svg
[coveralls-url]: https://coveralls.io/r/omichelsen/clipboard-button?branch=master