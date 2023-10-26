const { Router } = require('express');
const router = Router();
const { listPosts, storePost } = require('../controllers/postsController')
const postRouter = require('./routes/postsRouter');

router.get('/posts', listPosts);
router.post('/post/create', storePost);
app.use('/api', postRouter);

module.exports = router;