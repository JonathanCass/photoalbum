import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import aSelect from './aSelect'
import aView from './aView'
import pView from './pView'
import {Link} from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path='/' component={aSelect} />
          <Route path='/aView/' component={aView} />
          <Route path='/pView/' component={pView} />
        </div>
      </Router>
    )
  }
}

export default App
