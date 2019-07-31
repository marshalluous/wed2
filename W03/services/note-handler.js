const nedb = require('nedb');
var db = new nedb();

function insert(doc, callback) {
    db.insert(doc, callback);
};

function findOne(findParam, callback) {
  db.findOne(findParam, callback);
};

function find(findParam, callback) {
    db.find(findParam, callback);
};

function all(callback) {
    db.find({}, callback);
};

function update(oldDoc, newDoc, callback) {
    db.update(oldDoc, newDoc, callback);
};

module.exports = {insert, findOne, find, all, update};