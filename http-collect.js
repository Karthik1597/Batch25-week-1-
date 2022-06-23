const http = require('http');

http.get(process.argv[2], function(response){
	let answer = ""

	response.on('error', function(err){

	})
	// When data is sent by server, it is going to be sent chunk by chunk/
	// Chunk of 8
	// I will  combine the data on answer variable
	response.on('data', function(data){
		answer += data.toString();

	})

    // WHen finish , I will show 1) How many character are ther and what is being sh
    response.on('end', function(){
    	console.log(answer.length);
    	console.log(answer);

    })
})