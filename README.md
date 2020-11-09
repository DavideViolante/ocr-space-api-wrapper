# OCR Space Node.js API wrapper
Node.js wrapper for [ocr.space APIs](https://ocr.space/ocrapi).

### Install
`npm i ocr-space-api-wrapper`

### Usage
```js
const ocrSpace = require('ocr-space-api-wrapper')

async function main () {
  // Using the OCR.space default free token
  const response1 = await ocrSpace('http://dl.a9t9.com/ocrbenchmark/eng.png')
  // Using your personal token + a local file
  const response2 = await ocrSpace('/path/to/file.pdf', { apiKey: '<API_KEY_HERE>' })
  // Using your personal token + a base64image + custom language
  const response2 = await ocrSpace('data:image/png;base64,superLongStringHere...', { apiKey: '<API_KEY_HERE>', language: 'ita' })
}
```

### Params
#### Input: string (required)
The input param specifies the input file (see example above). It can be one of the following:
 - a remote `URL address`;
 - a local `file path`;
 - a `base64 image` string.

#### Options: object (not required)
This param is an object with the following keys:
- `apiKey`: your API key for [ocr.space APIs](https://ocr.space/ocrapi).
- `ocrUrl`: a different URL for oce.space APIs, for example when you purchase the PRO plans.
- All other params as documented in the [official website](https://ocr.space/OCRAPI#Response).

### Response
Refer to the [official website](https://ocr.space/OCRAPI#Response).

### Bug or feedback
Please open a new issue.

### Author
- [Davide Violante](https://github.com/DavideViolante)