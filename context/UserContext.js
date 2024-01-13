import React, { createContext, useEffect, useState } from 'react';
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
	const [userData, setUserData] = useState(DEFAULT_USER_DATA);

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

	const contextValue = {
		userData,
		login,
		updateAvailability,
		updateMeetingConfig,
	};

	return (
		<UserContext.Provider value={contextValue}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
