import React from 'react'
import {Link} from 'react-router-dom'
import albums from '../assets/albums/albums.json'
import store from '../store'

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
    this.state = {index : 0}
  }
  componentWillMount() {
    store.subscribe(()=>{
      let index = store.getState()
      console.log('index # = ' + index.index)
      this.setState({
        index: index.index
      })
      console.log('this.state.index ' + this.state.index)
    })
  } 
  render() {
    return (
      <div style={styles.pContainer}>
      	<button style={styles.backButton}> Back Button </button>
      	<h1 style={styles.label}> Photo Label </h1> 
        <img style={styles.photo} src={albums[this.state.index].photos[0]}/>
      </div>
    )
  }
}

export default pView