export const convertTo24HourFormat = (str) => {
	// Check if the time is AM or PM
	const isPM = str.indexOf('pm') > -1;
	const timeParts = str.match(/\d+|\D+/g); // Split into components

	let hours = parseInt(timeParts[0], 10);
	const minutes = timeParts[2];

	// Convert to 24-hour format if necessary
	if (isPM && hours < 12) {
		hours += 12;
	} else if (!isPM && hours === 12) {
		hours = 0;
	}

	// Reconstruct the time string in 24-hour format
	return hours.toString().padStart(2, '0') + ':' + minutes;
};

export const timeStampToDateTime = (timestamp) => {
	const date = new Date(timestamp);
	return date.toLocaleString(); // Adjust this to your preferred format
};

export const formatDateAndTime = (timestamp) => {
	// Create a Date object from the timestamp
	var date = new Date(timestamp);

	// Format the date as YYYY-MM-DD
	var year = date.getFullYear();
	var month = date.getMonth() + 1; // getMonth() returns month from 0-11
	var day = date.getDate();
	var formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day
		.toString()
		.padStart(2, '0')}`;

	// Format the time as XX:XXAM or XX:XXPM
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	var formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
		.toString()
		.padStart(2, '0')}${ampm}`;

	return { date: formattedDate, time: formattedTime };
};

export const convertMinutesToTime = (minutesSinceMidnight) => {
	// First, calculate the hours and minutes
	let hours = Math.floor(minutesSinceMidnight / 60);
	let minutes = minutesSinceMidnight % 60;

	// Format the minutes to always be two digits
	minutes = minutes < 10 ? '0' + minutes : minutes;

	// Determine whether it's AM or PM
	const ampm = hours >= 12 ? 'pm' : 'am';

	// Convert 24-hour time to 12-hour format
	hours = hours % 12;

	// 0 o'clock should be represented as 12 AM
	hours = hours ? hours : 12;

	// Return the formatted time string
	return `${hours}:${minutes} ${ampm}`;
};

export const generate15MinuteIntervals = () => {
	const intervals = [];
	const totalMinutesInADay = 24 * 60;

	for (let minute = 0; minute < totalMinutesInADay; minute += 15) {
		intervals.push(minute);
	}

	return intervals;
};

export const formatDate = (date) => {
	var year = date.getFullYear();

	// getMonth() returns 0-11, add 1 to make it 1-12
	// Use 'padStart' to add a leading zero for months 1-9
	var month = (date.getMonth() + 1).toString().padStart(2, '0');

	// getDate() returns 1-31
	// Use 'padStart' to add a leading zero for days 1-9
	var day = date.getDate().toString().padStart(2, '0');

	// Construct the formatted date string
	return year + '-' + month + '-' + day;
};
