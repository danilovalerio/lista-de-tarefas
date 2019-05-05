import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import About from '../about/about'
import Todo from '../todo/todo';

export default props => (
    //hashHistory: estratégia de histórico
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        {/* para url's inválidas ele redireciona para todos */}
        <Redirect from='*' to='/todos'/>
    </Router>
)