var amy = {loc:1};
amy.loc++;
var ban = {loc:9}
ban.loc++;

var carlike = function(obj,loc)
{
  obj.loc = loc;
  obj.move =  function()
  {
    obj.loc++;
  };
  return obj;
};

var amy = carlike({},1);
amy.move();


///////////////////////////
var makeAnobject = function()
{
  return {example : 'property'};
};
var obj1 = makeAnobject();
var obj2 = makeAnobject();
if(obj1 === obj2)
// Answer is false;

//  if function object is returing

ar makeAnobject = function()
{
  return function () {};
};
var obj1 = makeAnobject();
var obj2 = makeAnobject();
if(obj1 === obj2)
// Answer is
//=== ask about object equality not an value eqality;




/// for constructor

var Car = function(loc)
{
  var obj = {loc:loc};
  extend(obj,Car.methods);
  obj.move = move;
  return obj;
};

Car.methods
{
   move =  function()
    {
      this.loc++;
    }
};

var amy = Car(1);
amy.move();


/////////////// prototye


var Car = function(loc)
{
  var obj = Object.create(Car.prototype)
  obj.loc = loc;
  return obj;
};

Car.prototype.move =  function(){
      this.loc++;
    };

var amy = Car(1);
amy.move();


console.log(Car.prototype.constructor);
console.log(amy.constructor);


///////////////////
var Car = function(loc){
    this.loc = loc;


};
Car.prototype.move = function(){
        this.loc++;
    };
var zed = new Car(3);
zed.move();

// These lines have been commented out because Van hasn't been defined in this example
/*
var amy = new Van(9);
amy.move();
amy.grab();
*/

subclass prototype
var Car = function(loc){
    this.loc = loc;
};
Car.prototype.move = function(){
    this.loc++;
};

var Van = function(loc){
    Car.call(this);
    this.loc =loc;
}
Van.prototype.move = function(){
    this.loc++;
};




var zed = new Car(3);
zed.move();

var amy = new Van(9);
amy.move();
