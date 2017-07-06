var express = require('express');
var router = express.Router();
var users = require('../controllers/usersController');

/* GET users listing. */
router.get('/', users.list_users);
router.post('/', users.create_user);

router.get('/:userId', users.read_user);
router.put('/:userId', users.update_user);
router.delete('/:userId', users.delete_user);

module.exports = router;
