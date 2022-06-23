var arr   = process.argv;
var sum = 0;
for (var i = 2; i < process.argv.length;i++){
	sum+= Number(arr[i]);
}
console.log(sum);


