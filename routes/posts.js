const express = require('express')
const app = express()
const notFound = require('../middlewares/notFound')

//Import posts controller
const postsController = require('../controllers/postsController')

// create posts router
const router = express.Router()

//Index 
router.get('/', postsController.index)

//Show 
router.get('/:tag', postsController.show)

//Store
router.post('/', postsController.store)

//Update
router.put('/:id', postsController.update)

//Modify 
router.patch('/:id', postsController.modify)

//Destroy
router.delete('/:id', postsController.destroy)


//Manage not found error
app.use(notFound)

module.exports = router