export const fetchUserProfile = (id) => {
	// This is a dummy function that mimics fetching data from a server
	// Replace this with actual API call logic when backend is ready
	return new Promise((resolve) => {
		setTimeout(() => {
			const consultant = {
				consultantId: '123',
				name: 'Beatrice Andrea',
				avatar: 'https://picsum.photos/200/300',
				title: 'Community Developer',
				company: 'Eco Harvest',
				services: [
					{
						name: 'General consultation',
						questions: [
							'What is your main goal for this consultation?',
							'Do you have any specific questions or topics you want to cover?',
						],
						price: 297.6, // per hour, in PHP
					},
					{
						name: 'Special consultation',
						questions: [
							'Why do you need special consultation?',
							'Do you have any specific questions or topics you want to cover?',
						],
						price: 2974.6, // per hour, in PHP
					},
				],
			};
			resolve(consultant);
		}, 1000);
	});
};

export const fetchUserProfilev2 = (id) => {
	// This is a dummy function that mimics fetching data from a server
	// Replace this with actual API call logic when backend is ready
	return new Promise((resolve) => {
		setTimeout(() => {
			const consultant = {
				name: 'Jane Doe',
				email: 'jdoe@consultant.com',
				password: '12345678',
				photoURL: 'https://picsum.photos/200/300',
				isConsultant: true,
				enterpriseID: 'pvwkw0238',
				specialty: ['Financial Development', 'Community Development'],
				experienceYears: '4',
				description: 'Book me since I am great!!',
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
			resolve(consultant);
		}, 1000);
	});
};
