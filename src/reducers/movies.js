const initialState = {
    moviesList: [],
}

export const SET_MOVIES = 'SET_MOVIES'

export const setMovies = (moviesList) => ({
    type: SET_MOVIES,
    payload: {
        moviesList,
    }
})

export default function moviesReducer(state = initialState, action) {
    const {type, payload} = action 
    switch (type){
        case SET_MOVIES: return {...state, ...payload}
        default: return {...state}
    }
}