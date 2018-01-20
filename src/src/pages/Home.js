import React, { Component } from "react"
import Nav from "./../components/Nav"
import { Link } from 'react-router-dom'

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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                deserunt neque tempore recusandae animi soluta quasi? Asperiores
                rem dolore eaque vel, porro, soluta unde debitis aliquam
                laboriosam. Repellat explicabo, maiores!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                optio neque consectetur consequatur magni in nisi, natus beatae
                quidem quam odit commodi ducimus totam eum, alias, adipisci
                nesciunt voluptate. Voluptatum.
              </p>
              <p>
                <a className="btn btn-primary btn-lg" href="#">
                  Call to Action &raquo;
                </a>
              </p>
            </div>
            <div className="col-sm-4">
              {/* <h2 className="mt-4">Contact Us</h2> */}
              {/* <address>
            <strong>Start Bootstrap</strong>
            <br>3481 Melrose Place
            <br>Beverly Hills, CA 90210
            <br>
          </address> */}
              {/* <address>
            <abbr title="Phone">P:</abbr>
            (123) 456-7890
            <br>
            <abbr title="Email">E:</abbr>
            <a href="mailto:#">name@example.com</a>
          </address> */}
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4 my-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="http://placehold.it/300x200"
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente esse necessitatibus neque sequi doloribus.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 my-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="http://placehold.it/300x200"
                  alt=""
                />

                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente esse necessitatibus neque sequi doloribus totam ut
                    praesentium aut.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 my-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="http://placehold.it/300x200"
                  alt=""
                />
                <Link to="/petition">
                    <div className="card-body">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Sapiente esse necessitatibus neque.
                        </p>
                    </div>
                </Link>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">
                    Find Out More!
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
