import { useState, useEffect } from 'react';
import { fetchUsers } from '../searchUser';

const useConsultants = (searchQuery) => {
	const [consultantData, setConsultantData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const userProfile = await fetchUsers(searchQuery);
				setConsultantData(userProfile);
			} catch (error) {
				console.error('Error fetching consultant data:', error);
			}
		};

		fetchData();
	}, [searchQuery]);

	const filteredConsultants = consultantData.filter((consultant) => {
		if (searchQuery === '') {
			return consultant;
		} else {
			return consultant.name
				.toLowerCase()
				.includes(searchQuery.toLowerCase());
		}
	});

	return filteredConsultants;
};

export default useConsultants;
