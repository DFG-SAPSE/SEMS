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
				questions: [
					'What is your main goal for this consultation?',
					'Do you have any specific questions or topics you want to cover?',
				],
			};
			resolve(consultant);
		}, 1000);
	});
};
