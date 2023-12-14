import React, { createContext, useContext, useState } from 'react';

const SpecialitiesContext = createContext();

export const SpecialitiesProvider = ({ children }) => {
	const [selectedSpecialities, setSelectedSpecialities] = useState([]);
	const [experience, setExperience] = useState(0);
	const [selectedRegions, setSelectedRegions] = useState([]);
	//Handling Specialitys
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
	//handling Regions
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
			}}
		>
			{children}
		</SpecialitiesContext.Provider>
	);
};

export const useSpecialities = () => {
	return useContext(SpecialitiesContext);
};
