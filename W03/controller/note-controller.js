const dataContext = require('../services/note-handler');
var note = require('../services/note');

module.exports.insertNote = function(obj, c) {
    let note = new note.Note(obj.title,'','','');
    dataContext.insert(obj, (newDoc) => {
        c(newDoc);
    })
};

module.exports.updateNote = function(oldDoc, newDoc, callback) {
    dataContext.update(oldDoc, newDoc, (num) => {
        callback(num);
    })
};

module.exports.findNote = function(param, callback) {
    dataContext.findOne(param, (found) => {
        callback(found);
    })
};

module.exports.findAll = function() {
    var list;
    dataContext.all((found) => {list = found;});
    return list;
};