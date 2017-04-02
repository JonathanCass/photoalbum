import React from 'react'
import albums from '../assets/albums/albums.json'
import store from '../store'
import {Link} from 'react-router-dom'

const styles = {
  pContainer: {
    height: 1000
  },
	backButton:{
		marginLeft: 20,
		width: 200,
		height: 40,
		position: 'relative',
		top: 50,
    fontSize: 15
	},
	label: {
		textAlign: 'center',
    fontSize: 60,
    color: 'white',
    webkitTextStroke: "2px black",
    fontFamily: 'Alfa Slab One',
    margin: 0
	},
	photo: {
		height: 604,
		width: 604,
		position: 'center',
		margin: 'auto',
		display: 'block',
	},
  npBar: {
    display:'flex',
    justifyContent:'space-between'
  },
  navButton: {
    width: 160,
    height: 35,
    margin: 30,
    fontSize: 14
  },
  hide:{
    display: 'none'
  }
}

class pView extends React.Component {
  constructor(props) {
    super(props)
    this.state = { storedTitle : '' }  
  } 
  componentWillMount() {
    albums.forEach(album=>{
      if (Number(store.getState().index) === Number(album.index)){
        this.setState({
          storedTitle: album.title
        })
      }
    })
  }
  handleBack = (e) => {
    albums.forEach(album=>{
      if (Number(store.getState().index) === Number(album.index)){
        this.props.history.push('../aView/' + album.title)
      }
    })
  }
  render() {
    return (
      <div style={styles.pContainer} className="pContainer">
      	<button style={styles.backButton} onClick={this.handleBack}> Back to {this.state.storedTitle} Album</button>
      	<h1 style={styles.label}> Poster {Number(this.props.match.params.photo) + 1} </h1> 
        <img style={styles.photo} src={albums[store.getState().index].photos[this.props.match.params.photo]} alt="No error" />
        <div style={styles.npBar}>
          <Link to={'/pView/' + ( Number(this.props.match.params.photo) - 1 ) } ><button style={Number(this.props.match.params.photo) === 0 ? styles.hide : styles.navButton}>Previous Picture</button></Link>
          <Link to={'/pView/' + ( Number(this.props.match.params.photo) + 1 ) } ><button style={Number(this.props.match.params.photo) === Number(albums[store.getState().index].photos.length) - 1 ? styles.hide : styles.navButton}>Next Picture</button></Link>
        </div>
      </div> 
    )
  }
}

export default pView
