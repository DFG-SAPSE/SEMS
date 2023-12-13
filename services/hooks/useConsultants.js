import { useState, useEffect } from 'react';
import { fetchUsers } from '../searchUser';

const useConsultants = (searchQuery) => {
	const [consultantData, setConsultantData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [fetchError, setFetchError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true); // Set loading to true before fetching data
				const userProfile = await fetchUsers(searchQuery);
				setConsultantData(userProfile);
			} catch (error) {
				setFetchError(error);
				console.error('Error fetching consultant data:', error);
			} finally {
				setIsLoading(false); // Set loading to false once data is fetched (or if there's an error)
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

	return { filteredConsultants, isLoading, fetchError };
};

export default useConsultants;
