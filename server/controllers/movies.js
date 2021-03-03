const movies = [{
    id: 0,
    title: 'movie movie',
    director: 'Christopher Nolan',
    edit: false,
}]

let id = 1
module.exports = {
getMovies: (req, res) => {
    res.status(200).send(movies)
},
addMovie: (req, res) => {
    const {title, director} = req.body
    const newMovie = {id, title, director, edit: false}
    movies.push(newMovie)
    id++
    res.status(200).send(movies)
},

editMovie: (req, res) => {
        const index = movies.findIndex( movie => movie.id === +req.params.id)
    movies[index].title = req.body.title
    res.status(200).send(movies)

},
deleteMovie: (req, res) => {
    const index = movies.findIndex ( movie => movie.id === +req.params.id)
    movies.splice(index, 1)
    res.status(200).send(movies)
}
}