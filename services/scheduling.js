export const fetchAvailableTimes = (id, date) => {
	// This is a dummy function that mimics fetching data from a server
	// Replace this with actual API call logic when backend is ready
	return new Promise((resolve) => {
		setTimeout(() => {
			const times = ['9:00am', '10:00am', '11:00am', '12:00pm', '2:00pm'];
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
					meetingId: '123',
					message: 'Booking finalized successfully.',
				});
			} else {
				reject({ ok: false, message: 'Failed to finalize booking.' });
			}
		}, 1000); // simulate a network delay
	});
};

export const cancelMeeting = (meetingId) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const success = true;

			if (success) {
				resolve({
					ok: true,
					message: `Meeting with ID ${meetingId} was successfully cancelled.`,
				});
			} else {
				reject({
					ok: false,
					message: `Failed to cancel meeting with ID ${meetingId}.`,
				});
			}
		}, 2000);
	});
};
