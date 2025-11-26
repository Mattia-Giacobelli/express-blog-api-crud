const express = require('express')
const postsRouter = require('./routes/posts')
const app = express()
const port = 3000

app.use('/api/posts/', postsRouter)

app.get('/', (req, res) => {
    res.send("My blog's server")
})

app.listen(port, () => {
    console.log(`Server lsitening on port http://localhost:${port}`);

})