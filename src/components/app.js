import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import {Route} from 'react-router-dom';
// import '../assets/css/app.css';
// import logo from '../assets/images/logo.svg';
import Home from './home';
import Chat from './chat'

const App = () => (
    <div>
        <div className="container">
            <Route exact path = "/" component={Home}/>
            <Route path = "/chat" component = {Chat}/>
        </div>
    </div>
);

export default App;
