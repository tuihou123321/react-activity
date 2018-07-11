import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./utils/rem"
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import initReactFastclick from 'react-fastclick';
import history from "./utils/history"
initReactFastclick();


ReactDOM.render(
   <App history={history}/>
, document.getElementById('root'));
registerServiceWorker();
