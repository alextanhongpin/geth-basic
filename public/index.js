(function (Web3) {
  'use strict'

  const ERC20_CONTRACT = ''

  const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))

  if (web3.isConnected()) {
    console.log('connected')
  }
  // const balance = web3.eth.getBalance(ERC20_CONTRACT)
  // console.log('balance:', balance)

  const block = web3.eth.getBlock('earliest') // earliest, latest, pending
  console.log('blockNumber:', block, web3.eth.blockNumber)
  console.log('syncing:', web3.eth.syncing)

  // const transaction = web3.eth.getTransaction('TxHash')
  // console.log('transaction:', transaction)

  // checkTransactionCount allows you to check for blocks in a ranges
  function checkTransactionCount (startBlockNumber, endBlockNumber) {
    console.log('Searching for non-zero transaction counts between blocks ' + startBlockNumber + ' and ' + endBlockNumber)

    for (let i = startBlockNumber; i <= endBlockNumber; i++) {
      const block = web3.eth.getBlock(i)
      if (block && block.transactions && block.transactions.length) {
        console.log('Block #' + i + ' has ' + block.transactions.length + ' transactions')
      } else {
        console.log('none', i)
      }
    }
  }
})(window.Web3)
