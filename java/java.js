$(document).ready(function() {

	function displayCurrentTime() {

		// Variables are defined here, retrieves current time with hours, seconds, and minutes
		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();
		var meridiem = " AM";

		// These next two if statements determine the meridiem (AM/PM)
		// This is for the clock so it is not on 24-hour time
		// 0 will not display if it is midnight
		if (hours > 12) {
			hours = hours - 12;
			meridiem = " PM";
		}
		if (hours === 0) {
			hours = 12;
		}

		// These three if statements make sure there is an extra zero added to the display
		if (seconds < 10) {
			seconds = "0" + seconds;
		}
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		if (hours < 10) {
			hours = "0" + hours;
		}

		// This block makes the clock div block display the time
		var clockDiv = document.getElementById('clock');
		clockDiv.innerText = hours + ":" + minutes + ":" + seconds + meridiem;

	}

	function displayCurrentDate() {

		// Variables to retrieve the different parts of the date are defined here
		var currentDate = new Date();
		var day = currentDate.getDay();
		var date = currentDate.getDate();
		var month = currentDate.getMonth();
		var year = currentDate.getFullYear();

		// First set of if and else if statements assign a string value to the previous variables
		// Since, when retrieved, they are as integers rather than words
		// 1 is Sunday, 2 is Monday, etc.
		if (day = 1) {
			day = "Sunday";
		}

		else if (day = 2) {
			day = "Monday";
		}

		else if (day = 3) {
			day = "Tuesday";
		}

		else if (day = 4) {
			day = "Wednesday";
		}

		else if (day = 5) {
			day = "Thursday";
		}

		else if (day = 6) {
			day = "Friday";
		}

		else if (day = 7) {
			day = "Saturday";
		}

		// This only executes if the date is singular number, like 1, 3, or 4
		// Won't execute if the date has 2 numbers, like 24
		if (date < 10) {
			date = "0" + date;
		}

		// This set of if and else if statements assign a string value to the month variable
		// Since, when retrieved, they are as integers rather than words
		// 0 is January, 1 is February, etc. until 11 is December
		if (month = 0) {
			month = "January";
		}

		else if (month = 1) {
			month = "February";
		}

		else if (month = 2) {
			month = "March";
		}

		else if (month = 3) {
			month = "April";
		}

		else if (month = 4) {
			month = "May";
		}

		else if (month = 5) {
			month = "June";
		}

		else if (month = 6) {
			month = "July";
		}

		else if (month = 7) {
			month = "August";
		}

		else if (month = 8) {
			month = "September";
		}

		else if (month = 9) {
			month = "October";
		}

		else if (month = 10) {
			month = "November";
		}

		else if (month = 11) {
			month = "December";
		}

		// This block of code makes the date div display the date
		var dateTodayDiv = document.getElementById('dateToday');
		dateTodayDiv.innerText = day + ", " + month + " " + date + ", " + year;

	}

	// This runs the displayTime function every 1000 milliseconds
	// Basically, the time will update every second
	displayCurrentTime();
	setInterval(displayCurrentTime, 1000);

	// This runs the displayTime function every 1000 milliseconds
	// Basically, the date will update every second
	displayCurrentDate();
	setInterval(displayCurrentTime, 1000);

});