import React, { Component } from "react";
import Nav from "./../components/Nav";

import Petition from '../../build/contracts/Petition.json'
import getWeb3 from '../utils/getWeb3'
// import { colors } from './../utils/colors'

export default class PetitionComponent extends Component {

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
      return this.checkIfVotedAlready()
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
      <div className="container">
        <Nav />

        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="mt-4"> Down with this sort of thing!</h1>

              <p className="lead">
                by
                <a href="#">Rachel Black</a>
              </p>

              <hr />

              <p>Posted on January 1, 2018 at 12:00 PM</p>

              <hr />

              <img
                className="img-fluid rounded"
                src="https://suntimesmedia.files.wordpress.com/2018/01/march-012118-151.jpg?w=763"
                alt=""
              />

              <hr />

              <p className="lead">
                We need your signature to help change the world. The government needs to be stopped!
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
                tenetur natus doloremque laborum quos iste ipsum rerum obcaecati
                impedit odit illo dolorum ab tempora nihil dicta earum fugiat.
                Temporibus, voluptatibus.
              </p>
            </div>

            <div className="col-md-4">
              <div className="card my-4">
                <h5 className="card-header">Sign now!</h5>
                <div className="card-body">
                    We need your signature to make this happen!
                    <span style={{display: 'inline-block', paddingTop: '28px 0', fontWeight: '600'}}> Number of votes so far: {this.state.totalVotes} </span>
                    <span data-yoti-type="inline" data-yoti-scenario-id="17afa53a-dc34-481a-b3e1-f6fe33afbe69" data-yoti-application-id="cac0c797-c49f-40a6-8a00-d3e1dfe679e0" >
                        Sign petition
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
