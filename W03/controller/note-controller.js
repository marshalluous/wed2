const dataContext = require('../services/note-handler');
const Note = require('../services/note');

function showIndex(req, res, next) {
    dataContext.all((err, found) => {
        if (err) {
            console.log("Database error: ", err);
            next(err);
        } else
            res.render('index.hbs', {
                title: 'index',
                notes: found
            });
    });

};

function newNote(req, res, next) {
    res.render('new-note.hbs', {});
};


function getNote(req, res, next) {
    dataContext.findOne({_id: req.params.id}, (err, note) => {
        if (err) {
            console.log("Database error: ", err);
            next(err);
        } else
            res.render('note.hbs', note);
    });
};

function putNote(req, res, next) {
    insertNote(req.body,
        (newDoc) => res.redirect(`/notes/${newDoc._id}`),
        next);
};

function postNote(req, res, next) {
    insertNote(req.body,
        (newDoc) => res.redirect(`/notes/${newDoc._id}`),
        next);
};



function insertNote(obj, callback, next) {
    let note = new Note(obj.title,'','','');
    dataContext.insert(note, (err, newDoc) => {
        if (err) {
            console.log("Database error: ", err);
            next(err);
        } else
            callback(newDoc);
    });
};

function updateNote(oldDoc, newDoc, callback) {
    dataContext.update(oldDoc, newDoc, (num) => {
        callback(num);
    });
};

module.exports = {showIndex, getNote, newNote, putNote, postNote };