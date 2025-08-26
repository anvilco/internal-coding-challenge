// yarn swc-node scripts/get-pdfs.js --input data/templates.json

const lodash = require('lodash')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const fs = require('fs')
const path = require('path')
const Anvil = require('@anvilco/anvil')
const { run } = require('./env')

const argv = yargs(hideBin(process.argv))
  .option('input', {
    alias: 'i',
    type: 'string',
    description: 'Path to the input JSON file',
    demandOption: true,
  })
  .help().argv

const apiKey = process.env.SCRIPT_API_KEY

async function main() {
  const anvilClient = new Anvil({ apiKey })

  try {
    const inputPath = path.resolve(argv.input)

    if (!fs.existsSync(inputPath)) {
      throw new Error(`Input file not found: ${inputPath}`)
    }

    const data = JSON.parse(fs.readFileSync(inputPath, 'utf-8'))

    console.log(`Processing ${data.length} templates from ${argv.input}`)

    // Process the data here
    // TODO: Add your PDF processing logic
    
  } catch (error) {
    console.error('Error:', error.message)
    process.exit(1)
  }
}

run(main)
