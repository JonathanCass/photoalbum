import React from 'react'
import albums from '../assets/albums/albums.json'

const styles = {
  cContainer: {
    background: '#A40406',
    height: 1400
  },
	backButton:{
		margin: '40px 40px 20px 40px',
	  width: 200,
		height: 40,
    fontSize: 15
	},
	input: {
    fontSize: 20,
    height: 50,
    width: 400,
    margin: '40px 40px 30px 40px',
    paddingLeft: 20,
    border: "solid black 2px",
  },
  display: {
  	fontSize: 20,
    height: 50,
    width: 400,
    margin: '40px 40px 20px 40px',
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
    margin: '20px 40px 20px 40px',
    lineHeight: '48px',
    paddingLeft: 100,
  },
  genreContainer:{
    display: 'flex',
    flexWrap: 'wrap',
    width: 900,
    margin: "0 0 20px 40px"
  },
  existingGenre: {
    width: 205,
    height: 40,
    margin: '0 20px 14px 0',
    background: '#429441',
    lineHeight: '38px',
    textAlign: 'center',
    border: "solid white 2px",
    fontSize: 22,
    color: 'white'
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
  handleExisting = (e) => {
    this.setState({
      title : e.target.value
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
        <div style={styles.genreContainer}>
          <div style={styles.testingHelper}> Press an existing genre to insert it into the genre field </div>  
          {albums.map(function(album){
            return(
              <button style={styles.existingGenre} onClick={this.handleExisting} value={album.title} key={album.title}> {album.title} </button>
            )
          }.bind(this))}
        </div>
        <button onClick={this.handleSubmit} style={styles.submit}> Submit Poster </button>
        <button style={styles.display} onClick={this.handleExampleTitle} >Press to Insert Custom Title of Kaiju</button><button style={styles.display} onClick={this.handleExampleUrl} >Press To Insert Url of a Godzilla Poster</button>
      </div>
    )
  }
}

export default custom