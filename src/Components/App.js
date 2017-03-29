import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import albumSelect from './albumSelect'
import albumView from './albumView'
import photoView from './photoView'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path='./' component={albumSelect} />
          <Route path='./albumView' component={albumView} />
          <Route path='./photoView' component={photoView} />
        </div>
      </Router>
    )
  }
}

export default App
