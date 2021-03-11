import React, {useState} from 'react'
import axios from 'axios'
import './MovieCard.css'




// class Movie extends React.Component {
    // constructor (){
    //     super()
    //     this.state = {titleInput: "",
    //                   trailerInput: "",
    //                   posterInput: ""}
    // }
    // handleTitle = (title) => {
    //     this.setState({titleInput: title})
    // }

    // handleTrailer = (trailer) => {
    //     this.setState({trailerInput: trailer})
    // }

    // handlePoster = (poster) => {
    //     this.setState({posterInput: poster})
    // }

const MovieCard = () => {
    const [title, setTitle] = useState("")

const handleSubmit = () => {
    
}
    return <div className="movie">
        <div>{this.props.movie.title}</div>        
        <div>{this.props.movie.trailer}</div>
        <div>{this.props.movie.poster}</div>
        <div className="button-container">
            <button className="edit-button" onClick={() => this.props.editMovie(this.props.movie.id, this.state.titleInput, this.state.trailerInput, this.state.posterInput)}>Edit</button>
            <button className="delete-button" onClick= {() => this.props.deleteMovie(this.props.movie.id)}>Delete</button>
        <input onChange = { (e) => {
            setTitle(e.target.value),
            this.handleTrailer(e.target.value),
            this.handlePoster(e.target.value)
        }}/>
        </div>
    </div>
    }

export default Movie