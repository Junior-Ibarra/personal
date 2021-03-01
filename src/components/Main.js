import React, {Component} from 'react'
import axios from 'axios'
import Movies from './Movies.js'
import Form from './Form.js'

class Main extends Component {
    constructor(){
        super()
        this.state = {
            movies: [],
            
        }
    }

componentDidMount(){
    this.getMovies()
}

    getMovies = () => {
        axios.get('/api/movies')
        .then ( res => {
            this.setState({
                movies: res.data
            })
        }).catch( err => console.log(err))
        }

        addMovie = list => {
            axios.post('/api/movies', list)
            .then(res => {
                this.setState({
                    movies: res.data
                })
            }).catch( err => console.log(err))
        }
        editMovie = (id, title, director) => {
            axios.put(`/api/movies/${id}`, {title, director})
            .then( res => {
                this.setState({
                    movies: res.data
                })
            }).catch (err => console.log(err))
        }

        deleteMovie = id => {
            axios.delete(`/api/movies/${id}`)
            .then( res => {
                this.setState({
                    movies: res.data
                })
            }).catch (err => console.log(err))
        }



    render(){
        const mappedMovies = this.state.movies.map( movie => {
            return <Movies key={movie.id} movie={movie} editMovie={this.editMovie}
            deleteMovie={this.deleteMovie}/>
        })
        return <div className="main">
            <Form addMovie={this.addMovie}/>
            {mappedMovies}
        </div>
    }
}

export default Main