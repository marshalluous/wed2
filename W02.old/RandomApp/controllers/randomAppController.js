const random = require('../services/random');
const url = require('url');
const qs = require('qs');

module.exports.index = function(req,res){
	res.render('home', { title :'Welcome'});
};

module.exports.post = function(req,res) {
	console.log(req);
	let from = Number(req.body.from || 1);
    let to = Number(req.body.to || 10);
    let quantity = Number(req.body.quantity || 2);

    res.redirect("/random?"+qs.stringify({from, to, quantity}));
};

module.exports.get = function(req,res) {
	let url_parts = url.parse(req.url, true);
	let query = url_parts.query;
	let from = +query.from; // das + davor casted den string in eine Number
	let to = +query.to;
	let quantity = +query.quantity;
	let calculations = random.calc(from, to, quantity);
	//res.writeHead(400, {'Content-Type':'text/html'});
    res.render('result', { title: 'Random Result', result : {from, to, quantity, list : calculations} });
};
