import React from 'react'
import albums from '../assets/albums/albums.json'
import store from '../store'

const styles = {
	backButton:{
		margin: 40,
		width: 200,
		height: 40,
    	fontSize: 15
	},
	input: {
    	fontSize: 20,
    	height: 50,
    	width: 400,
    	margin: 40,
    	paddingLeft: 20
  	},
  	display: {
  		fontSize: 20,
    	height: 50,
    	width: 400,
    	margin: 40,
    	border: "solid black 2px",
    	display: 'inline-block',
    	lineHeight: '48px',
    	paddingLeft: 20
  	}
}

class custom extends React.Component {
  constructor(props) {
    super(props)
    this.state = { title : '', url : ''}
  }
  handleBack = (e) => {
  	this.props.history.goBack()
  }
  handleTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  handleUrl = (e) => {
    this.setState({
      url: e.target.value
    })
  }
  render() {
    return (
      <div>
        <button style={styles.backButton} onClick={this.handleBack}> Return to Album Selections </button>
        <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleTitle} value={this.state.title} style={styles.input} placeholder="Enter title of Album to push photo onto." />
        	<input type="text" onChange={this.handleUrl} value={this.state.url} style={styles.input} placeholder="Enter Url of Photo." />
        </form>
        <div style={styles.display} >Destination Album is {this.state.title}.</div><div style={styles.display} >Photo link is {this.state.url} .</div>
      </div>
    )
  }
}

export default custom