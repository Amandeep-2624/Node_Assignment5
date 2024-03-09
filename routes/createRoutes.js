const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', (req, res) => {
  res.render('createUser');
});
router.post('/add', userController.createUser);

module.exports = router;
