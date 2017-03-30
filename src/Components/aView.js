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
		textAlign: 'center'
	},
	pGrid:{
		display: 'flex',
		flexWrap: 'wrap',
		padding: 40
	},
	previewBox:{
		width: 200,
		height: 300
	},	
	preview: {
		width: 200,
		height: 250
	},
	label: {
		width: 200,
		height: 50,
		background: 'grey',
		lineHeight: '48px',
		textAlign: 'center'
	}
}

class aView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      	<div style={styles.navBar}>
      		<ul style={styles.navList}>
      			<li style={styles.navEntry}> Album 1 </li>
      			<li style={styles.navEntry}> Album 2 </li>
      			<li style={styles.navEntry}> Album 3 </li>
      			<li style={styles.navEntry}> Album 4 </li>
      			<li style={styles.navEntry}> Album 5 </li>
      			<li style={styles.navEntry}> Album 6 </li>
      		</ul>
      	</div> 
        <div style={styles.pGrid}>
        		<Link to={'/pView'}>
        			<div style={styles.previewBox}>
        				<img src='https://unsplash.com/photos/1fyccRaS_u4' alt='Photo Preview' style={styles.preview}/>
        				<div style={styles.label}> Photo Label </div>
        			</div>
        		</Link>
        	</div>
      </div>
    )
  }
}

export default aView