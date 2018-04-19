const express = require('express')
const path = require('path')

const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))

if (web3.isConnected()) {
  console.log('connected')
}
const block = web3.eth.getBlock('earliest') // earliest, latest, pending
console.log('blockNumber:', block, web3.eth.blockNumber)
console.log('syncing:', web3.eth.syncing)

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3000, () => {
  console.log('listening to port *:3000. press ctrl + c to cancel.')
})
