import React, { Component } from "react";
import Nav from "./../components/Nav";

import Petition from '../../build/contracts/Petition.json'
import getWeb3 from '../utils/getWeb3'

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
              <h1 className="mt-4">Sign Petition</h1>

              <p className="lead">
                by
                <a href="#">Rachel Black</a>
              </p>

              <hr />

              <p>Posted on January 1, 2018 at 12:00 PM</p>

              <hr />

              <img
                className="img-fluid rounded"
                src="http://placehold.it/900x300"
                alt=""
              />

              <hr />

              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe
                quibusdam sit excepturi nam quia corporis eligendi eos magni
                recusandae laborum minus inventore?
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
                tenetur natus doloremque laborum quos iste ipsum rerum obcaecati
                impedit odit illo dolorum ab tempora nihil dicta earum fugiat.
                Temporibus, voluptatibus.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
                doloribus, dolorem iusto blanditiis unde eius illum consequuntur
                neque dicta incidunt ullam ea hic porro optio ratione repellat
                perspiciatis. Enim, iure!
              </p>

              <blockquote className="blockquote">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                  Someone famous in
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
                nostrum, aliquid, animi, ut quas placeat totam sunt tempora
                commodi nihil ullam alias modi dicta saepe minima ab quo
                voluptatem obcaecati?
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
                dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore
                quidem voluptates cupiditate voluptas illo saepe quaerat numquam
                recusandae? Qui, necessitatibus, est!
              </p>

              <div className="card my-4">
                <h5 className="card-header">Leave a Comment:</h5>
                <div className="card-body">
                  <form>
                  </form>
                </div>
              </div>

              <div className="media mb-4">
                <img
                  className="d-flex mr-3 rounded-circle"
                  src="http://placehold.it/50x50"
                  alt=""
                />
                <div className="media-body">
                  <h5 className="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </div>
              </div>

              <div className="media mb-4">
                <img
                  className="d-flex mr-3 rounded-circle"
                  src="http://placehold.it/50x50"
                  alt=""
                />
                <div className="media-body">
                  <h5 className="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                  <div className="media mt-4">
                    <img
                      className="d-flex mr-3 rounded-circle"
                      src="http://placehold.it/50x50"
                      alt=""
                    />
                    <div className="media-body">
                      <h5 className="mt-0">Commenter Name</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </div>
                  <div className="media mt-4">
                    <img
                      className="d-flex mr-3 rounded-circle"
                      src="http://placehold.it/50x50"
                      alt=""
                    />
                    <div className="media-body">
                      <h5 className="mt-0">Commenter Name</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card my-4">
                <h5 className="card-header">Sign now!</h5>
                <div className="card-body">
                    
                <span data-yoti-type="inline" data-yoti-scenario-id="17afa53a-dc34-481a-b3e1-f6fe33afbe69" data-yoti-application-id="cac0c797-c49f-40a6-8a00-d3e1dfe679e0" >
        Sign petition
    </span>
                </div>
              </div>

              <div className="card my-4">
                <h5 className="card-header">Categories</h5>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <a href="#">Web Design</a>
                        </li>
                        <li>
                          <a href="#">HTML</a>
                        </li>
                        <li>
                          <a href="#">Freebies</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <a href="#">JavaScript</a>
                        </li>
                        <li>
                          <a href="#">CSS</a>
                        </li>
                        <li>
                          <a href="#">Tutorials</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card my-4">
                <h5 className="card-header">Side Widget</h5>
                <div className="card-body">
                  You can put anything you want inside of these side widgets.
                  They are easy to use, and feature the new Bootstrap 4 card
                  containers!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
