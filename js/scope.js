function ticketBuilder(transport) {
	var passenger = 0;
	return function(name) {
		passenger++;
		console.log('Hi '+name+' here is your '+transport+' ticket.');
		console.log('You are passenger number '+passenger);
	}
}
//factory of functions
// note passenger tracking for each transport type
// var getPlaneTicket = ticketBuilder('plane');
// var getBusTicket = ticketBuilder('bus');

// getPlaneTicket('Antonio');
// getBusTicket('Judy');
// getBusTicket('Anne');
// getPlaneTicket('Pedro');


// function checkInPassenger(name,customersArray){
// 	var passengerChecked;
// 	for (var i=0; i<customersArray.length; i++){
// 		if (customersArray[i] === name){
// 			return function(){
// 				console.log('Hi, '+name+'. You are passenger #'+(i+1)+'.');
// 			};
// 		}
// 	}
// }

function checkInPassenger(name,customersArray){
	function createPrinting(passenger_id){
		return function(){
			console.log("Hi, "+name+" you're passenger #"+passenger_id);
		};
	}
	var result;
	for (var i=0; i<customersArray.length; i++){
		if (customersArray[i] === name){
			result = createPrinting(i+1);
		}
	}
	return result;
}

var flightToBali=["Wayan","Putu","Gede","Ni Luh"]

var counterCheckIn = checkInPassenger("Gede",flightToBali);
counterCheckIn();
