import React, { createContext, useEffect, useState } from 'react';
import { useImmer } from 'use-immer';
import { getAuthChange } from '../services/auth';
import { cancelMeeting } from '../services/scheduling';
import { fetchConsultantById, fetchEntrepreneurById } from '../services/user';

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
	const [userData, setUserData] = useImmer({});
	const [isUserLoading, setIsUserLoading] = useState(true);

	useEffect(() => {
		getAuthChange((d) => {
			setUserData(d);
			setIsUserLoading(false);
		});

		// TODO: Add clean up function to unsub from onAuthStateChanged
	}, [setUserData]);

	const updateAvailability = (newAvailability) => {
		setUserData((prevUserData) => ({
			...prevUserData,
			availability: newAvailability,
		}));
	};

	const updateMeetingConfig = (newTimeIncrement, newBreakTimeLength) => {
		setUserData((prevUserData) => ({
			...prevUserData,
			meetingConfig: {
				startTimeIncrement: newTimeIncrement,
				breakTimeLength: newBreakTimeLength,
			},
		}));
	};

	// When the pricing is handled
	const updatePricing = (newPrice) => {
		setUserData((prevUserData) => {
			prevUserData.services[0].price = newPrice;
		});
	};

	const updateMeetingLength = (newMeetingLength) => {
		setUserData((prevUserData) => {
			prevUserData.services[0].meetingLength = newMeetingLength;
		});
	};

	const updateExceptions = (newExceptionText) => {
		setUserData((prevUserData) => {
			prevUserData.exceptions = newExceptionText;
		});
	};

	const updateMeetingLink = (meetingLink) => {
		setUserData((prev) => {
			prev.meetingLink = meetingLink;
		});
	};

	const handleAddMeeting = async (bookingData) => {
		userData.bookedMeetings.push({
			...bookingData,
		});
	};

	const handleCancelMeeting = async (invitee, startTime) => {
		const res = await cancelMeeting(
			userData.id,
			invitee,
			startTime,
			userData.isConsultant,
		);

		if (res.ok) {
			setUserData((prev) => {
				prev.bookedMeetings = prev.bookedMeetings.filter((meeting) => {
					return !(
						meeting.invitee === invitee &&
						meeting.startTime === startTime
					);
				});
			});
		} else {
			console.error('Cannot cancel meeting');
		}
	};

	const fetchUserData = async () => {
		const fetchPerson = userData.isConsultant
			? fetchConsultantById
			: fetchEntrepreneurById;

		const res = await fetchPerson(userData.id);
		if (res.ok) setUserData(res.data);
	};

	const contextValue = {
		userData,
		isUserLoading,
		updateAvailability,
		updateMeetingConfig,
		updatePricing,
		updateMeetingLength,
		updateExceptions,
		updateMeetingLink,
		handleAddMeeting,
		handleCancelMeeting,
		fetchUserData,
	};

	return (
		<UserContext.Provider value={contextValue}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
