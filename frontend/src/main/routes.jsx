import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import About from '../about/about'
import Todo from '../todo/todo'
import Shortcut from '../shortcut/shortcut'

export default props => (
    //hashHistory: estratégia de histórico
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        <Route path='/shortcut' component={Shortcut} />
        {/* para url's inválidas ele redireciona para todos */}
        <Redirect from='*' to='/todos'/>
    </Router>
)