import { useEffect, useState } from 'react';
import { fetchUsers } from '../searchUser';

const useConsultants = (searchQuery, selectedSpecialities, experience) => {
	const [filteredConsultants, setFilteredConsultants] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [fetchError, setFetchError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchUsers();
				const filteredData = filterConsultants(
					data,
					searchQuery,
					selectedSpecialities,
				);

				setFilteredConsultants(filteredData);
				setIsLoading(false);
			} catch (error) {
				setFetchError(error);
				setIsLoading(false);
			}
		};

		fetchData();
	});

	const filterConsultants = (data) => {
		let filteredData = data;

		// Filter by search query
		if (searchQuery) {
			filteredData = filteredData.filter((consultant) =>
				consultant.name
					.toLowerCase()
					.includes(searchQuery.toLowerCase()),
			);
		}

		// Filter by selected specialities
		if (selectedSpecialities.length) {
			filteredData = filteredData.filter((consultant) =>
				selectedSpecialities.includes(consultant.specialty),
			);
		}
		//Filter by Experience
		if (experience) {
			filteredData = filteredData.filter(
				(consultant) => consultant.experience >= experience,
			);
		}

		return filteredData;
	};

	return { filteredConsultants, isLoading, fetchError };
};

export default useConsultants;
