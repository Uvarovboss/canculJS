var firstNumber;
var secondNumber;
var sign;

firstNumber = Number(prompt("input first number"));
secondNumber = Number(prompt("input second number"));;
sign = Number(prompt("What do you want? / input 1,* input 2, - input 3,+ input 4,"));
if (sign===1) {
	var div = firstNumber / secondNumber;
	document.write("div is " + div + "<br>");
}
if (sign===2) {
	var div = firstNumber * secondNumber;
	document.write("div is " + div + "<br>");
}
if (sign===3) {
	var div = firstNumber - secondNumber;
	document.write("div is " + div + "<br>");
}
if (sign===4) {
	var div = firstNumber + secondNumber;
	document.write("div is " + div + "<br>");
}