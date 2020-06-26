# 10_Day_JS_Challenge

`"test": "mocha --require @babel/register **/test/**test.js"`

## Dependencies to install for chai/mocha/babel

* `npm install typescript`
* `npm install ts-node`
* `npm install @types/chai @types/mocha --save-dev`

Update the `scripts` block in `package.json`:

```json
"scripts": {
    "start": "nodemon --exec babel-node src/index.js",
    "test": "mocha -r ts-node/register **/test/**test.ts"
  }
```
