# OCR Space Node.js API wrapper
 [![Donate](https://img.shields.io/badge/paypal-donate-179BD7.svg)](https://www.paypal.me/dviolante)
 
Node.js wrapper for [ocr.space APIs](https://ocr.space/ocrapi), a service for executing OCR (Optical Character Recognition) to images and PDFs.

## Install
`npm i ocr-space-api-wrapper`

## Usage
```js
const ocrSpace = require('ocr-space-api-wrapper')

async function main () {
  try {
    // Using the OCR.space default free token + remote file
    const res1 = await ocrSpace('http://dl.a9t9.com/ocrbenchmark/eng.png')

    // Using your personal token + local file
    const res2 = await ocrSpace('/path/to/file.pdf', { apiKey: '<API_KEY_HERE>' })
    
    // Using your personal token + base64 image + custom language
    const res3 = await ocrSpace('data:image/png;base64...', { apiKey: '<API_KEY_HERE>', language: 'ita' })
  } catch (error) {
    console.log(error)
  }
}
```

## Params
### `input` string (required)
The input param specifies the input file (see examples above). It can be one of the following:
 - a remote `URL address` such as `http://example.com/image.jpg`;
 - a local `file path` such as `/path/to/file.pdf`;
 - a `base64 image` string such as `data:image/png;base64...`.

### `options` object
This param is an object with the following keys:
- `apiKey`: your API key for [ocr.space APIs](https://ocr.space/ocrapi). 
- `ocrUrl`: a different URL for oce.space APIs, for example when you purchase the PRO plan.
- All other params as documented in the [official website](https://ocr.space/OCRAPI#PostParameters).

## Response
Refer to the [official website](https://ocr.space/OCRAPI#Response).

## Bug or feedback
Please open a new issue.

## Author
- [Davide Violante](https://github.com/DavideViolante)
