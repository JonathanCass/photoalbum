import React from 'react'
import {Link} from 'react-router-dom'

const styles = {

}

class aView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>ALBUM VIEW PAGE</p>
        <Link to ={'/photoView'}> Link to Photo View </Link>
      </div>
    )
  }
}

export default aView