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