import { useEffect, useState } from 'react';
import { fetchConsultants } from '../services/user';
import { filterConsultants } from '../utils/filterConsultantUtil';
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
				const res = await fetchConsultants();
				if (res.ok) {
					const filters = {
						searchQuery,
						selectedSpecialities,
						experience,
						price,
						selectedRegions,
					};
					const filteredData = filterConsultants(res.data, filters);
					setFilteredConsultants(filteredData);
				}
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
	}, [searchQuery, selectedSpecialities, experience, selectedRegions, price]);

	return { filteredConsultants, isLoading, fetchError };
};

export default useConsultants;
