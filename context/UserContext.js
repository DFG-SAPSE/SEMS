import React, { createContext, useEffect } from 'react';
import { useImmer } from 'use-immer';
import { getAuthChange } from '../services/auth';

const DEFAULT_USER_DATA = {
	name: 'Jane Doe',
	email: 'jdoe@consultant.com',
	password: '12345678',
	photoURL: 'https://picsum.photos/200/300',
	isConsultant: true,
	enterpriseID: 'pvwkw0238',
	specialty: ['Financial Development', 'Community Development'],
	experienceYears: '4',
	description: 'Book me since I am great!!',
	exceptions:
		'I am not available Tuesday Jan 23, 2024 and Wednesday 23, 2024',
	availability: [
		[
			[540, 675],
			[840, 1065],
		],
		[
			[960, 1080],
			[1260, 1350],
		],
		[
			[540, 675],
			[840, 1065],
		],
		[
			[960, 1080],
			[1260, 1350],
		],
		[
			[540, 675],
			[840, 1065],
		],
		[
			[960, 1080],
			[1260, 1350],
		],
		[
			[960, 1080],
			[1260, 1350],
		],
	],
	meetingConfig: {
		startTimeIncrement: 15,
		breakTimeLength: 10,
	},
	bookedMeetings: [
		{
			invitee: 'John Constantine',
			service: 0, // either index of service in services array or other id
			date: '18/12/2023',
			startTime: 540,
			endTime: 585,
		}, // Meeting on day 18/12/2023, from 9 - 9.45am
		{
			invitee: 'Dorothy Channel',
			service: 0, // either index of service in services array or other id
			date: '19/12/2023',
			startTime: 960,
			endTime: 1000,
		}, // Meeting on day 19/12/2023, from 9 - 9.45am
	],
	services: [
		{
			name: 'General consultation',
			questions: [
				'What is your main goal for this consultation?',
				'Do you have any specific questions or topics you want to cover?',
			],
			price: 297.6,
		},
		{
			name: 'Special consultation',
			questions: [
				'Why do you need special consultation?',
				'Do you have any specific questions or topics you want to cover?',
			],
			price: 2974.6,
		},
	],
};

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
	const [userData, setUserData] = useImmer(DEFAULT_USER_DATA);

	useEffect(() => {
		getAuthChange(setUserData);

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

	const contextValue = {
		userData,
		updateAvailability,
		updateMeetingConfig,
		updatePricing,
		updateMeetingLength,
		updateExceptions,
		updateMeetingLink,
	};

	return (
		<UserContext.Provider value={contextValue}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
