import React from 'react'
import {Link} from 'react-router-dom'

const styles = {
	backButton:{
		marginLeft: 20,
		width: 200,
		height: 25,
		position: 'relative',
		top: 50
	},
	label:{
		textAlign: 'center',
	},
	photo:{
		height: 600,
		width: 600,
		position: 'center',
		margin: 'auto',
		display: 'block'
	}

}

class pView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={styles.pContainer}>
      	<button style={styles.backButton}> Back Button </button>
      	<h1 style={styles.label}> Photo Label </h1> 
        <img style={styles.photo} src="" alt="1" />
      </div>
    )
  }
}

export default pView