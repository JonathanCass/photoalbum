import React from 'react'
import albums from '../assets/albums/albums.json'

const styles = {
  cContainer: {
    background: '#A40406'
  },
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
    paddingLeft: 20,
    border: "solid black 2px",
  },
  display: {
  	fontSize: 20,
    height: 50,
    width: 400,
    margin: 40,
    border: "solid black 2px",
    display: 'inline-block',
    lineHeight: '48px',
    paddingLeft: 20,
    whiteSpace: 'nowrap',
  	overflow: 'hidden',
  	textOverflow: 'ellipsis',
    background: 'white'
  },
  testingHelper: {
  	fontSize: 22,
    height: 50,
    width: 800,
    margin: 40,
    lineHeight: '48px',
    paddingLeft: 100,
    marginBottom: 0
  },
  submit: {
  	fontSize: 20,
  	heigh: 50,
  	width: 200,
  	border: "solid black 2px",
    display: 'block',
    lineHeight: '48px',
    paddingLeft: 0,
    background: '#429441',
    margin: '10px 0 0 380px '
  }
}

class custom extends React.Component {
  constructor(props) {
    super(props)
    this.state = { title : '', url : '', targetIndex : albums.length}
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
  handleExampleTitle = (e) => {
    this.setState({
      title : 'Kaiju'
    })
  }
  handleExampleUrl = (e) => {
    this.setState({
      url: "https://s-media-cache-ak0.pinimg.com/originals/5b/22/db/5b22db9e46073b6a9b633c181d8f1c82.jpg"
    })
  }
  handleSubmit = (e) => {
  	var notAdded = true
    albums.forEach(( album , i ) =>{
  		if (album.title === this.state.title) {
  			albums[i].photos.push(this.state.url)
  			notAdded = false
  		}
  	})
    if(notAdded){
    	albums.push({ title: this.state.title, index: albums.length, photos: [this.state.url] })
    }
    this.setState({
        title: '',
        url: ''
    })
  }
  render() {
    return (
      <div style={styles.cContainer} >
        <button style={styles.backButton} onClick={this.handleBack}> Return to Genre Selection </button>
        <form >
            <input type="text" onChange={this.handleTitle} value={this.state.title} style={styles.input} placeholder="Enter title of Genre to push Poster onto." />
        	<input type="text" onChange={this.handleUrl} value={this.state.url} style={styles.input} placeholder="Enter Url of Poster." />
        </form>
        <div style={styles.display} >Destination Genre is {this.state.title}.</div><div style={styles.display} >Poster link is {this.state.url} .</div>
        <button onClick={this.handleSubmit} style={styles.submit}> Submit Poster </button>
        <div style={styles.testingHelper}> These Buttons are provided to assist in testing application functionality.</div>
        <button style={styles.display} onClick={this.handleExampleTitle} >Press to Insert Custom Title of Kaiju</button><button style={styles.display} onClick={this.handleExampleUrl} >Press To Insert Url of a Godzilla Poster</button>
      </div>
    )
  }
}

export default custom