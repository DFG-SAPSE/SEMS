import React, { createContext, useEffect } from 'react';
import { useImmer } from 'use-immer';
import { fetchUserProfilev2 } from '../services/user';

const DEFAULT_USER_DATA = {
	name: '',
	email: '',
	password: '',
	photoURL: '',
	isConsultant: true,
	enterpriseID: '',
	specialty: [],
	experienceYears: 0,
	description: '',
	availability: [[], [], [], [], [], [], []],
	meetingConfig: {
		startTimeIncrement: 0,
		breakTimeLength: 0,
	},
	bookedMeetings: [],
	services: [
		{
			name: '',
			price: 0,
			meetingLength: 0,
			questions: [],
		},
	],
};

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
	const [userData, setUserData] = useImmer(DEFAULT_USER_DATA);

	// use a useEffect to make call to firebase whenever userData changes

	useEffect(() => {
		login('dummy', 'function call');
	}, []);

	const login = async (username, password) => {
		const res = await fetchUserProfilev2(username);
		setUserData(res);
	};

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

	const contextValue = {
		userData,
		login,
		updateAvailability,
		updateMeetingConfig,
		updatePricing,
		updateMeetingLength,
	};

	return (
		<UserContext.Provider value={contextValue}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
