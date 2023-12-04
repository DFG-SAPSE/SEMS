export const fetchAvailableTimes = (id, date) => {
	// This is a dummy function that mimics fetching data from a server
	// Replace this with actual API call logic when backend is ready
	return new Promise((resolve) => {
		setTimeout(() => {
			const times = [
				"9:00am",
				"10:00am",
				"11:00am",
				"12:00pm",
				"1:00pm",
				"2:00pm",
			];
			resolve(times);
		}, 1000);
	});
};

export const finalizeBooking = (bookingData) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// Here we are simulating a successful API call
			// In a real application, this would be replaced with an actual API call

			// Simulate a successful response or an error based on some condition
			const isSuccess = true;

			if (isSuccess) {
				resolve({
					ok: true,
					message: "Booking finalized successfully.",
				});
			} else {
				reject({ ok: false, message: "Failed to finalize booking." });
			}
		}, 1000); // simulate a network delay
	});
};
