const express = require ('express')
const ctrl = require('./controller.js')
const app = express()

app.use(express.json())

app.get('/api/movies', ctrl.getMovies)
app.post('/api/movies', ctrl.addMovie)
app.put('/api/movies/:id', ctrl.editMovie)
app.delete('/api/movies/:id', ctrl.deleteMovie)

const port =  4000

app.listen(port, () => console.log(`Listening on port ${port}`))

