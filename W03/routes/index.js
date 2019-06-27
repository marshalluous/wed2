var express = require('express');
var router = express.Router();
var controller = require('../controller/note-controller');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index.hbs', {
        title: 'index',
        notes: controller.findAll()
    });
});

/* GET new note. */
router.get('/notes/new', function (req, res, next) {
    res.render('new-note.hbs', {});
});

/* GET note. */
router.get('/notes/:id', function (req, res, next) {
    controller.findNote({_id: req.params.id}, (note) => {
        res.render('note.hbs', note);
    });
});

router.put('/notes', (req, res, next) => {
    controller.insertNote(req.body, (newDoc) => {
        res.redirect(`/notes/${newDoc._id}`);
    });
});

router.post('/notes', (req, res, next) => {
    controller.insertNote(req.body, (newDoc) => {
        res.redirect(`/notes/${newDoc._id}`);
    });
});

module.exports = router;
