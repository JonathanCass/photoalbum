import React from 'react'
import {Link} from 'react-router-dom'
import albums from '../assets/albums/albums.json'

const styles = {
	navBar: {
		float: 'left',
		width: 200,
		background: 'grey',
		height: 1000
	},
	navList: {
		listStyle: 'none',
		paddingTop: 100,
		paddingLeft: 0
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
	}
}

class aView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
  	//console.log(this.props.match.params.album)
  	var index = 0
  	albums.forEach(album=>{
  		if (album.title === this.props.match.params.album){
  			index = album.index
  		}
  	})
  	console.log(index)
    return (
      <div>
      	<div style={styles.navBar}>
      		<ul style={styles.navList}>
      			{albums.map(function(album){
                	return(
      					<li style={styles.navEntry}> {album.title} </li>
      		   		)
                })}
      		</ul>
      	</div> 
        <div style={styles.pGrid}>
        		{albums[index].photos.map(function(photo){   //need to get album index from page
                	return(
		        		<Link to={'/pView/' + 'picture id'} style={styles.link} >
		        			<div style={styles.previewBox}>
		        				<img src={photo} style={styles.preview}/>
		        				<div style={styles.label}> Photo Label </div>
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