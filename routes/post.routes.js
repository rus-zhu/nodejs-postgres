const Router = require('express')
const router = new Router()
const postController = require('../controller/post.controller')

router.post('/post', postController.createPost)
router.get('/post', postController.getPostsById)


module.exports = router