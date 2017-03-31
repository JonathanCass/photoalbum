import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import aSelect from './aSelect'
import aView from './aView'
import pView from './pView'
import custom from './custom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path='/' component={aSelect} />
          <Route path='/aView/:album' component={aView} />
          <Route path='/pView/:photo' component={pView} />
          <Route path='/custom' component={custom} />
        </div>
      </Router>
    )
  }
}

export default App
