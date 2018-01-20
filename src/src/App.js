import React, { Component } from 'react'
import Petition from '../build/contracts/Petition.json'
import getWeb3 from './utils/getWeb3'
import Home from './pages/Home'

import './css/front-page.css'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      petitionInstance: null,
      petitionDescription: null,
      hasVoted: null,
      totalVotes: 0,
      web3: null
    }
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })

      // Instantiate contract once web3 provided.
      this.instantiateContract() // TODO - In future we should not instantiate the contract here!!!
    })
    .then(() => {
      return checkIfVotedAlready()
    })
    .then(result => {
      // TODO - If we have voted already, make sure the user cannot vote!!!
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }
  
  checkIfVotedAlready() {
    let pInstance = this.state.petitionInstance

    this.state.web3.eth.getAccounts((error, accounts) => {
      return pInstance.hasVoted.call(accounts[0])
    }).then((result) => {
      return this.setState({ hasVoted: result.c[0] })
    })
  }

  placeVote() {
    let pInstance = this.state.petitionInstance

    this.state.web3.eth.getAccounts((error, accounts) => {
      return pInstance.vote({from: accounts[0]})
    }).then(() => {
      // TODO - we should wait until the vote has been registered by the blockchain - use solidity events for this!
    })
  }

  instantiateContract() {
    const contract = require('truffle-contract')
    const petition = contract(Petition)
    petition.setProvider(this.state.web3.currentProvider)

    petition.deployed().then((instance) => {
      return this.setState({ petitionInstance: instance })
    })
  }

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    )
  }
}

export default App
