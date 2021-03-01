import React from 'react'

class Movie extends React.Component {
    constructor (){
        super()
        this.state = {titleInput: ""}
    }
    handleTitle = (title) => {
        this.setState({titleInput: title})
    }
    render = () => {

    return <div className="movie">
        <div>{this.props.movie.title}</div>        
        <div>{this.props.movie.director}</div>
        <div className="button-container">
            <button className="edit-button" onClick={() => this.props.editMovie(this.props.movie.id, this.state.titleInput)}>Edit</button>
            <button className="delete-button" onClick= {() => this.props.deleteMovie(this.props.movie.id)}>Delete</button>
        <input onChange = { (e) => {
            this.handleTitle(e.target.value)
        }}/>
        </div>
    </div>
    }
}

export default Movie