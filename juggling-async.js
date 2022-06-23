const http = require('http');

const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

let messages =['', '',''];
let counter = 0;

// let say l come last, ['message l','message 2','message 3'], 3
http.get(url1, function(response){
	let answer = "";
	response.on("error", function(error){

	})
	response.on("data", function(data){
		answer += data.toString();

	})
	response.on("end", function(){
		counter++
		messages[0] = answer;
		if (counter == 3){
			for (var i = 0; i < messages.length;i++){
				console.log(messages[i]);
			}
		}

	})

    });

    // let say 2 come first , ['','message 2',''], 1
    http.get{url2, function(response){
    	let answer = "";
    	response.on("error", function(error){

    	})
        response.on("data", function(data){
        	answer += data.toString();

        })
        response.on("end", function(){
        	counter++
        	messages[1] = answer;
        	if (counter == 3){
        		for (var i = 0; i < messages.length;i++){
        			console.log(messages[i]);
        		}
        	}

        })

    });
    // let say 3 come second , ['','message 2','message 3'], 2
    http.get(url3, function(response){
    	let answer = "";
        response.on("error", function(error){

    	})
    	response.on("data", function(data){
    		answer += data.toString();

    	})
    	response.on("end", function(){
    		counter++
    		messages[2] = answer;
    		if (counter == 3){
    			for (var i = 0; i < messages.length;i++){
    				console.log(messages[i]);
    			}
    		}

    })

});






