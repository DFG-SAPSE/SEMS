export const isIntervalValid = (interval) => {
	return interval[0] < interval[1];
};

export const sortIntervals = (intervals) => {
	return intervals.sort((a, b) => a[0] - b[0]);
};

export const areIntervalsOverlapping = (intervals) => {
	for (let i = 0; i < intervals.length - 1; i++) {
		if (intervals[i][1] > intervals[i + 1][0]) {
			return true;
		}
	}
	return false;
};

export const sortAvailability = (availability) => {
	return availability.map((daySlots) => {
		// Validate and sort time slots based on the start time
		const sortedDaySlots = daySlots
			.filter((slot) => slot[0] < slot[1]) // Remove invalid time slots
			.sort((slot1, slot2) => {
				// Ensure the start time of each slot is sorted
				return Math.min(...slot1) - Math.min(...slot2);
			});

		// Check if the sorted array has the same length as the original array
		// and if none of the arrays is empty
		if (
			sortedDaySlots.length === daySlots.length &&
			sortedDaySlots.every((slot) => slot.length > 0)
		) {
			return sortedDaySlots;
		} else {
			return false;
		}
	});
};
