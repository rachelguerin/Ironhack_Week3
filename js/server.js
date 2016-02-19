var Server = require('simplecached').Server;
var PORT = 1702;

var server = new Server(PORT,function(error,result){
	console.log('Server started.....')
});

