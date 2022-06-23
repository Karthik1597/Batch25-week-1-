const fs = require('fs');
fs.readFile(process.argv[2],(err,data)=>{
	if (err) return err;
	const arrSentence = data.toString().split("\n");
	console.log(arrSentence.length-1)
})