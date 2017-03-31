import React from 'react'
import {Link} from 'react-router-dom'
import albums from '../assets/albums/albums.json'
import store from '../store'

const styles = {
	backButton:{
		marginLeft: 20,
		width: 180,
		height: 35,
		position: 'relative',
		top: 50,
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
  /*componentWillMount() {
    store.subscribe(()=>{
      let index = store.getState()
      console.log('store.getState.index' + store.getState().index)
    })
  }*/
  handleBack = (e) => {
    this.props.history.goBack()
  }
  render() {
    console.log('store.getState().title = ' + store.getState().title)
    return (
      <div style={styles.pContainer}>
      	<button style={styles.backButton} onClick={this.handleBack}> Back to Album  {Number(store.getState().index) + 1} {store.getState().title}</button>
      	<h1 style={styles.label}> Photo Label </h1> 
        <img style={styles.photo} src={albums[store.getState().index].photos[this.props.match.params.photo]} alt="No error" />
      </div>
    )
  }
}

export default pView