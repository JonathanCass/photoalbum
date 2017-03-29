import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import aSelect from './aSelect'
import aView from './aView'
import photoView from './photoView'
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
          <Route path='/photoView/' component={photoView} />
        </div>
      </Router>
    )
  }
}

export default App
