var Saxon = function(){
	this.name = 'Saxon';
	this.health = parseInt(Math.random() * 50);
	this.strength = parseInt(Math.random() * 50);
}

var Viking = function(name,health,strength){
	this.name = name;
	this.health = health;
	this.strength = strength;
	//console.log("Viking "+this.name+" has entered the pit.");
}

var Pit = function(name,turns){
	this.name = name;
	this.players = [];
	this.turns = turns;
	
}

Pit.prototype.attack = function(){
	//choose p1 or p2
	if (Math.random() < 0.5){
		attacker = this.players[0];
		defender = this.players[1];
	} else {
		attacker = this.players[1];
		defender = this.players[0];
	}

	damage = attacker.strength * 0.2;
	defender.health -= damage;
	console.log(attacker.name+" has attacked "+defender.name+".");
	if (defender.health > 5){
		console.log(defender.name+" has suffered "+damage+" damage. His health is now "+defender.health+".");
		return true;
	}
	else{
		console.log(defender.name + " has surrendered!!.");
		return false;
	}
}

Pit.prototype.add_player = function(player){
	this.players.push(player);
}
Pit.prototype.print_status = function(){
	console.log(this.players[0].name + " and "+this.players[1].name+" have entered the pit at "+this.name+". \nThe crowd roars with anticipation.");
};

Pit.prototype.fight = function(){
	for(i=0;i<this.turns;i++){
		if (this.attack()) {
			continue;
		} else { 
			console.log ("");
			break; }
	}
	var winner=this.players[0].health > this.players[1].health ? this.players[0] : this.players[1];
	console.log("The fight is OVER. The winner is " + winner.name);
}

var vlad = new Viking('Vlad',25,25);
var ragnar = new Viking('Ragnar',20,20);

var saxon = new Saxon();

var elgin = new Pit("Elgin",10);

elgin.add_player(vlad);
elgin.add_player(saxon);
elgin.print_status();
elgin.fight();







