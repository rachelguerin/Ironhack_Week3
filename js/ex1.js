var arrayExample = [2,-5,10,5,4,-10,0];


var result = arrayExample.reduce(function (result, x, i) {
		return arrayExample.reduce(function (aux, y, j) {
			return (x + y === 0) && (x <= y)
				? aux.concat('('+i+','+j+')') 
				: aux
		}, result )
	}, [])
	// --> ['('0,5')','('3,5')'
console.log(result);