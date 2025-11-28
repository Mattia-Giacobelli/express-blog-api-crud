const express = require('express')
const postsRouter = require('./routes/posts')
const app = express()
const port = 3000

//Import middlewares
const notFound = require('./middlewares/notFound')
const serverError = require('./middlewares/serverError')

app.use(express.json())


app.use('/api/posts/', postsRouter)


app.get('/', (req, res) => {
    res.send("My blog's server")
})

app.listen(port, () => {
    console.log(`Server lsitening on port http://localhost:${port}`);

})

//Manage server error
app.use(serverError)

//Manage not found error
app.use(notFound)