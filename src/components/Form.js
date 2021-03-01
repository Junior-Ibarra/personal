import React, {Component} from 'react'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            director: ''
        }
          }

    movieChange = e =>{
        this.setState({
            title: e.target.value
        })
    }

    directorChange = e =>{
        this.setState({
            director: e.target.value
        })
    }

    movieSubmit = e => {
        e.preventDefault()
        this.props.addMovie(this.state)
        this.setState({
            title: '',
            director: ''
        })
    }

    
    render(){
        return <div className="form-container">
            <form onSubmit={(e) => this.movieSubmit(e)}>
                <div><input onChange={e => this.movieChange(e)} value={this.state.title} placeholder="Add Movie Title" type="text" className="movie-name"/></div>
                <div><input onChange={e => this.directorChange(e)} value={this.state.director} placeholder="Add Director" type="text" className="director"/></div>
                <button className="submit-button" type="submit">Add Movie</button>
            </form>
        </div>
    }
}

export default Form