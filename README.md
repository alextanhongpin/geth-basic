## Installing Ethereum

```bash
$ brew tap ethereum/ethereum
$ brew install ethereum
$ brew update && brew reinstall ethereum
```

## Validate Version

```bash
$ geth version
```

Output:

```bash
Geth
Version: 1.8.4-stable
Architecture: amd64
Protocol Versions: [63 62]
Network Id: 1
Go Version: go1.10.1
Operating System: darwin
GOPATH=/Users/alextan/go
GOROOT=/usr/local/opt/go/libexec
```

## Installing web3

```bash
# Doesn't work
$ yarn add web3 

# Works
$ yarn add web3@^0.19.0
```

## Main Network

Starting the geth network:

```
$ geth --datadir "./tmp" \
--syncmode "fast" \
--cache 1024 \
--rpc \
--rpcaddr="localhost" \
--rpcport="8545" \
--rpccorsdomain="http://localhost:3000" \
--networkid 1 # This refers to the main network
```

The `--rpccorsdomain` points to our local nodejs server that is serving the web3 script on port `3000`.


## Test Network

To connect to the test network, just specify this when running `geth`:

```bash
--testnet    Ropsten network: pre-configured proof-of-work test network
--rinkeby    Rinkeby network: pre-configured proof-of-authority test network
```

## Run Client

```bash
$ node server.js
```

## Useful Commands

```bash
# Deletes/removes your locally synced blockchain data
$ geth removedb 

# Deletes/removes your private blockchain test net
$ geth removedb --datadir /path/to/blockchain

# Synchronize the blockchain more quickly
$ geth --fast --cache=1024
```