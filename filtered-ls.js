const fs = require('fs');
fs.readdir(process.argv[2], (err, files)=>{
	if (err) return err;
	const ending = "."+process.argv[3]; // md/ png / jpg

	for (var i= 0 ; i < files.length; i++){
		if (files[i].endsWith(ending)){
			console.log(files[i]);
		}
	}
});