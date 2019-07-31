var express = require('express');
var router = express.Router();
var controller = require('../controller/note-controller');

router.get('/', controller.showIndex);
router.get('/notes/new', controller.newNote);
router.get('/notes/:id', controller.getNote);
router.put('/notes', controller.putNote);
router.post('/notes', controller.postNote);

module.exports = router;
