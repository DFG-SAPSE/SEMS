const User = () => {
	return {
		name: '',
		email: '',
		photoURL: '',
		isConsultant: null, // boolean
		enterpriseID: '',
		expertise: [],
		experienceYears: null, // number
		description: '',
		exceptions: '',
		availability: JSON.stringify([[], [], [], [], [], [], []]),
		meetingConfig: {
			startTimeIncrement: 15,
			breakTimeLength: 0,
		},
		bookedMeetings: [],
		services: [
			{
				name: '',
				price: 0,
				meetingLength: 30,
				questions: [],
			},
		],
		geographic_regions: [],
	};
};

export default User;
