import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import App from './App'
import PetitionComponent from './pages/petition'

export default class Router extends Component {
    render(){
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/petition" component={PetitionComponent} />
                    {/* <Route path="/success" component={PetitionSuccess} /> */}
                </Switch>
            </main>
        )
    }
}

