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
		outputString = outputString + firstWordProperCased;
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

// runPSPProblem5 - Write a function that takes a user input and checks to see 
// if it is a Palindrome and reports the result
// e.g. madam, nurses run, a toyota, "A man, a plan, a canal, Panama!", 
// "Was it a car or a cat I saw?", "No 'x' in Nixon"
function runPSPProblem5(){
		alert(checkForPalindrome(prompt("Enter a string to check for a Palindrome:")));
}

// function to strip non-alhpabetical characters
function stripNonAlphabeticChars(stringToStrip = "") {
	// loop through string and strip non-alhpabetical characters
	let i = 0;
	let stringStripped = "";
	while(i < stringToStrip.length) {
		if ((stringToStrip.charAt(i) >= "a" && stringToStrip.charAt(i) <= "z") 
			|| (stringToStrip.charAt(i) >= "A" && stringToStrip.charAt(i) <= "Z")) {
			// alert("Found non-alpha character: '" + stringToStrip.charAt(i) + "'");
			stringStripped = stringStripped + stringToStrip.charAt(i); 
			// i--;
			// alert(stringToStrip);
		}

		i++;
	}
	return stringStripped;
}
function checkForPalindrome(checkPalindrome = ""){
	let workingString = checkPalindrome;
	
	// strip spaces, and convert all characters to lowercase for comparison
	workingString = workingString.replace(/ /g,"");
	workingString = workingString.toLowerCase();
	
	// strip non-alhpabetical characters
	workingString = stripNonAlphabeticChars(workingString);

	// don't need to create an array
	// let stringArray = workingString.split("");
	let i = 0;
	let i2 = workingString.length - 1;
	while (i < i2) {
		// alert(workingString.charAt(i) + " " + workingString.charAt(i2));
		if (workingString.charAt(i) != workingString.charAt(i2)) {
			// not a palindrome
			// we are done, exit while
			return "Sorry, '" + workingString + "' is not a palindrome.";
		}
		else {
			i++;
			i2--;
		}
	}
	//alert(workingString)
	// if we got here, it is a palindrome
	// return "'" + checkPalindrome + "' is a palindrome!";
	return "'" + workingString + "' is a palindrome!";
	
}

// runPSPProblem6
// Happy numbers :-)
// A happy number where the last number in the following sequence, for example, is 1:
// 19 is a happy number.  The associated sequence is as follows:
// 1^2 + 9^2 = 82,
// 8^2 + 2^2 = 68,
// 6^2 + 8^2 = 100,
// 1^2 + 0^2 + 0^2 = 1
// The above explanation was excerpted from wikipedia at https://en.wikipedia.org/wiki/Happy_number
// Find the "happy numbers" between 0 and 100;  boundary arbitrarily decided by me

function runPSPProblem6(){
	alert(findHappyNumbers(prompt("Happy Numbers! :-) Enter an upper limit for the check:")));
}
function squareDigitsAndSum(numToSquareDigits){
	// convert this number to a string to loop through
	let thisNumString = numToSquareDigits.toString();
	let thisNumStringArray = thisNumString.split("");
	let squaredSum = 0;		
	// square each digit and add it to the sum
	for (let i = 0; i < thisNumStringArray.length; i++) {
		squaredSum = squaredSum + Number(thisNumStringArray[i]) ** 2;// alert("'" + squaredSum + "'");
	}
	return squaredSum;
}
// find happy numbers from 1 to the upperLimit
function findHappyNumbers(upperLimit){
	// check for a valid input
	if(isNaN(upperLimit) || upperLimit == "") {
		return "Please enter a valid number.";
	}
	let happyNumbers = "";
	let upperLimitNumber = Number(upperLimit);
	// loop from 1 to upper limit
	for (let i = 1; i <= upperLimitNumber; i++) {
		let numIsHappy = false;		
		let numToSquareDigits = i;
		do {
			// square the digits & sum the results
			numToSquareDigits = squareDigitsAndSum(numToSquareDigits);
			// if the result is 1, it's a heppy number ;-), and we're done with this loop
			if (numToSquareDigits === 1) {
				let numIsHappy = true;
				if (happyNumbers.length > 0 ){ happyNumbers = happyNumbers + ", "}
				happyNumbers = happyNumbers + i.toString();
			}
			// if the result was a single digit, we're done with this loop
			else if (numToSquareDigits < 10) {
				let numIsHappy = false;
			}
		} 
		while (numToSquareDigits >= 10);
	}
	// I know this prefix makes this an impure function, but this is just for starters.
	return "Happy numbers are:  " + happyNumbers;
}

// runPSPProblem7
// Prime numbers 
// A prime number is a number that is only divisible by one and itself.
// Write a function that prints out all prime numbers between 1 and 100 

function runPSPProblem7(){
	alert(findPrimeNumbers(prompt("Prime Numbers - Enter an upper limit for the check:")));
}

// Wikipedia states that the prime numbers up to 100 are as follows: 
// 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
// (https://en.wikipedia.org/wiki/List_of_prime_numbers#The_first_1000_prime_numbers)
// With 100 as the upper limit, his function returns the following:
// 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

// Find prime numbers from 1 to the upperLimit
function findPrimeNumbers(upperLimit){
	// check for a valid input
	if(isNaN(upperLimit) || upperLimit == "") {
		return "Please enter a valid number.";
	}
	let primeNumbers = "";

	// loop through numbers
	for (let i = 1; i <= upperLimit; i++){
		let isPrime = true;
		// loop through divisors, starting at 2, to (1/2 * i)
		for (let i2 = 2; i2 <= (i / 2); i2++){
			console.log("i = " + i + ", i2 = " + i2);
			// if the modulus equals 0, this number is not prime.
			if (i % i2 === 0) {
				// number is not prime
				isPrime = false;
				break;
			}
		}
		if(isPrime){
			if (primeNumbers.length > 0) {primeNumbers = primeNumbers + ", "}
			primeNumbers = primeNumbers + i; //.toString;
		}
	}
	// I know this prefix makes this an impure function, but this is just for starters.
	return "Prime numbers are:  " + primeNumbers;
}

// runPSPProblem8
// Fibonacci numbers 
// Fibonacci numbers is a series of numbers in which each number (Fibonacci number ) 
// is the sum of the two preceding numbers. 
// The simplest is the series 1, 1, 2, 3, 5, 8, etc.
// b.	Write a function that does the Fibonacci sequence starting at 1
// c.	HARDER VERSION: Write a function that does the Fibonacci sequence starting at a number that a user inputs

function runPSPProblem8(){
	let firstNumber = prompt("Fibonacci Numbers - Enter the first number:", 0);
	let secondNumber = prompt("Fibonacci Numbers - Enter the second number:", 1);
	let upperLimit = prompt("Fibonacci Numbers - Enter an upper limit for the check:", 10000);
	alert("Your Fibonacci numbers are:  " + findFibonacciNumbers(firstNumber, secondNumber, upperLimit));
}

// Official Fibonacci numbers, from https://en.wikipedia.org/wiki/Fibonacci_number 
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765
// With parameters 0, 1, 10000, this function generates
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765

// Find Fibonacci numbers starting with firstNumber & secondNumber to the upperLimit
function findFibonacciNumbers(firstNumber, secondNumber, upperLimit){
	// check for valid input
	if(isNaN(firstNumber) || firstNumber == "") {
		return "Please enter a valid first number.";
	}
	if(isNaN(secondNumber) || secondNumber == "") {
		return "Please enter a valid second number.";
	}
	if(isNaN(upperLimit) || upperLimit == "") {
		return "Please enter a valid upper limit.";
	}
	let numOne = Number(firstNumber);
	let numTwo = Number(secondNumber);
	let numThree = 0;	
	let fibonacciNumbers = firstNumber + ", " + secondNumber;
	do {
		numThree = numOne + numTwo;
		fibonacciNumbers = fibonacciNumbers + ", " + numThree.toString();
		// reset numOne & numTwo
		numOne = numTwo;
		numTwo = numThree;
	}
	while ((numOne + numTwo) < upperLimit);
	return fibonacciNumbers;
}

// runPSPProblem9
// Expand a string following the pattern "Code" to "CCoCodCode"
function runPSPProblem9(){
	alert("Your string expanded:  " + expandString(prompt("Enter a string:", "Code")));
}

function expandString(stringToExpand = ""){
	let outputString = "";
	for (let i = 0; i <= stringToExpand.length; i++) {
		outputString = outputString + stringToExpand.substring(0, i);
	}
	return outputString;
}

// Run runPSPProblem10
// Consider the leftmost and right most appearances of some value in an array. 
// We'll say that the "span" is the number of elements between the two inclusive. 
// A single value has a span of 1. Returns the largest span found in the given array.
// (Efficiency is not a priority.)
// maxSpan([1, 2, 1, 1, 3]) → 4
// maxSpan([1, 4, 2, 1, 4, 1, 4]) → 6
// maxSpan([1, 4, 2, 1, 4, 4, 4]) → 6

// Note:  this was the 2nd last problem I worked on.  I thought I should start 
// implementing user stories in order to get used to writing them.
// I'm not sure it's a good example, but here's what I've come up with.
// - As a student working on this problem, I need to store each integer value 
//		and its maximum span (so far)
// - As a student working on this problem, I need to compare integer values to all 
// 		other existing integer values, and 
//		either a) if it is the same as an existing integer value, increment its span, 
//		or     b) add a new integer value to the list
// - As a student, I need to store the maximum span found thus far 
//		as I compare each integer value
function runPSPProblem10(){
	alert("Max span is:  " + 
		findMaxSpan(prompt("Enter a list of numbers separated by commas: ", "1, 4, 2, 1, 4, 1, 4")));
}

function findMaxSpan(stringToParse){
	// set up an 2-dimensional array to hold the integer and its span
	//let valueSpan

	// // given
	// let arrayTest = [ [2, 3] , [4, 5] , [6, 7] ];
	// // can change the value 5 to 9 by this statement?
	// arrayTest[1][1] = 9;
	// console.log(arrayTest);
	// console.log(arrayTest[1][0]);
	// console.log(arrayTest[1][1]);

	// using objects
	// let example = { 
	// 	theNumber: 2, 
	// 	span: 3 
	// };
	// example.theNumber = 5

	let arrayTest = [];
	arrayTest.push([2, 3]);
	//arrayTest.push([i,0])
	console.log(arrayTest);
	//console.log(arrayTest([2][2]);

//  FIND OUT SYNTAX FOR REPLACING ALL WITH /g
	
	// strip spaces from the input string
	stringToParse = stripFromString(stringToParse, " ");
	// parse the input string into an array
	let inputParsed = stringToParse.split(",");
	
	console.log(inputParsed);
	let valuesSpans = []; 
	// loop through the input array 
	for (let i = 0; i < inputParsed.length; i++) {
		// look for this value in the array
		let thisIndex = valuesSpans.findIndex(inputParsed(i));
		// if it found it, increment the span
		if (thisIndex >= 0 ) {
			valuesSpans[thisIndex][1]++;
		}
		// else add this number to the array with a span of 1 (per instruction)
		else {
			valuesSpans.push([i, 0])
		}
	}


}

// runPSPProblem11
// Given two strings, base and remove, return a version of the base string 
// where all instances of the remove string have been removed (not case sensitive). 
// You may assume that the remove string is length 1 or more. Remove only 
// non-overlapping instances, so with "xxx" removing "xx" leaves "x".
// withoutString("Hello there", "llo") → "He there"
// withoutString("Hello there", "e") → "Hllo thr"
// withoutString("Hello there", "x") → "Hello there"

function runPSPProblem11(){
	// I need to create a global replace function:
	// from https://www.w3schools.com/js/js_string_methods.asp
	// if (!String.prototype.trim) {
	//   String.prototype.trim = function () {
	//     return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
	// };
	//
	// so I will use the above as a pattern to replace all occurrences 
	//// Unfortunately, it only works after this code runs, so I will remove it and
	// use the original code in stripFromString
	// if (!String.prototype.replaceAll) {
	// 	String.prototype.replaceAll = function (fullString = "", stringToStrip = "") {
	// 		while (fullString.indexOf(stringToStrip) >= 0) {
	// 			fullString = fullString.replace(stringToStrip, "");
	// 		};
	// 		return fullString;
	// 	};
	// };
	let firstString = prompt("Enter a string:", "Hello there");
	let secondString = prompt("Enter a string to remove from the previous string:", "e");
	alert("The answer is: '" + stripFromString(firstString, secondString) + "'");
}


// Replace with an empty string
function stripFromString(fullString, stringToStrip){
	
	// fullString = fullString.replaceAll(fullString, stringToStrip);
	// return fullString;

	// From https://www.w3schools.com/js/js_string_methods.asp:
	// To replace all matches, use a regular expression with a /g flag (global match):
	// Example
	// str = "Please visit Microsoft and Microsoft!";
	// var n = str.replace(/Microsoft/g, "W3Schools");

	// However, the following lines do not work;  
	// I don't know how to get it to to a global replace with a variable;
	// that seems like a basic necessity for any programming language.
	// Perhaps it is "because JavaScript?""
	// let workingString = fullString.replace(stringToStrip/g, "");
	// let workingString = fullString.replace((stringToStrip)/g, "");
	// let workingString = fullString.replace(/stringToStrip/g, "");

	// I guess I will have to loop to find/replace all

	while (fullString.indexOf(stringToStrip) >= 0) {
		fullString = fullString.replace(stringToStrip, "");
	}
	return fullString;
}

// runPSPProblem12
// Given a string, return the sum of the numbers appearing in the string, ignoring all other characters. A number is a series of 1 or more digit chars in a row. (Note: !isNaN(parseInt(char))) tests if a char a number. parseInt(string) converts a string to an int.)
// sumNumbers("abc123xyz") → 123
// sumNumbers("aa11b33") → 44
// sumNumbers("7 11") → 18

function runPSPProblem12(){
	alert("This code is incomplete.");
	return;
	alert("The sum is:  " + 
		sumNumbersInString(prompt("Enter a string with numbers embedded, to sum the numbers: ", "1, 4, 2, 1, 4, 1, 4")));
}

function sumNumbersInString(stringToParse){
	
}


// runPSPProblem13
// Given a non-empty array, return true if there is a place to split the array 
// so that the sum of the numbers on one side is equal to the sum of the numbers 
// on the other side.
// canBalance([1, 1, 1, 2, 1]) → true
// canBalance([2, 1, 1, 2, 1]) → false
// canBalance([10, 10]) → true
// 1,1,1,1,1,1,1,1,1,1,2,2,2,2 = true, position 8
// Dean's note:  If it can be split equally, I will return WHERE it can be split
function runPSPProblem13(){
	
	let positionAfter = findEqualSums(prompt("Enter a list of numbers separated by commas: ", "1, 1, 1, 2, 1"));
	if (positionAfter < 0 ) {
		alert("This list cannot be summed equally at any point.");
	}
	else {
		alert("This list can be summed equally by splitting AFTER index position " + positionAfter + ".");
	}
}

function findEqualSums(stringToParse){

	// remove spaces, then parse to array
	// let workingString = stringToParse.replace(" ", "");
	let workingString = stripFromString(stringToParse, " ");
	let stringParsed = workingString.split(",");

	// replace with a function sumNumbersInArray(startPosition, endPosition

	// for each position, sum left & right - if equal, return the position (i)
	for (let i = 0; i < stringParsed.length; i++) {
		let sumLeft = 0;
		let sumRight = 0;
		for (let i2 = 0; i2 < stringParsed.length; i2++) {
			if (i2 <= i) {
				sumLeft = sumLeft + Number(stringParsed[i2]);
			}
			else {
				sumRight = sumRight + Number(stringParsed[i2]);
			}
		}
		if (sumLeft == sumRight) {
			return i;
		}
	}
	// if we got here, we did not find a match
	return -1;
}

