const net = require('net');
const server = net.createServer(function(socket){

	let currentTime = new Date();
	let year = currentTime.getFullYear();

	let month = (currentTime.getMonth()+1);
	if (month < 10)  {
		month = "0"+month;
	}
	let date = currentTime.getDate()
	if (date < 10){
		date = "0"+date;
	}
	let hours = currentTime.getHours()
	if (hours < 10){
		hours = "0"+hours;
	}
	let minutes = currentTime.getMinutes()
	if (minutes < 10){
		minutes = "0"+minutes;
	}
	let formattedTime =
	year+"-"
	+month+"-"
	+date+" "+
	hours+":"
	+minutes;
	socket.write(formattedTime);
	socket.end("\n");

})
server.listen(process.argv[2]);









