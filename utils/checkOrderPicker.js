export const sortAvailability = (availability) => {
	return availability.map((day) => {
		// Validate and sort time slots based on the start time
		const sortedDay = day
			.filter((slot) => slot[0] < slot[1]) // Remove invalid time slots
			.sort((slot1, slot2) => {
				// Ensure the first number in each array is the smallest
				return Math.min(...slot1) - Math.min(...slot2);
			});

		// Check if the sorted array has the same length as the original array
		if (sortedDay.length === day.length) {
			return sortedDay;
		} else {
			return false;
		}
	});
};
