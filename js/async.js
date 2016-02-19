sleep(10,function () {
	console.log("It's been 10 seconds.")
})

function sleep(sec,fn){
	setTimeout(fn,sec*1000)
}