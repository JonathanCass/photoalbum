import React from 'react'
import albums from '../assets/albums/albums.json'
import store from '../store'

const styles = {
	backButton:{
	marginLeft: 20,
	width: 200,
	height: 40,
	position: 'relative',
	top: 50,
    fontSize: 15
	}
}

class custom extends React.Component {
  /*constructor(props) {
    super(props)
  }*/
  handleBack = (e) => {
  	this.props.history.goBack()
  }
  render() {
    return (
      <div>
        <button style={styles.backButton} onClick={this.handleBack}> Return to Album Selections </button>
      </div>
    )
  }
}

export default custom