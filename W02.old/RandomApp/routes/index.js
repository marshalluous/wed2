const express = require('express');
const router = express.Router();
const controller = require('../controllers/randomAppController');

router.get('/', controller.index);
router.get('/random', controller.get);
router.post('/random', controller.post);

module.exports = router;