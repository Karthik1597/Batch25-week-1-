const http = require('http');

http.get(process.argv[2],function(response){

/// THis will be called when we retrieve data from the server response.on("data", function(data){
	response.on("data", function(data){
		console.log(data.toString());
	
	});

/// THis will be called when there is an error from the server
    response.on("error", function(error){

    });

/// THis will be called when finish connecting to the server
    response.on("end", function(){

    });
})