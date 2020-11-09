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
    const {
      apiKey,
      ocrUrl,
      language,
      isOverlayRequired,
      filetype,
      detectOrientation,
      isCreateSearchablePdf,
      isSearchablePdfHideTextLayer,
      scale,
      isTable,
      OCREngine
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
    data.append('language', language || 'eng')
    data.append('isOverlayRequired', isOverlayRequired || 'false')
    if (filetype) {
      data.append('filetype', filetype)
    }
    data.append('detectOrientation', detectOrientation || 'false')
    data.append('isCreateSearchablePdf', isCreateSearchablePdf || 'false')
    data.append('isSearchablePdfHideTextLayer', isSearchablePdfHideTextLayer || 'false')
    data.append('scale', scale || 'false')
    data.append('isTable', isTable || 'false')
    data.append('OCREngine', OCREngine || '1')
    const request = {
      method: 'POST',
      url: ocrUrl || 'https://api.ocr.space/parse/image',
      headers: {
        apikey: apiKey || 'helloworld',
        ...data.getHeaders()
      },
      data
    }
    const response = await axios(request)
    // console.log(response.data)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

module.exports = ocrSpace
