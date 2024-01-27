export const regions = [
	'National Capital Region (NCR)',
	'Cordillera Administrative Region (CAR)',
	'Region I (Ilocos Region)',
	'Region II (Cagayan Valley)',
	'Region III (Central Luzon)',
	'Region IV-A (CALABARZON)',
	'MIMAROPA Region',
	'Region V (Bicol Region)',
	'Region VI (Western Visayas)',
	'Region VII (Central Visayas)',
	'Region VIII (Eastern Visayas)',
	'Region IX (Zamboanga Peninsula)',
	'Region X (Northern Mindanao)',
	'Region XI (Davao Region)',
	'Region XII (SOCCSKSARGEN)',
	'Region XIII (Caraga)',
];

export const enterpriseSectorsList = [
	'Indigenous Peoples',
	'Farmers and Fisherfolk',
	'Urban Poor',
	'Women',
	'Persons with Disabilities',
	'LGBTQ+',
	'OFW Workers',
	'People\'s Association',
	'Senior Citizen',
	'Urban and Rural Poor',
	'Displaced Persons',
	'Youth from Low-Income Families',
];

export const enterpriseLivelihoodActivitiesList = [
	'Activity 1',
	'Activity 2',
	'Activity 3',
	'Activity 4',
	'Activity 5',
];

export const certificateTypeList = [
	'DTI',
	'SEC',
	'DOLE',
	'No Certificate',
]

export class Consultant {
	constructor(id, name, email) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.photoURL =
			'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg';
		this.isConsultant = true;
		this.enterpriseID = '';
		this.description = '';
		this.exceptions = '';
		this.expertise = [];
		this.experienceYears = 0;
		this.availability = JSON.stringify([[], [], [], [], [], [], []]);
		this.meetingConfig = {
			startTimeIncrement: 0,
			breakTimeLength: 0,
		};
		this.bookedMeetings = [];
		this.services = [];
		this.geographic_regions = [];
	}

	getAvailability() {
		return JSON.parse(this.availability);
	}

	setAvailability(avail) {
		this.availability = JSON.stringify(avail);
	}

	setObjectFromDatabase(data) {
		this.photoURL = data.photoURL;
		this.enterpriseID = data.enterpriseID;
		this.description = data.description;
		this.exceptions = data.exceptions;
		this.expertise = data.expertise;
		this.experienceYears = data.experienceYears;
		this.availability = data.availability;
		this.meetingConfig = data.meetingConfig;
		this.bookedMeetings = data.bookedMeetings;
		this.services = data.services;
		this.geographic_regions = data.geographic_regions;
	}
}

// Firestore data converter
export const consultantConverter = {
	toFirestore: (consultant) => {
		return {
			id: consultant.id,
			name: consultant.name,
			email: consultant.email,
			photoURL: consultant.photoURL,
			isConsultant: consultant.isConsultant,
			enterpriseID: consultant.enterpriseID,
			exceptions: consultant.exceptions,
			expertise: consultant.expertise,
			description: consultant.description,
			experienceYears: consultant.experienceYears,
			availability: consultant.availability,
			meetingConfig: consultant.meetingConfig,
			bookedMeetings: consultant.bookedMeetings,
			services: consultant.services,
			geographic_regions: consultant.geographic_regions,
		};
	},
	fromFirestore: (snapshot, options) => {
		const data = snapshot.data(options);
		let dataObject = new Consultant(data.id, data.name, data.email);
		dataObject.setObjectFromDatabase(data);
		return dataObject;
	},
};

export class Entrepreneur {
	constructor(id, name, email) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.photoURL =
			'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg';
		this.isConsultant = false;
		this.enterpriseID = '';
		this.enterpriseName = '';
		this.description = '';
		this.enterpriseSector = '';
		this.enterpriseLivelihoodActivities = '';
		this.enterpriseRole = '';
		this.certificateType = '';
		this.certificateId = '';
	}

	setObjectFromDatabase(data) {
		this.photoURL = data.photoURL;
		this.enterpriseID = data.enterpriseID;
		this.description = data.description;
	}
}

// Firestore data converter
export const entrepreneurConverter = {
	toFirestore: (entrepreneur) => {
		return {
			id: entrepreneur.id,
			name: entrepreneur.name,
			email: entrepreneur.email,
			photoURL: entrepreneur.photoURL,
			isConsultant: entrepreneur.isConsultant,
			enterpriseID: entrepreneur.enterpriseID,
			description: entrepreneur.description,
			experienceYears: entrepreneur.experienceYears,
		};
	},
	fromFirestore: (snapshot, options) => {
		const data = snapshot.data(options);
		let dataObject = new Entrepreneur(data.id, data.name, data.email);
		dataObject.setObjectFromDatabase(data);
		return dataObject;
	},
};

export class Enterprise {
	constructor(enterpriseID, enterpriseName, description) {
		this.enterpriseID = enterpriseID;
		this.enterpriseName = enterpriseName;
		this.description = description;
	}
}

// Firestore data converter
export const enterpriseConverter = {
	toFirestore: (enterprise) => {
		return {
			enterpriseID: enterprise.enterpriseID,
			enterpriseName: enterprise.enterpriseName,
			description: enterprise.description,
		};
	},
	fromFirestore: (snapshot, options) => {
		const data = snapshot.data(options);
		return new Enterprise(
			data.enterpriseID,
			data.enterpriseName,
			data.description,
		);
	},
};
