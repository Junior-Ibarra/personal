import React,  {useState, useEffect} from 'react'
import axios from 'axios'
import Movie from '../MovieCard/MovieCard'

const Main = ({moviesList, setMovies}) => {
    // const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('/api/movies')
        .then(res => {
            setMovies(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    const mappedMovies = moviesList.map((movie, index) => {
        return (
            <p key = {index}>{movie.title}</p>
        )}
    )

    return (
        <div className='main'>
            <div>
                {Movie}
            </div>
            {mappedMovies}
        </div>
    )
}

export default Main