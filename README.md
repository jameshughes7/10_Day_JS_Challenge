# 10_Day_JS_Challenge

## Dependencies to install for chai/mocha/babel

* `npm install typescript`
* `npm install ts-node`
* `npm install @types/chai @types/mocha --save-dev`
* `npm install @babel/core`
* `npm install @babel/node`
* `npm install @babel/preset-env`
* `npm install @babel/register`

Update the `scripts` block in `package.json`:

```json
"scripts": {
    "test": "mocha -r ts-node/register test/**/*test.ts"
  }
```

Create `tsconfig.json` in the root of your project with:

```json
{
    "compilerOptions": {
        "outDir": "./built",
        "allowJs": true,
        "target": "es5",
        "module": "CommonJs",
    },
    "include": ["src/**/*.ts", "test/**/*.ts"],
    "exclude": ["node_modules"]
}
```
