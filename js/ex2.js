var numbers = "80:70:90:100";

function averageColon(strOfNums) {
	return strOfNums.split(":").reduce(function (result, number, index, vector) {
		return result + parseInt(number) / vector.length;
	}, 0)

} 

console.log('The average is: ' + averageColon(numbers));