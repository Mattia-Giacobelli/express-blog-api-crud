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

    posts.push(req.body)

    res.json({ status: '201', ...req.body })

}

//Update
function update(req, res) {

    const modifyPost = posts.filter(post => post.id != req.params.id)
    console.log(modifyPost);

    const newPost = {
        "id": Date.now(),
        ...req.body

    }

    posts.push(newPost)

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

        return res.json(error)
    }

    //remove post based on id
    posts.splice(posts.indexOf(post), 1)

    console.log(posts);

    res.sendStatus(204)

}


module.exports = { index, show, store, update, modify, destroy }