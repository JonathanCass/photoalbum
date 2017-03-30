import React from 'react'
import {Link} from 'react-router-dom'
import albums from '../assets/albums/albums.json'

const styles = {
	header:{
		height: 100,
		lineHeight: '92px',
		fontSize: 40,
		background: 'grey',
		margin:0,
		display: 'flex',
		justifyContent: 'center'
	},
	aGrid:{
		display: 'flex',
		flexWrap: 'wrap',
		padding: 20
	},
	previewBox:{
		width: 200,
		height: 300,
		border: "solid grey 2px"
	},	
	preview: {
		width: 196,
		height: 250,
		border: "solid grey 2px",
		borderWidth: ' 0 0 2px 0 '
	},
	label: {
		width: 190,
		height: 50,
		fontSize: 26,
		lineHeight: '48px',
		textAlign: 'center'
	},
	link: {
		display: 'block',
		margin: 30
	}
}

class aSelect extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={styles.asContainer}>
        <h1 style={styles.header}>My Albums</h1>
        	<div style={styles.aGrid}>
        		{albums.map(function(album){
                	return(
        				<Link to={'/aView/' + album.title} style={styles.link} key={'Album ' + album.title}>
        					<div style={styles.previewBox}>
        						<img src={album.photos[1]} style={styles.preview}/>
        						<div style={styles.label}> {album.title} </div>
        					</div>
        				</Link>
        		    )
                })}
        	</div>
      </div>
    )
  }
}

export default aSelect