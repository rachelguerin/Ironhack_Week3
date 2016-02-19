function ceasarCipher (message,shift) {
	shift = shift || 3;
	return message.split('').map(function (char){
		return isUpper(char) || isLower(char)
			? getChar(char,shift)
			: char 
	}).reduce(function (cipher,char) {
		return cipher + char;
	},"")
}

function getChar(char,shift) {
	charCode = char.charCodeAt(0);
	charCodeShifted = charCode + shift;

	if ((isUpper(char) && charCodeShifted > 90) || (isLower(char) && charCodeShifted > 122)) {
		charCodeShifted -= 26;
	} else if ((isUpper(char) && charCodeShifted < 65) || (isLower(char) && charCodeShifted < 97)) {
		charCodeShifted += 26;
	} 
	return String.fromCharCode(charCodeShifted);

}

function isUpper(char) {
	return char >= 'A' && char <= 'Z'; 
}

function isLower(char) {
	return char >= 'a' && char <= 'z';
}


console.log(ceasarCipher("Et tu, brute?",-6));