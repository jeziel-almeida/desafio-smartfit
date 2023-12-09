# DesafioSmartfit

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## Steps for setting up Jest in Angular Projects

1. Remove Karma and Jasmine libs: npm uninstall karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter karma-coverage jasmine-core @types/jasmine
2. Remove files: `karma.conf.js` `test.ts`
3. Remover bloco test do arquivo `angular.config`
4. Install the libs: npm install jest jest-preset-angular @types/jest ts-node --save-dev
5. Create file `setup-jest.ts` with the following content: 
```js
import 'jest-preset-angular/setup-jest';
```
6. Create file `jest.config.ts` with the following content:
```js
import type {Config} from 'jest';

const config: Config = {
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  globalSetup: 'jest-preset-angular/global-setup',
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/"
  ],
  transform: {
    '^.+\\.(ts|js|html)$': ['jest-preset-angular', {
      tsConfig: "<rootDir>/tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$"
    }]
  },
};

export default config;
```
7. Modify the `tsconfig.spec.json` file with the follwing content:
```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jest",
      "node"
    ]
  },
  "files": [
    "src/setup-jest.ts"
  ],
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.d.ts"
  ]
}
```
8. Modify the test script in package.json file:
```json
{
  ...
  "scripts": {
    ...
    "test": "jest"
  }
}
```
