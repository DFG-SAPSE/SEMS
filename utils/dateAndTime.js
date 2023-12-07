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
