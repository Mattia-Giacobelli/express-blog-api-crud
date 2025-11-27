//Import posts array
const posts = require('../data/posts')

//index
function index(req, res) {
    res.json(posts)
}

//Show 
function show(req, res) {

    //Id filtering
    // const post = posts.find((post) => post.id == req.params.id)

    //tag filtering
    const tag = req.params.tag.charAt(0).toUpperCase() + req.params.tag.slice(1)
    console.log(tag);

    const post = posts.find((post) => post.tags.includes(tag))


    //Manage not found error
    if (!post) {
        const error = {
            error: true,
            status: '404 not found'
        }

        return res.json(error)
    }

    res.json(post)
}

//Store
function store(req, res) {
    console.log(req.body);

    const post = {

        "title": req.body.title,
        "content": req.body.content,
        "image": req.body.image,
        "tags": req.body.tags,
    }

    posts.push(post)

    res.json({ status: '201', ...posts })

}

//Update
function update(req, res) {

    //Select the single post
    const post = posts.find(post => post.id == req.params.id)

    //Manage not found error
    if (!post) {
        const error = {
            error: true,
            status: '404 not found'
        }

        return res.status(404).json(error)
    }

    //remove post based on id
    posts.splice(posts.indexOf(post), 1)


    post.title = req.body.title
    post.content = req.body.content
    post.image = req.body.image
    post.tags = req.body.tags


    console.log(post);

    posts.push(post)

    res.json({ status: '201', posts })
}

//Modify 
function modify(req, res) {
    res.send(`Modify post with id:${req.params.id}`)
}

//Destroy
function destroy(req, res) {
    const post = posts.find(post => post.id == req.params.id)

    //Manage not found error
    if (!post) {
        const error = {
            error: true,
            status: '404 not found'
        }

        return res.status(404).json(error)
    }

    //remove post based on id
    posts.splice(posts.indexOf(post), 1)

    console.log(posts);

    res.sendStatus(204)

}


module.exports = { index, show, store, update, modify, destroy }