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
	startTimeIncrement: 0,
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

	const updateTimeIncrement = (newTimeIncrement) => {
		setUserData((prevUserData) => ({
			...prevUserData,
			startTimeIncrement: newTimeIncrement,
		}));
	};

	const contextValue = {
		userData,
		login,
		updateAvailability,
		updateTimeIncrement,
	};

	return (
		<UserContext.Provider value={contextValue}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
