import React from 'react'
import {Link} from 'react-router-dom'

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

class aSelect extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={styles.asContainer}>
        <h1 style={styles.header}>My Albums</h1>
        	<div style={styles.aGrid}>
        		<Link to={'/aView'}>
        			<div style={styles.previewBox}>
        				<img src='' alt='Album Preview' style={styles.preview}/>
        				<div style={styles.label}> Album Label </div>
        			</div>
        		</Link>
        	</div>
      </div>
    )
  }
}

export default aSelect