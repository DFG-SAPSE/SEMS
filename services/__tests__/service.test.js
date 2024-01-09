// __tests__/service.test.js
// Unit tests for service.js functions
// querying the Google Firestore database

// mock Firebase App and Firestore
jest.mock('firebase/app', () => ({
	apps: [],
	initializeApp: jest.fn().mockReturnThis(),
	firestore: jest.fn(() => mockFirestore),
}));

const mockFirestore = {
	collection: jest.fn().mockReturnThis(),
	where: jest.fn().mockReturnThis(),
	get: jest.fn(),
};

// we import the functions we want to test
const { searchConsultants, filterConsultants } = require('../service.js');

describe('searchConsultants', () => {
	beforeEach(() => {
		jest.clearAllMocks();

		// mock implementation for 'get' to simulate fetching consultants
		// set up mock data
		mockFirestore.get.mockImplementation(() => {
			return Promise.resolve({
				forEach: (callback) => {
					const mockDocs = [
						{ id: '1', data: () => ({ name: 'John Doe' }) },
						{ id: '2', data: () => ({ name: 'Jane Smith' }) },
						{ id: '3', data: () => ({ name: 'Emily Johnson' }) },
						{ id: '4', data: () => ({ name: 'Alice Williams' }) },
						{ id: '5', data: () => ({ name: 'Charlie Dude' }) },
						{ id: '6', data: () => ({ name: 'Emily Nice' }) },
						{ id: '7', data: () => ({ name: 'Michael Davis' }) },
						{ id: '8', data: () => ({ name: 'Olivia Wilson' }) },
						{ id: '9', data: () => ({ name: 'William Thompson' }) },
						{
							id: '10',
							data: () => ({ name: 'William Anderson' }),
						},
					];
					mockDocs
						.filter(
							(doc) =>
								doc.data().name ===
								mockFirestore.where.mock.calls[0][2],
						)
						.forEach(callback);
				},
			});
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should return the name John Doe', async () => {
		const consultants = await searchConsultants('John Doe');
		expect(consultants.length).toBe(1);
		expect(consultants[0].name).toEqual('John Doe');
	});

	it('should return the name Emily Johnson', async () => {
		const consultants = await searchConsultants('Emily Johnson');
		expect(consultants.length).toBe(1);
		expect(consultants[0].name).toEqual('Emily Johnson');
	});

	it('should return an empty array when the name is not found', async () => {
		// adjust mock to return no documents
		mockFirestore.get.mockResolvedValue({ forEach: jest.fn() });
		const consultants = await searchConsultants('Unknown Name');
		expect(consultants).toEqual([]);
	});

	it('should handle errors correctly', async () => {
		mockFirestore.get.mockRejectedValueOnce(
			new Error('Error fetching consultants'),
		);
		try {
			await searchConsultants('John Doe');
		} catch (error) {
			expect(error).toEqual(new Error('Error fetching consultants'));
		}
	});
});

describe('filterConsultants', () => {
	beforeEach(() => {
		jest.clearAllMocks();

		// mock implementation for 'get' to simulate filtering consultants
		// set up mock data
		mockFirestore.get.mockResolvedValue({
			forEach: (callback) => {
				const mockDocs = [
					{
						id: '1',
						data: () => ({
							name: 'John Doe',
							speciality: ['Tech'],
							yearsOfExperience: 5,
							regions: ['US'],
						}),
					},
					{
						id: '2',
						data: () => ({
							name: 'Jane Smith',
							speciality: ['Health', 'Education'],
							yearsOfExperience: 8,
							regions: ['US', 'Canada'],
						}),
					},
					{
						id: '3',
						data: () => ({
							name: 'Bob Johnson',
							speciality: ['Finance'],
							yearsOfExperience: 10,
							regions: ['UK'],
						}),
					},
					{
						id: '4',
						data: () => ({
							name: 'Alice Williams',
							speciality: ['Tech', 'Finance'],
							yearsOfExperience: 7,
							regions: ['US', 'UK'],
						}),
					},
					{
						id: '5',
						data: () => ({
							name: 'Charlie Dude',
							speciality: ['Health'],
							yearsOfExperience: 3,
							regions: ['Canada'],
						}),
					},
					{
						id: '6',
						data: () => ({
							name: 'David Davis',
							speciality: ['Education', 'Finance'],
							yearsOfExperience: 6,
							regions: ['US'],
						}),
					},
					{
						id: '7',
						data: () => ({
							name: 'Eva Cool',
							speciality: ['Tech', 'Health'],
							yearsOfExperience: 9,
							regions: ['UK', 'Canada'],
						}),
					},
					{
						id: '8',
						data: () => ({
							name: 'Frank Miller',
							speciality: ['Education'],
							yearsOfExperience: 4,
							regions: ['US', 'UK', 'Canada'],
						}),
					},
				];
				mockDocs.forEach(callback);
			},
		});
	});

	it('should filter consultants based on parameters Test 1', async () => {
		// our query will be consultants that are:
		// Specialized in either tech or education
		// AND have at least 5 years of experience
		// AND are located in Canada

		const consultants = await filterConsultants(
			['Tech', 'Education'],
			5,
			['Canada'],
			null,
		);
		expect(consultants).toHaveLength(2);

		// we check to ensure returned array has the expected elements
		const expectedElement1 = {
			id: '2',
			name: 'Jane Smith',
			speciality: ['Health', 'Education'],
			yearsOfExperience: 8,
			regions: ['US', 'Canada'],
		};
		const expectedElement2 = {
			id: '7',
			name: 'Eva Cool',
			speciality: ['Tech', 'Health'],
			yearsOfExperience: 9,
			regions: ['UK', 'Canada'],
		};
		expect(consultants).toContainEqual(expectedElement1);
		expect(consultants).toContainEqual(expectedElement2);
	});

	it('should filter consultants based on parameters Test 2', async () => {
		// our query will be consultants that are:
		// Specialized in either tech or education
		// AND have at least 0 years of experience
		// AND are located in US

		const consultants = await filterConsultants(
			['Tech', 'Education'],
			0,
			['US'],
			null,
		);
		expect(consultants).toHaveLength(5);

		// we check to ensure returned array has the expected elements
		const expectedElement1 = {
			id: '1',
			name: 'John Doe',
			speciality: ['Tech'],
			yearsOfExperience: 5,
			regions: ['US'],
		};
		const expectedElement2 = {
			id: '2',
			name: 'Jane Smith',
			speciality: ['Health', 'Education'],
			yearsOfExperience: 8,
			regions: ['US', 'Canada'],
		};
		const expectedElement3 = {
			id: '4',
			name: 'Alice Williams',
			speciality: ['Tech', 'Finance'],
			yearsOfExperience: 7,
			regions: ['US', 'UK'],
		};

		const expectedElement4 = {
			id: '6',
			name: 'David Davis',
			speciality: ['Education', 'Finance'],
			yearsOfExperience: 6,
			regions: ['US'],
		};

		const expectedElement5 = {
			id: '8',
			name: 'Frank Miller',
			speciality: ['Education'],
			yearsOfExperience: 4,
			regions: ['US', 'UK', 'Canada'],
		};

		// we check to ensure returned array has the expected elements
		expect(consultants).toContainEqual(expectedElement1);
		expect(consultants).toContainEqual(expectedElement2);
		expect(consultants).toContainEqual(expectedElement3);
		expect(consultants).toContainEqual(expectedElement4);
		expect(consultants).toContainEqual(expectedElement5);
	});
});
