cons fs = require('fs');

cons data = fs.readFileSync(process.argv[2]);

const sentenceArray = data.toString().split('\n');
console.log(sentenceArray.length-1)