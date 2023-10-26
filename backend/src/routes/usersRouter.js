const { Router } = require('express');
const router = Router();
const { listUsers, storeUser } = require('../controllers/usersCrontoller')

router.get('/users', listUsers);
router.post('/user/create', storeUser);

module.exports = router;