import React from 'react'
import {Link} from 'react-router-dom'

const styles = {

}

class aSelect extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>ALBUM SELECT PAGE</p>
        <Link to ={'/aView'}> Link to Album View </Link>
      </div>
    )
  }
}

export default aSelect