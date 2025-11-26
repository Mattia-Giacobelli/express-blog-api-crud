//Import posts array
const posts = require('../data/posts')

//index
function index(req, res) {
    res.json(posts)
}

//Show 
function show(req, res) {
    const post = posts.find((post) => post.id == req.params.id)
    res.json(post)
}

//Store
function store(req, res) {
    res.send('Add new posts')
}

//Update
function update(req, res) {
    res.send(`Update post with id:${req.params.id}`)
}

//Modify 
function modify(req, res) {
    res.send(`Modify post with id:${req.params.id}`)
}

//Destroy
function destroy(req, res) {
    const post = posts.find(post => post.id == req.params.id)


    //remove post based on id
    posts.splice(posts.indexOf(post), 1)

    console.log(posts);

    res.sendStatus(204)

}


module.exports = { index, show, store, update, modify, destroy }