import React from 'react'
import albums from '../assets/albums/albums.json'
import store from '../store'
import {Link} from 'react-router-dom'

const styles = {
	backButton:{
		marginLeft: 20,
		width: 180,
		height: 35,
		position: 'relative',
		top: 50,
    fontSize: 16
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
	},
  npBar:{
    display:'flex',
    justifyContent:'space-between'
  },
  navButton:{
    width: 160,
    height: 35,
    margin: 30,
    fontSize: 14
  }
}

class pView extends React.Component {
  /*constructor(props) {
    super(props)
  }
  componentWillMount() {
    store.subscribe(()=>{
      let index = store.getState()
      console.log('store.getState.index' + store.getState().index)
    })
  }*/
  handleBack = (e) => {
    this.props.history.goBack()
  }
  render() {
    return (
      <div style={styles.pContainer}>
      	<button style={styles.backButton} onClick={this.handleBack}> Back to Album  {Number(store.getState().index) + 1} {store.getState().title}</button>
      	<h1 style={styles.label}> Photo Label </h1> 
        <img style={styles.photo} src={albums[store.getState().index].photos[this.props.match.params.photo]} alt="No error" />
        <div style={styles.npBar}>
          <Link to={'/pView/' + ( Number(this.props.match.params.photo) - 1 ) } ><button style={styles.navButton}>Previous Picture</button></Link>
          <Link to={'/pView/' + ( Number(this.props.match.params.photo) + 1 ) } ><button style={styles.navButton}>Next Picture</button></Link>
        </div>
      </div>
      
    )
  }
}

export default pView