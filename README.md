# Bug Report `eslint-plugin-newline-destructuring`

> expected
```js
const {
  ALGORAND_KMD_API_BASE_URL,
  ALGORAND_KMD_API_PORT,
  ALGORAND_KMD_TOKEN
} = process.env;
```


> actual output: `npm run fix:prettier` (prettier-eslint)
```js
const { SERVICE_NAME_API_BASE_URL, SERVICE_NAME_API_PORT, SERVICE_NAME_TOKEN } =
  process.env;
```

> actual output: `npm run fix:eslint` (not what i use but for completeness)
```js
const {SERVICE_NAME_API_BASE_URL,SERVICE_NAME_API_PORT,SERVICE_NAME_TOKEN} = process.env;
```
