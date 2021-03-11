import Main from './Main'
import {setMovies} from '../../reducers/movies'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    moviesList: state.movies.moviesList
})

export default connect(mapStateToProps, {setMovies})(Main)