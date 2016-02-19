var Car = function(model,noise) {
	this.model = model;
	this.noise = noise;
	this.wheels = 4;

	// this.makeNoise = function () {
	// 	console.log(this.noise);
	// } 
};

Car.prototype.makeNoise = function () {
	return console.log(this.noise);
};

bomb = new Car('VW Beetle','chuggachugga');
f1 = new Car('Maclaren','vroooom');

bomb.makeNoise();
f1.makeNoise();

bomb.makeNoise = function () {
	console.log("put put ...");
};

bomb.makeNoise();

delete bomb.makeNoise;
bomb.makeNoise();

Car.prototype.makeNoise = function () {
	console.log("brrrmmm");
};

bomb.makeNoise();
f1.makeNoise();

console.log(Object.keys(bomb));
console.log(bomb.model);
console.log(bomb.noise);
console.log(bomb.wheels);


