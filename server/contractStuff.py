# A script for testing out web3.py stuff

from web3 import Web3, HTTPProvider
web3 = Web3(HTTPProvider('http://localhost:9545'))

# Calling the below shows we are able to query the local node
print(web3.eth.blockNumber)