const express = require('express')

//Import posts array
const posts = require('../posts')

// create posts router
const router = express.Router()

//Index 
router.get('/', (req, res) => {
    res.json(posts)
})

//Show 
router.get('/:id', (req, res) => {
    const post = posts.find((post) => post.id == req.params.id)
    res.json(post)
})

//Store
router.post('/', (req, res) => {
    res.send('Add new posts')
})

//Update
router.put('/:id', (req, res) => {
    res.send(`Update post with id:${req.params.id}`)
})

//Modify 
router.patch('/:id', (req, res) => {
    res.send(`Modify post with id:${req.params.id}`)
})

//Destroy
router.delete('/:id', (req, res) => {
    res.send(`Delete post with id:${req.params.id}`)
})

module.exports = router