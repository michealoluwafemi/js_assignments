//task 1 >> Fortune Teller

function tellFortune(numOfchild, nameOfPartner, geoLocation, jobTitle, ) {
	console.log("You will be a "+jobTitle+" in "+geoLocation+" and married to "+nameOfPartner+" with "+numOfchild+" kids");
}
console.log("Task 1");
tellFortune(4, "Seyi", "Lagos", "Bank Manager");
tellFortune(2, "Mirabel", "Ibadan", "UI/UX Designer");
tellFortune(3, "Dokubo", "Abuja", "Project Manager");

//create a line break
console.log("\nTask 2");
//task 2 >> Supply Calculator

function calculateSupply(age, amtPerDay) {
	const maxAge = 90;
	let leftYears = maxAge - age;
	let amtNeed = Math.round(leftYears * amtPerDay * 365);
	console.log("You will need #"+amtNeed+" to last you till the ripe age of "+maxAge);
}
calculateSupply(76, 2000.55);
calculateSupply(20, 5000);
calculateSupply(30, 10000);

//create a line break
console.log("\nTask 3");
//task 3 >> Dash between Even Numbers

function evenNumberDash() {
	let nums = prompt("Enter a string of number");
	//create array to split the numbers into
	let numSplit = [];
	//variable to hold retuned text
	let returnedString = "";
	//split the numbers, and copy them into the array
	for (let i = 0; i < nums.length; i++) {
		numSplit[i] = nums[i];
	}
	//go through the array and add dash where necessary
	for (let i = 0; i < numSplit.length; i++) {
		let temp;
		if ( ((numSplit[i]%2) == 0) && ((numSplit[i+1]%2) == 0) ) {
			temp = numSplit[i]+"-";
			returnedString = returnedString+temp;
		}
		else {
			returnedString = returnedString+numSplit[i];
		}
	}
	console.log(returnedString);
}
evenNumberDash();

//create a line break
console.log("\nTask 4");
//task 4 >> Array Sort

function sortArray() {
	let bucket = [];
	let x;
	//enter numbers to sort
	while (x != "") {
		x = prompt("Enter the Numbers you want to sort one after the other");
		if (x != "") {
			bucket.push(x);
		}
	}
	//let's sort our array now
	function sortNum (a, b) {
		return a - b;
	}
	bucket.sort(sortNum);
	console.log(bucket);
}
sortArray();

//create a line break
console.log("\nTask 5");
//task 5 >> Switch Case

function switchAlphCase() {
	let str = prompt("Enter Sentence or String");
	//create array

	let strArray = [];
	//put in another variable
	let str_2 = "";
	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i].toUpperCase()) {
			str[i] = str[i].toLowerCase();
		}
		else {
			str[i] = str[i].toUpperCase();
		}
		strArray.push(str[i]);
	}
	//do conversion now
	for (let i = 0; i < strArray.length; i++) {
		if (strArray[i] === strArray[i].toUpperCase()){
			str_2 = str_2 + strArray[i].toLowerCase();
		}
		else {
			str_2 = str_2 + strArray[i].toUpperCase();
		}
	}	

	console.log(str_2);
}
switchAlphCase();

//create a line break
console.log("\nTask 6");
//task 6 >> Mode

function findMode(x) {
	let mapping	= {};
	for (let i = 0; i < x.length; i++) {
		if (mapping[x[i]] === undefined) {
			mapping[x[i]] = 0;
		}
		mapping[x[i]] = mapping[x[i]]+1;

	}
	let y = 0; //greatest
	let mode;
	for (let prop in mapping) {
		if (mapping[prop] > y) {
			y = mapping[prop];
			mode = prop;
		}
	}

	console.log(mode+" has the highest frequency of "+y);
}
findMode([2, 3, 3, 4, 3, 3, 5, 5, 1, 3]);

//create a line break
console.log("\nTask 7");
//task 7 >> Join Array Element into String

function arrayJoin() {
	let myColor = ["Red", "Green", "White", "Black"];
	let str = "";
	for (let i = 0; i < myColor.length-1; i++) {
		str = str + myColor[i]+", ";
	}
	str = str + myColor[myColor.length-1];
	console.log(str);
}
arrayJoin();

//create a line break
console.log("\nTask 8");
//task 8 >> Join Remove Duplicates from Array

function removeDuplicates(x) {
	let temp = [];

	console.log(temp);
}
removeDuplicates([1, 1, 1, 2, 3, 4]);

//create a line break
console.log("\nTask 9");
//task 9 >> Shuffle Array
function shuffleArray(x) {
	let y = x.length, z, temp;
	while (0 !== y)  {
		z = Math.floor(Math.random() * y);
		y = y - 1;
		temp = x[y];
		x[y] = x[z];
		x[z] = temp;
	}

	console.log(x);
	
}

shuffleArray([2, 4, 1, 9]);

//create a line break
console.log("\nTask 10");
//task 10 >> Join Remove Duplicates from Array
function removeStuffs(x) {
	let temp = [];
	for (let i = 0; i < x.length; i++) {
		if (x[i] !== null && x[i] != 0 && x[i] !== "NaN" && x[i] !== undefined && x[i] !== false) {
			temp.push(x[i]);
		}
	}
	console.log(temp);
}
removeStuffs([false, null, "NaN", 0, "hi", 2, undefined, "88"]);

//create a line break
console.log("\nTask 11");
//task 11 >> Teacher Object
let Person = {
	isTeacher : true,
};

let Teacher = {
	teach: function(x) {
		console.log("The Teacher teaches " + x);
	},
	__proto__: Person,
}
if (Person.isTeacher) {
	//alert(Teacher.isTeacher);
	Teacher.teach("English");
}

//create a line break
console.log("\nTask 12");
//task 12 >> Song Constructor
function Song(title, artist) {
	this.songTitle = title;
	this.songArtist = artist;
}

let music = new Song("Imela", "Nathaniel Bassey");
music.play = function() {
	console.log("Playing " + this.songTitle + " By " + this.songArtist + "...");
}
music.play();

//create a line break
console.log("\nTask 13");
//task 13 >> Birthday
function setBirthTime() {
	let date = new Date();
	let h = date.getTime();
	console.log(h);
}
setBirthTime();

//create a line break
console.log("\nTask 14");
//task 14 >> Diagonal Table Styling

function displayTable() {
	let table = document.getElementById("myTable");
	let row;
	let col;
	for (let i = 5; i >= 1; i--) {
		row = table.insertRow(0);
		for (let j = 5; j >= 1; j--) {
			col = row.insertCell(0);
			col.innerHTML = j + " : " + i;

			if (j == i) {
				col.style.backgroundColor = "Red";
			}
			//console.log(j +" , " +i);
		}
	}
}