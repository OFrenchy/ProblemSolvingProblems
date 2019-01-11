"use strict";
//console.log("Hello, World!!")
/*console.log("Dean Bourgeois")
console.log("55 years old, they tell me")
console.log("1/1/1900")
alert("Wisconsin")*/

// Pay Calculator
// let hoursWorked = prompt("Enter hours worked:");
// let payRate = prompt("Enter pay rate:");
// let straightHours = 0;
// let overtimeHours = 0;
// let payCheck = 0;
// let straightPay = 0;
// let overtimePay = 0;
// let overtimeStartsAt = 40;
// let overtimeMultiplier = 1.5;
// let overtimePayRate = overtimeMultiplier * payRate; 
// let payCalculation = "";

// if (hoursWorked <= overtimeStartsAt) {
// 	straightHours = hoursWorked;
// 	straightPay = hoursWorked * payRate;
// 	payCheck = straightPay;
// }
// else {
// 	//payCheck = (40 * payRate) + ((hoursWorked - 40) * (1.5 * payRate))
// 	straightHours = overtimeStartsAt;
// 	straightPay = straightHours * payRate;
// 	overtimeHours = hoursWorked - overtimeStartsAt;
// 	overtimePay = overtimeHours * overtimePayRate;
// 	payCheck = straightPay + overtimePay;
// }
// console.log("Pay is $" + payCheck);

// payCalculation = "Pay calculation is (" + straightHours + " hours @ $" + payRate + ") + (" + 
// 	overtimeHours + " hours @ $" + overtimePayRate + ") = $" + payCheck;

// console.log(payCalculation);
// alert(payCalculation);




// console.log(runPayCalculator());

// Get pay parameters
function runPayCalculator (){
	// Get the straight pay rate
	let straightPayRate = prompt("Enter the straight pay rate:");
	// Get the overtime rate pay multiplier 
	let overtimePayRateMultiplier = prompt("Enter the overtime pay multiplier (enter 1.5 for time and a half, enter 2 for double time:");
	// Get the number of hours above which an employee earns overtime pay 
	let overtimeThresholdHours = prompt("Enter the number of hours above which overtime pay is due:");
	// Get the number of hours worked
	let numberOfHoursWorked = prompt("Enter the numbers of hours worked:");

	// Can/will change this in the future when I learn how to return multiple values
	// Calculate the total paycheck amount
	let paycheckAmount =  calculateTotalPay (straightPayRate, overtimePayRateMultiplier, overtimeThresholdHours, numberOfHoursWorked, true);
	// Get the pay explanation
	let payExplanation = calculateTotalPay (straightPayRate, overtimePayRateMultiplier, overtimeThresholdHours, numberOfHoursWorked, false);

	// Output something to the user for this example
	alert("Total pay is $" + paycheckAmount);
	alert(payExplanation);
	alert("button id = " + buttonCalculatePay.id)
}

// Calculate the total paycheck amount
function calculateTotalPay (straightPayRate, overtimePayRateMultiplier, overtimeThresholdHours, numberOfHoursWorked, falseNumberOrTrueExplanation){
	
	let straightHours = 0;
	let overtimeHours = 0;
	let payCheck = 0;
	let straightPay = 0;
	let overtimePay = 0;
	let payExplanation = "";
	let overtimePayRate = overtimePayRateMultiplier * straightPayRate; 
	
	if (numberOfHoursWorked <= overtimeThresholdHours) {
		straightHours = numberOfHoursWorked;
		straightPay = numberOfHoursWorked * straightPayRate;
		payCheck = straightPay;
	}
	else {
		//payCheck = (40 * straightPayRate) + ((numberOfHoursWorked - 40) * (1.5 * straightPayRate))
		straightHours = overtimeThresholdHours;
		straightPay = straightHours * straightPayRate;
		overtimeHours = numberOfHoursWorked - overtimeThresholdHours;
		overtimePay = overtimeHours * overtimePayRate;
		payCheck = straightPay + overtimePay;
	}

	// Return the requested value - pay amount or pay explanation
	if (falseNumberOrTrueExplanation == true) {
		return payCheck;
	}
	else {
		return "Pay calculation is (" + straightHours + " hours @ $" + straightPayRate + ") + (" + 
			overtimeHours + " hours @ $" + overtimePayRate + ") = $" + payCheck;
	}
	prompt("button id = " + buttonCalculatePay.id)
}



function runFizzBuzz(){

// FizzBuzz
for (let i = 1; i <= 100;i++) {
	//if(i % 15 == 0) {
	if (i% 3 == 0 && i % 5 == 0) {
		console.log("fizzbuzz");
	}
	else if((i % 3) == 0) {
		console.log("fizz");
	}
	else if((i % 5) == 0) {
		console.log("buzz");
	}
	else {
		console.log(i);
	}
}

let fizzBuzzString = "";
for (let i = 1; i <= 100;i++) {
	//if(i % 15 == 0) {
	if (i% 3 == 0 && i % 5 == 0) {
		console.log("FizzBuzz");
		fizzBuzzString = fizzBuzzString  + "FizzBuzz ";
	}
	else if((i % 3) == 0) {
		console.log("Fizz");
		fizzBuzzString = fizzBuzzString  + "Fizz ";
	}
	else if((i % 5) == 0) {
		console.log("Buzz");
		fizzBuzzString = fizzBuzzString  + "Buzz ";
	}
	else {
		console.log(i);
		fizzBuzzString = fizzBuzzString  + i + " ";
	}
}
console.log(fizzBuzzString)
}

//Problem 1
//Write a function that takes in two numbers
//The logic of the function should add those two numbers together and return a sum
//Capture the returned value in a variable and print it to the console
function runProblem1(){
	console.log(addTwoNumbers(Number(prompt("Enter the first number:")), Number(prompt("Enter the second number:"))));
}
function addTwoNumbers(firstNumber, secondNumber){
	return (Number(firstNumber) + Number(secondNumber));
}

//Problem 2
//Write a function that takes in two strings
//The logic of the function should concatenate those two strings together and return the concatenated result
//Capture the returned value in a variable and print it to the console
function runProblem2(){
	console.log(
		addTwoStrings(prompt("Enter the first string:"), prompt("Enter the second string:")));
	
}
function addTwoStrings(firstString, secondString){
	return (firstString + secondString);
}

//Problem 3
//Write a function that takes in a string
//The logic of the function should print each character of the string one at a time to the console
//HINT: for loop is one way to do this
function runProblem3(){
		listCharactersInString(prompt("Enter the string to list:"));
}
function listCharactersInString(stringToParse){
	
	for (let i=0; i <= stringToParse.length; i++){
		console.log(stringToParse.substr(i, 1));
	}
}

//Problem 4
//Write a function that takes in a string
//The logic of the function should print the string to the console but only if that string has three or more characters in it
//If it is less than three characters, then print to the console "we need a larger string to print!"
function runProblem4(){
		printIfLengthGE3(prompt("Enter a string (3 or more characters) to print on the screen:"));
}
function printIfLengthGE3(stringToPrint){
	// let num = 1
	// alert (num.toString())
	prompt 
	if( stringToPrint.length >= 3){
		console.log(stringToPrint);
		alert(stringToPrint);
	}
	else {
		console.log("We need a larger string to print, please.");
		alert("We need a larger string to print, please.");
	}
}

// runPSPProblem2
function runPSPProblem2(){
		alert(reverseThisString(prompt("Enter a string to reverse:")));
}

function reverseThisString(reverseThis = ""){
	// console.log(reverseThis.charAt(0));
	// console.log(reverseThis.charAt(1));
	// console.log(reverseThis.charAt(2));
	// // console.log(reverseThis.substring(3,1));
	// // console.log(reverseThis.substring(4,1));
	// doesn't work
	// let outputString = "";
	// for (let i = reverseThis.length; i >=0; i--){
	// 	console.log("i = " + i + ", " + reverseThis.substr(i,1));
	// 	outputString = outputString + reverseThis.substr(i,1);
	// }
	let outputString = "";

	for (let i = reverseThis.length - 1; i >=0; i--){
		console.log("i = " + i + ", " + reverseThis.charAt(i));
		outputString = outputString + reverseThis.charAt(i);
	}
	return outputString.trim();
}

// runPSPProblem3
function runPSPProblem3(){
		alert("'" + properCase(prompt("Enter a string to proper case:")) + "'");
}

function upperCaseFirstLetter(thisString = ""){
	if (thisString !== ""){
		return (thisString.charAt(0)).toUpperCase() + thisString.substr(1);
	}
}

function getFirstWord(fullString = ""){
	let firstWord = "";
	if (fullString.length > 0) {
		let spaceAt = fullString.indexOf(" ");
		if (spaceAt > 0){
			firstWord = fullString.substr(0, spaceAt);
		}
		else {
			firstWord = fullString;
		}
	}
	return firstWord;
}


// What is better?  use Recursion, or iterating through an array of words?
function properCase(properCaseThis = ""){

	let outputString = "";
	let firstWordProperCased = "";
	let restOfString = "";
	if (properCaseThis.length > 0) {

		firstWordProperCased = upperCaseFirstLetter(getFirstWord(properCaseThis));
		restOfString = (properCaseThis.substr(firstWordProperCased.length)).trim();
		outputString = outputString + firstWordProperCased ;
		if (restOfString.length > 0){
			outputString = outputString + " " + properCase(restOfString);
		}
	}
	return outputString;
}


// runPSPProblem4
function runPSPProblem4(){
		alert(compressString(prompt("Enter a string to proper compress:")));
}

function compressString(compressThis = ""){
	let thisChar = "";
	let prevChar = compressThis.charAt(0);
	let charCounter = 0;
	let outputString = "";
	for (let i = 0; i <= compressThis.length; i++){
		thisChar = compressThis.charAt(i);
		if (thisChar === prevChar) {
			charCounter++;
			//console.log(charCounter)
			//charCounter = charCounter + 1 ;
			//console.log(charCounter)
		}
		else{
				outputString = outputString + charCounter.toString() + prevChar;
				prevChar = thisChar;
				charCounter = 1;
		}
	}
	return outputString;
}