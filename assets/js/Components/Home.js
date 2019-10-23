import React, { Component } from 'react';
import NavBar from "./NavBar";
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import PublicResources from "./PublicResources";

class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Switch>
                    <Route path={"/"} component={PublicResources} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(Home);