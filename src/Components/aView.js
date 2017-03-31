import React from 'react'
import {Link} from 'react-router-dom'
import albums from '../assets/albums/albums.json'
import {setIndex} from '../api/indexReducer'
import store from '../store'

const styles = {
	navBar: {
		float: 'left',
		width: 200,
		background: 'grey',
		height: 1420
	},
	navList: {
		listStyle: 'none',
		paddingTop: 100,
		paddingLeft: 0,
	},
	navEntry: {
		width: 180,
		height: 40,
		margin: '0 0 20px 10px',
		background: 'green',
		lineHeight: '38px',
		textAlign: 'center',
		border: "solid black 2px",
	},
	custom:{
		width: 180,
		height: 40,
		margin: '40px 0 40px 10px',
		background: 'white',
		lineHeight: '38px',
		textAlign: 'center',
		border: "solid black 2px",
	},
	pGrid:{
		display: 'flex',
		flexWrap: 'wrap',
		padding: 40,
		paddingRight: 0
	},
	previewBox:{
		width: 200,
		height: 300,
	},
	link:{
		marginRight: 20,
		marginBottom: 20
	},
	preview: {
		width: 200,
		height: 250,
		border: "solid grey 2px"
	},
	label: {
		width: 200,
		height: 50,
		border: "solid grey 2px",
		lineHeight: '48px',
		textAlign: 'center'
	},
	header: {
		background: 'transparent',
		textAlign: 'center',
		margin: 0,
		paddingTop: 40,
		fontSize: 52
	}
}

class aView extends React.Component {
  /*constructor(props) {
    super(props)
  }*/
  indexChange(){
  	albums.forEach(album=>{
  		if (album.title === this.props.match.params.album){
  			setIndex(album.index)
  		}
  	})
  }
  render() {
  	this.indexChange()
    return (
      <div>
      	<div style={styles.navBar}>
      		<ul style={styles.navList}>
      			<Link to={'/'}><li style={styles.custom}>To Album Select Page</li></Link>	
      			{albums.map(function(album){
                	return(
                		<Link to={'/aView/' + album.title} key={'nav' + album.title} >
      						<li style={styles.navEntry}> {album.title} </li>
      		   			</Link>
      		   		)
                })}
                <Link to={'/custom/'}><li style={styles.custom}>Add Your Own Images</li></Link>
      		</ul>
      	</div>
      	<h1 style={styles.header}> {this.props.match.params.album} Album </h1> 
        <div style={styles.pGrid}>
        		{albums[store.getState().index].photos.map(function(photo, i){
                	return(
		        		<Link to={'/pView/' + i} style={styles.link} key={'preview' + i}>
		        			<div style={styles.previewBox}>
		        				<img src={photo} style={styles.preview} alt="No Error"/>
		        				<div style={styles.label}> Poster {i + 1} </div>
		        			</div>
		        		</Link>
        				)
                })}
        	</div> 
      </div>
    )
  }
}

export default aView