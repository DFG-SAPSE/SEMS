import { firestore, auth } from './config.js';
import firebase from 'firebase/app';
import COLLECTION_NAMES from './collectionNames.js';

export const getAvailableStartTimes = (
	date,
	weeklyHours,
	bookedMeetings,
	startTimeIncrement,
	breakTimeLength,
	meetingLength,
) => {
	// Check if a potential meeting slot overlaps with any booked meeting
	const isOverlap = (potentialStart, meeting) => {
		const potentialEnd = potentialStart + meetingLength + breakTimeLength;
		return (
			potentialStart < meeting.endTime && potentialEnd > meeting.startTime
		);
	};

	// Generate start times within a time slot
	const generateStartTimes = (slot) => {
		let startTimes = [];
		for (
			let time = slot[0];
			time + meetingLength + breakTimeLength <= slot[1];
			time += startTimeIncrement
		) {
			startTimes.push(time);
		}
		return startTimes;
	};

	// Get day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
	const dayOfWeek = date.getDay();

	// Get available slots for that day
	const availableSlots = weeklyHours[dayOfWeek];

	// Get all potential start times within the available slots
	let potentialStartTimes = availableSlots.flatMap((slot) =>
		generateStartTimes(slot),
	);

	// Filter out start times that overlap with booked meetings
	return potentialStartTimes.filter(
		(startTime) =>
			!bookedMeetings.some((meeting) => isOverlap(startTime, meeting)),
	);
};

export const finalizeBooking = async (bookingData, consultantId) => {
	// add the meeting to the bookedMeetings field of the consultant
	try {
		const docRef = firestore
			.collection(COLLECTION_NAMES.CONSULTANTS)
			.doc(consultantId);

		await docRef.update({
			bookedMeetings:
				firebase.firestore.FieldValue.arrayUnion(bookingData),
		});
	} catch (error) {
		return {
			data: null,
			error: Error('Error registering meeting for consultant: ', error),
			ok: false,
		};
	}

	// retrieve the current user's id, add the meeting to the bookedMeetings field
	const user = auth.currentUser;
	if (!user) return { data: null, error: Error('No user logged in') };

	const entrepreneurId = user.uid;
	try {
		const docRef = firestore
			.collection(COLLECTION_NAMES.ENTREPRENEURS)
			.doc(entrepreneurId);

		await docRef.update({
			bookedMeetings:
				firebase.firestore.FieldValue.arrayUnion(bookingData),
		});
	} catch (error) {
		return {
			data: null,
			error: Error('Error registering meeting for entrepreneur: ', error),
			ok: false,
		};
	}

	return { data: 'Success!', error: null, ok: true };
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
