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
		margin: 30
	},	
	preview: {
		width: 200,
		height: 250,
		background: 'black'
	},
	label: {
		width: 200,
		height: 50,
		fontSize: 26,
		background: 'grey',
		lineHeight: '48px',
		textAlign: 'center'
	}
}

class aSelect extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
  	console.log(albums)
    return (
      <div style={styles.asContainer}>
        <h1 style={styles.header}>My Albums</h1>
        	<div style={styles.aGrid}>
        		{albums.map(function(album){
                	return(
        				<Link to={'/aView' + album.title}>
        					<div style={styles.previewBox}>
        						<img src={album.photos[1]} alt='Album Preview' style={styles.preview}/>
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