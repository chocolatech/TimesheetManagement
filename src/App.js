import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'
import Home from './components/home.component'
import NotFound from './components/404.component'
import Container from './components/container.component';
import Teams from './components/teams.component';
import Clouds from './components/clouds.component';
import Timesheets from './components/timesheets.component';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='teams' component={Teams}></Route>
          <Route path='clouds' component={Clouds}></Route>
          <Route path='timesheets' component={Timesheets}></Route>

          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

export default App