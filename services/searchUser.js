export const fetchUsers = () => {
	// This is a dummy function that mimics fetching data from a server
	// Replace this with actual API call logic when backend is ready
	return new Promise((resolve) => {
		setTimeout(() => {
			const consultant = [
				{
					uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/131bb728735b5613ad46152ae2fb8afe4ea761c73ca55bb4d43f36db7875ce9d?apiKey=978f41e0131a442f8daf873f3d5553aa&',
					name: 'Andrea Beatrice',
					companyName: 'GreenCycle',
					industry: 'Healthcare and Wellbeing',
					sessionInfo: '10:00',
				},
				{
					uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5b502b662a0038d198873a8710172744b6f5e03b9c662a0428fcdbf057933318?apiKey=978f41e0131a442f8daf873f3d5553aa&',
					name: 'Marsha Jones',
					companyName: 'TechBridge',
					industry: 'Technology Inclusion',
					sessionInfo: '10:00',
				},
				{
					uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cc33ab67cabe5facfd9709c433d38e028d9ee1d7c1b7c0d0b0ad577fd413da1f?apiKey=978f41e0131a442f8daf873f3d5553aa&',
					name: 'Emil Rhodes',
					companyName: 'CleanWave Energy',
					industry: 'Environment Conservation',
					sessionInfo: '10:00',
				},
				{
					uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a4f99f119a6782fc4b81b5f04a118c611c0d64bba7757f9d5cadf2b023665396?apiKey=978f41e0131a442f8daf873f3d5553aa&',
					name: 'Melissa Bloom',
					companyName: 'HealHub',
					industry: 'Healthcare and Wellbeing',
					sessionInfo: '10:00',
				},
				{
					uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b74a54deca9efd89c045120b0218cce40b7177080b198fd0c0c0f96bc14e82a9?apiKey=978f41e0131a442f8daf873f3d5553aa&',
					name: 'Justin Gartner',
					companyName: 'EcoHarvest',
					industry: 'Community Development',
					sessionInfo: '10:00',
				},
				{
					uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/537850c5c3423227b07b5bda9ce14b83fa709d4b5c60c98e916464ab07eff236?apiKey=978f41e0131a442f8daf873f3d5553aa&',
					name: 'Haley Izumi',
					companyName: 'GreenScape Solutions',
					industry: 'Environment Conservation',
					sessionInfo: '10:00',
				},
				{
					uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/780dbcf92ce5849b80e29558368dc6ce2e5edff1b1d39e2963a3817aa2b453ef?apiKey=978f41e0131a442f8daf873f3d5553aa&',
					name: 'Nick Silva',
					companyName: 'CommunityCuisine',
					industry: 'Food Security and Nutrition',
					sessionInfo: '10:00',
				},
				{
					uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bba9d6af7d402c7d92f2c6f44ca16f222b3b81d2263b93e428367f8af6c0cf0e?apiKey=978f41e0131a442f8daf873f3d5553aa&',
					name: 'Rachel Green',
					companyName: 'ArtTherapy Connect',
					industry: 'Arts and Culture',
					sessionInfo: '10:00',
				},
				{
					uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/90c3b858d3e9299f2bca6e0f3dd6b1e1795d88408105be7d7fd97f9ef17b2ff8?apiKey=978f41e0131a442f8daf873f3d5553aa&',
					name: 'Gale Emeron',
					companyName: 'EmpowerYouth Apparel',
					industry: 'Arts and Culture',
					sessionInfo: '10:00',
				},
				{
					uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bba9d6af7d402c7d92f2c6f44ca16f222b3b81d2263b93e428367f8af6c0cf0e?apiKey=978f41e0131a442f8daf873f3d5553aa&',
					name: 'Deanna Lee',
					companyName: 'TechForAll',
					industry: 'Technology Inclusion',
					sessionInfo: '10:00',
				},
				{
					uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5fd8a8ae904336bb30c5a7b42c2c4d52c71295de61ba5d33ff95e23ca1bf2a20?apiKey=978f41e0131a442f8daf873f3d5553aa&',
					name: 'George Cruz',
					companyName: 'SmartSpending',
					industry: 'Financial Inclusion',
					sessionInfo: '10:00',
				},
				{
					uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c86e93a80dbac8a7b0bd608de14762570b9cc0c023c85dd781c03eed9b30d4f6?apiKey=978f41e0131a442f8daf873f3d5553aa&',
					name: 'Theresa Garcia',
					companyName: 'CleanWater Innovations',
					industry: 'Environment Conservation',
					sessionInfo: '14',
					reviews: '8',
				},
			];
			resolve(consultant);
		}, 1000);
	});
};
