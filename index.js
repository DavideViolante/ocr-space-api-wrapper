const fs = require('fs')
const axios = require('axios')
const FormData = require('form-data')

function detectInput (input) {
  if (input.startsWith('http')) return 'url'
  if (input.startsWith('data:')) return 'base64Image'
  return 'file'
}

/**
 *
 * @param {string} input Input file as url, file path or base64 image (required)
 * @param {object} options Options
 */
async function ocrSpace (input, options = {}) {
  try {
    if (!input || typeof input !== 'string') {
      throw Error('Param input is required and must be typeof string')
    }
    const {
      apiKey, ocrUrl, language, isOverlayRequired,
      filetype, detectOrientation, isCreateSearchablePdf,
      isSearchablePdfHideTextLayer, scale, isTable, OCREngine
    } = options
    const data = new FormData()
    const detectedInput = detectInput(input)
    switch (detectedInput) {
      case 'file':
        data.append('file', fs.createReadStream(input))
        break
      case 'url':
      case 'base64Image':
        data.append(detectedInput, input)
        break
    }
    data.append('language', String(language || 'eng'))
    data.append('isOverlayRequired', String(isOverlayRequired || 'false'))
    if (filetype) {
      data.append('filetype', String(filetype))
    }
    data.append('detectOrientation', String(detectOrientation || 'false'))
    data.append('isCreateSearchablePdf', String(isCreateSearchablePdf || 'false'))
    data.append('isSearchablePdfHideTextLayer', String(isSearchablePdfHideTextLayer || 'false'))
    data.append('scale', String(scale || 'false'))
    data.append('isTable', String(isTable || 'false'))
    data.append('OCREngine', String(OCREngine || '1'))
    const request = {
      method: 'POST',
      url: String(ocrUrl || 'https://api.ocr.space/parse/image'),
      headers: {
        apikey: String(apiKey || 'helloworld'),
        ...data.getHeaders()
      },
      data,
      maxContentLength: Infinity,
      maxBodyLength: Infinity
    }
    const response = await axios(request)
    // console.log(response.data)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

module.exports = ocrSpace
