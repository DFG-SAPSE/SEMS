import { useEffect, useState } from 'react';
import { fetchUsers } from '../services/searchUser';

const useConsultants = (
	searchQuery,
	selectedSpecialities,
	experience,
	selectedRegions,
	price,
) => {
	const [filteredConsultants, setFilteredConsultants] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [fetchError, setFetchError] = useState(null);

	useEffect(() => {
		let timeoutId;

		const fetchData = async () => {
			try {
				const data = await fetchUsers();
				const filteredData = filterConsultants(data, searchQuery);
				setFilteredConsultants(filteredData);
				setIsLoading(false);
			} catch (error) {
				setFetchError(error);
				setIsLoading(false);
			}
		};

		// Use a timeout to debounce the fetchData function
		const debounceFetchData = () => {
			clearTimeout(timeoutId);
			setIsLoading(true);
			timeoutId = setTimeout(fetchData, 600); // Adjust the delay as needed
		};

		debounceFetchData();

		return () => {
			clearTimeout(timeoutId); // Clear the timeout on component unmount
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchQuery, selectedSpecialities, experience, selectedRegions, price]);

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
		//price
		if (price) {
			filteredData = filteredData.filter(
				(consultant) => consultant.price >= price,
			);
		}
		//Filter by Region
		if (selectedRegions && selectedRegions.length > 0) {
			filteredData = filteredData.filter((consultant) =>
				selectedRegions.some((selectedRegion) =>
					consultant.region.includes(selectedRegion),
				),
			);
		}
		// if the filter results in no consultants we display the error message
		if (filteredData.length === 0) {
			setFilteredConsultants([]);
		}

		return filteredData;
	};

	return { filteredConsultants, isLoading, fetchError };
};

export default useConsultants;
