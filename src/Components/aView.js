import React from 'react'
import {Link} from 'react-router-dom'
import albums from '../assets/albums/albums.json'
import {setIndex} from '../api/indexReducer'
import store from '../store'

const styles = {
	navBar: {
		float: 'left',
		width: 200,
		height: 1420,
		background: '#B9090B'
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
		background: '#429441',
		lineHeight: '38px',
		textAlign: 'center',
		border: "solid black 2px",
		fontSize: 22
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
		textAlign: 'center',
		fontSize: 26,
		color: 'white'
	},
	header: {
		background: '#B9090B',
		textAlign: 'center',
		margin: 0,
		paddingTop: 40,
		paddingBottom: 20,
		fontSize: 60,
		fontFamily: 'Alfa Slab One',
		color: 'white',
		webkitTextStroke: "2px black",
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
      <div className="aView">
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