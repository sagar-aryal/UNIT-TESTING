# Jest Project

## 1. Create a project folder

## 2. Create package.json with `npm init `

```shell
> npm init -y
```

Or

```shell
> npm init
```

and answer the questions

## 3. Install jest as devDependencies

```shell
> npm install jest --save-dev
```

## 4. Modify test-script in package.json

```json
"scripts": {
    "test":"jest"
}
```

## 5. Create test folder named `__tests__`

## 6. Write tests

## 7. To run tests

```shell
npm test
```

### To run only one test file

```shell
npm test --testfile__ fileToBeTested.test.js
```
