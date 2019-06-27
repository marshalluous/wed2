module.exports.calc = function (from, to, quantity){
	console.log(typeof from, typeof to, from >= to);
	if (from == undefined || to == undefined || quantity == undefined)
		throw new Error('missing parameters from|to|quantity');
	else if (from >= to)
		throw new Error('\"from\"(currently:'+from+') should be smaller than \"to\" (currently:'+to+') and bigger than 0');
	else if (from <= 0)
		throw new Error('from should be bigger than 0');
	else if (quantity <= 0)
		throw new Error('\"quantity\" must be bigger than 0');
	else {
		let count = 1;
		let numbers = [];
		while (count <= quantity)
		{
			numbers.push(Math.ceil(Math.random() * (to-from) + from));
			count++;
		}
		return numbers;
	}
};