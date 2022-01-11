const UserController = require('../controllers/users');

const router = require('express').Router();

router.get('/', UserController.index);
router.get('/:id', UserController.show);
router.post('/', UserController.store);
router.patch('/:id', UserController.update);
router.delete('/:id', UserController.destroy);

module.exports = router;