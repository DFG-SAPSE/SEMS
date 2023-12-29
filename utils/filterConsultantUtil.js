export const filterConsultants = (data, filters) => {
	let filteredData = data;

	const {
		searchQuery,
		selectedSpecialities,
		experience,
		price,
		selectedRegions,
	} = filters;

	// Filter by search query
	if (searchQuery) {
		filteredData = filteredData.filter((consultant) =>
			consultant.name.toLowerCase().includes(searchQuery.toLowerCase()),
		);
	}

	// Filter by selected specialities
	if (selectedSpecialities.length) {
		filteredData = filteredData.filter((consultant) =>
			selectedSpecialities.includes(consultant.specialty),
		);
	}

	// Filter by Experience
	if (experience) {
		filteredData = filteredData.filter(
			(consultant) => consultant.experience >= experience,
		);
	}

	// Filter by price
	if (price) {
		filteredData = filteredData.filter(
			(consultant) => consultant.price >= price,
		);
	}

	// Filter by Region
	if (selectedRegions && selectedRegions.length > 0) {
		filteredData = filteredData.filter((consultant) =>
			selectedRegions.some((selectedRegion) =>
				consultant.region.includes(selectedRegion),
			),
		);
	}

	return filteredData;
};
