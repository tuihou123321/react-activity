import React, { Component } from 'react';
import {Router,Route, Lifecycle, RouteContext } from "react-router"
import { Link, NavLink,Redirect,Switch} from 'react-router-dom';
import {createStore} from 'redux'
import {Index} from "./containers/Index/Index"
import "antd-mobile/dist/antd-mobile.min.css"
import './static/css/common.css'
import './static/css/public.css'


class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
        }
    }
    componentWillMount(){
    }
  render() {
    let {history}=this.props;
    return (
        <div>
            <Router history={ history }>
                <Switch>
                    <Route exact path="/" component={Index}></Route>
                </Switch>
            </Router>
        </div>
    );
  }
}

export default App;
