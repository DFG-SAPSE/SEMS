import React, { createContext, useContext, useState } from 'react';

const SpecialitiesContext = createContext();

export const SpecialitiesProvider = ({ children }) => {
	const [selectedSpecialities, setSelectedSpecialities] = useState([]);
	const [experience, setExperience] = useState(0);
	const [price, setPrice] = useState(0);
	const [selectedRegions, setSelectedRegions] = useState([]);

	const addSpeciality = (speciality) => {
		setSelectedSpecialities((prevSpecialities) => [
			...prevSpecialities,
			speciality,
		]);
	};

	const removeSpeciality = (speciality) => {
		setSelectedSpecialities((prevSpecialities) =>
			prevSpecialities.filter((sp) => sp !== speciality),
		);
	};

	const clearSpecialities = () => {
		setSelectedSpecialities([]);
	};

	const addRegion = (region) => {
		setSelectedRegions((prevRegions) => [...prevRegions, region]);
	};

	const removeRegion = (region) => {
		setSelectedRegions((prevRegions) =>
			prevRegions.filter((rg) => rg !== region),
		);
	};

	const clearRegions = () => {
		setSelectedRegions([]);
	};

	const clearAllFilters = () => {
		clearRegions();
		clearSpecialities();
		setExperience(0);
		setPrice(0);
	};

	return (
		<SpecialitiesContext.Provider
			value={{
				selectedSpecialities,
				addSpeciality,
				removeSpeciality,
				clearSpecialities,
				experience,
				setExperience,
				selectedRegions,
				addRegion,
				removeRegion,
				clearRegions,
				setPrice,
				price,
				clearAllFilters,
			}}
		>
			{children}
		</SpecialitiesContext.Provider>
	);
};

export const useSpecialities = () => {
	return useContext(SpecialitiesContext);
};
