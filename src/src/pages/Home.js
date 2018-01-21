import React, { Component } from "react"
import Nav from "./../components/Nav"
import { Link } from 'react-router-dom'
import colors from './../utils/colors'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <header className="business-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="display-3 text-center text-white mt-4">
                    A voice for the people.
                </h1>
              </div>
            </div>
          </div>
        </header>

        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <h2 className="mt-4">What We Do</h2>
              <p>
                We are securing petitions for the 21st century, no more bots and untrust worthy polls!
              </p>
            </div>
            <div className="col-sm-4">
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4 my-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="http://www.islamicinvitationturkey.com/wp-content/uploads/2017/04/ad_189284638.jpg"
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title">Stop the war!</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente esse necessitatibus neque sequi doloribus.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary"  style={{backgroundColor: colors.green, borderColor: colors.green}}>
                    Sign
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 my-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://news.nationalgeographic.com/content/dam/news/2016/09/08/humpback-whales/01humpbackwhales.jpg"
                  alt=""
                />

                <div className="card-body">
                  <h4 className="card-title">Save the whales!</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente esse necessitatibus neque sequi doloribus totam ut
                    praesentium aut.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary"  style={{backgroundColor: colors.green, borderColor: colors.green}}>
                    Sign
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 my-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="http://img2.thejournal.ie/inline/1465921/original?width=630&version=1465921"
                  alt=""
                  style={{minHeight:'191px'}}
                />
                <Link to="/petition">
                    <div className="card-body" style={{color:'black'}}>
                        <h4 className="card-title">Down with this sort of thing!</h4>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Sapiente esse necessitatibus neque.
                        </p>
                    </div>
                </Link>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary" style={{backgroundColor: colors.green, borderColor: colors.green}}>
                    Sign
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
