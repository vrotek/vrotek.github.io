import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Games from '../pages/games/Games'

class Routes extends Component {

    state = {
        
    }

    render(){  
        return (
                <Switch>
                    <Route path="/about" component={About}></Route>
                    <Route path="/games" component={Games}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Redirect from="/" to="/home"></Redirect>
                </Switch>
        )
    }
}
export default Routes