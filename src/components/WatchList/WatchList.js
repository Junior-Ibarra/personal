import React,  {useState, useEffect} from 'react'
import axios from 'axios'

const Main = ({moviesList, setMovies}) => {
    // const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('/api/movies/watchlist/')
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
        <div className='watchlist'>
            {mappedMovies}
        </div>
    )
}

export default WatchList