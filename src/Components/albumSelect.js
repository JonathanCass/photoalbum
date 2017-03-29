import React from 'react'
import {Link} from 'react-router-dom'

const styles = {

}

class albumSelect extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={styles.albumContainer}>
      	<h1> My Albums </h1>
        	<div style={styles.albumGrid}>
        		<Link to ={'./albumView' + album.id} key={'album' + album.id}> </Link>
        	</div>
      </div>
    )
  }
}

export default albumSelect