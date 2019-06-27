const orders = []; // in memory -> to neDB umstellen
var Datastore = require('nedb');
var db = new Datastore();
var states = {DELETED:"DELETED", OK:"OK"};

function Order(pizzaName, orderedBy)
{
    this.orderedBy = orderedBy;
    this.pizzaName = pizzaName;
    this.orderDate = new Date();
    this.state = states.OK;
}


function publicAddOrder(pizzaName, orderedBy, orderCreatedCallback)
{
    let order = new Order(pizzaName, orderedBy);
    db.insert(order, (error, newOrder) => {
        orderCreatedCallback(newOrder);
    });
}

function publicRemove(removableId)
{
    let order = publicGet(removableId);
    if(order)
    {
        order.state = states.DELETED;
    }
    return order;
}

function publicGet(searchableId)
{
    return db.findOne({_id : searchableId}, function(err, doc){
        if (err){
            console.error(err);
            return null;
        } 
        else
            return doc;
    });
}

function publicAll()
{
    return db.find({ state: states.OK });
}

module.exports = {add : publicAddOrder, delete : publicRemove, get : publicGet, all : publicAll};