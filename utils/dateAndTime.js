export const convertTo24HourFormat = (str) => {
	// Check if the time is AM or PM
	const isPM = str.indexOf("pm") > -1;
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
	return hours.toString().padStart(2, "0") + ":" + minutes;
};

export const timeStampToDateTime = (timestamp) => {
	const date = new Date(timestamp);
	return date.toLocaleString(); // Adjust this to your preferred format
};
