const nedb = require('nedb');
var db = new nedb();

module.exports.insert = function(doc, callback) {
    db.insert(doc, (err, newDoc) => {
        if (err)
            throw new Error(err);
        else
            callback(newDoc);
    });
};

module.exports.findOne = function(findParam, callback) {
  db.findOne(findParam, (err, foundDoc) => {
      if (err)
          throw new Error(err);
      else
          callback(foundDoc);
  });
};

module.exports.find = function(findParam, callback) {
    db.find(findParam, (err, found) => {
        if (err)
            throw new Error(err);
        else
            callback(found);
    });
};

module.exports.all = function(callback) {
    db.find({}, (err, docs) => {
        if (err)
            throw new Error(err);
        else
            callback(docs);
    });
};

module.exports.update = function(oldDoc, newDoc, callback) {
    db.update(oldDoc, newDoc, (err, numReplaced) => {
        if (err)
            throw new Error(err);
        else
            callback(numReplaced);
    });
};