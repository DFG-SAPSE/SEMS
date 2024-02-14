import { firestore, auth } from './config.js';
import {
	doc as createDocRef,
	getDoc,
	updateDoc,
	collection,
	arrayUnion,
} from 'firebase/firestore';
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
		// potentialStart = 7pm, meeting: 6-7pm
		const potentialEnd = potentialStart + meetingLength + breakTimeLength;
		return (
			potentialStart < meeting.endTime + breakTimeLength &&
			potentialEnd > meeting.startTime
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
	const startTimes = potentialStartTimes.filter(
		(startTime) =>
			!bookedMeetings.some((meeting) => isOverlap(startTime, meeting)),
	);

	return startTimes;
};

export const finalizeBooking = async (bookingData, consultantId) => {
	// retrieve the current user's id, add the meeting to the bookedMeetings field
	const user = auth.currentUser;
	if (!user) return { data: null, error: 'No user logged in', ok: false };
	const entrepreneurId = user.uid;

	// add the meeting to the bookedMeetings field of the consultant

	try {
		const docRef = createDocRef(
			collection(firestore, COLLECTION_NAMES.CONSULTANTS),
			consultantId,
		);

		bookingData.invitee = entrepreneurId;

		await updateDoc(docRef, {
			bookedMeetings: arrayUnion(bookingData),
		});
	} catch (error) {
		return {
			data: null,
			error: 'Error registering meeting for consultant: ' + error.message,
			ok: false,
		};
	}

	try {
		const docRef = createDocRef(
			collection(firestore, COLLECTION_NAMES.ENTREPRENEURS),
			entrepreneurId,
		);

		bookingData.invitee = consultantId;

		await updateDoc(docRef, {
			bookedMeetings: arrayUnion(bookingData),
		});
	} catch (error) {
		return {
			data: null,
			error:
				'Error registering meeting for entrepreneur: ' + error.message,
			ok: false,
		};
	}

	return { data: 'Success!', error: null, ok: true };
};

export const cancelMeeting = async (
	currentUserId,
	otherUserId,
	startTime,
	isConsultant,
) => {
	let res;
	// Cancel meeting for current user
	res = await _cancelMeeting(
		currentUserId,
		otherUserId,
		startTime,
		isConsultant,
	);
	if (!res.ok) {
		return res;
	}

	// Cancel meeting for the other user
	res = await _cancelMeeting(
		otherUserId,
		currentUserId,
		startTime,
		!isConsultant,
	);
	if (!res.ok) {
		res.error = 'Already canceled meeting for current user' + res.ok;
		return res;
	}

	return res;
};

const _cancelMeeting = async (
	currentUserId,
	otherUserId,
	startTime,
	isConsultant,
) => {
	const collectionName = isConsultant
		? COLLECTION_NAMES.CONSULTANTS
		: COLLECTION_NAMES.ENTREPRENEURS;

	const docRef = createDocRef(firestore, collectionName, currentUserId);

	try {
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			const data = docSnap.data();
			const bookedMeetings = data.bookedMeetings || [];

			// Remove the meeting that matches the criteria
			const updatedMeetings = bookedMeetings.filter((meeting) => {
				return !(
					meeting.invitee === otherUserId &&
					meeting.startTime === startTime
				);
			});

			await updateDoc(docRef, {
				bookedMeetings: updatedMeetings,
			});

			return { data: null, error: null, ok: true };
		}

		return { data: null, error: 'Document does not exist', ok: false };
	} catch (error) {
		return {
			data: null,
			error: 'Error canceling meeting for current user',
			ok: false,
		};
	}
};
