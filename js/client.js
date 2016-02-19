var Client = require('simplecached').Client;
var OPTIONS = {
	port: 11511,
	host: '10.28.31.244'
};

var client = new Client(OPTIONS, function(error){
	console.log('Client connected');
	var key = 'rachel';
	var value = 'ironhacker';

	client.set(key, value, function(error,result){
		if (error) console.log('Error setting the key');
		if (result) console.log('Key and value have been set');
	 	if (!result) console.log('They key and value could not be set.');
		client.get(key,function(error, value){
			if (error) {
				console.log('Error retrieving key');
			} else { 
				console.log('READ -> ',value);
				client.close();
			}
		})


	})

	
});



