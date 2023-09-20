const libre = require('libreoffice-convert')
libre.convertAsync = require('util').promisify(libre.convert)
const fs = require('fs')

async function convertDocxToHtml (docx, folderName, fileName) {
  // Now convert the docx base64 to docx and store
  const docxBuf = fs.readFileSync('first resume.docx')
  const html = await libre.convertAsync(docxBuf, '.html', 'HTML:EmbedImages')
  await fs.writeFileSync('abcd.html', html)
}

convertDocxToHtml()
