// const movies = [{
//     id: 0,
//     title: 'movie movie',
//     director: 'Christopher Nolan',
//     edit: false,
// }]

// let id = 1
module.exports = {
    getWatched: async (req, res) => {
        const {userId} = req.params
        const db = req.app.get('db')
        const movies = await db.movies.get_watched([userId])
        res.status(200).send(movies)
    },

    getWatchlist: async (req, res) => {
        const {userId} = req.params
        const db = req.app.get('db')
        const movies = await db.movies.get_watchlist([userId])
        res.status(200).send(movies)
    },
    addMovie: async (req, res) => {
        const {userId} = req.params
        const {title, trailer, poster, isWatched} = req.body
        console.log(isWatched)
        const db = req.app.get('db')
        const dateCreate = new Date()
        await db.movies.add_movie([title, trailer, poster, dateCreate, userId, isWatched])
        res.sendStatus(200)
    },

    editMovie: async (req, res) => {
        const {title, trailer, poster} = req.body
        const {id} = req.params
        const db = req.app.get('db')
        const updatedMovie = await db.movies.edit_movie([title, trailer, poster, id])
        res.status(200).send(updatedMovie)
    },
    deleteMovie: async (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')
        await db.movies.delete_movie([id])
        res.sendStatus(200)
    },
    getMovie: async (req, res) => {
        const {id} = req.params
        console.log(id)
        const db = req.app.get('db')
        const movie = await db.movies.get_movie([id])
        res.status(200).send(movie[0])
    },
}