import React, { createContext, useContext, useState } from 'react';
import defaultValues from '../defaultdata/DefaultFilterSettings.json';

// Create a context
const ConsultantFiltersContext = createContext();

// Create a provider component
export const ConsultantFiltersProvider = ({ children }) => {
	// State variables using default values
	const [selectedSpecialities, setSelectedSpecialities] = useState(
		defaultValues.DEFAULT_SELECTED_SPECIALTIES,
	);
	const [experience, setExperience] = useState(
		defaultValues.DEFAULT_EXPERIENCE_LEVEL,
	);
	const [price, setPrice] = useState(defaultValues.DEFAULT_PRICE_RANGE);
	const [selectedRegions, setSelectedRegions] = useState(
		defaultValues.DEFAULT_SELECTED_REGIONS,
	);

	// Functions to manipulate state
	const addSpecialty = (specialty) => {
		setSelectedSpecialities((prevSpecialities) => [
			...prevSpecialities,
			specialty,
		]);
	};

	const removeSpecialty = (specialty) => {
		setSelectedSpecialities((prevSpecialities) =>
			prevSpecialities.filter((sp) => sp !== specialty),
		);
	};

	const clearSpecialities = () => {
		setSelectedSpecialities(defaultValues.DEFAULT_SELECTED_SPECIALTIES);
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
		setSelectedRegions(defaultValues.DEFAULT_SELECTED_REGIONS);
	};

	const clearAllFilters = () => {
		clearRegions();
		clearSpecialities();
		setExperience(defaultValues.DEFAULT_EXPERIENCE_LEVEL);
		setPrice(defaultValues.DEFAULT_PRICE_RANGE);
	};

	// Provide the context values to the components
	return (
		<ConsultantFiltersContext.Provider
			value={{
				selectedSpecialities,
				addSpecialty,
				removeSpecialty,
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
		</ConsultantFiltersContext.Provider>
	);
};

// Create a hook to use the context values
export const useConsultantFilters = () => {
	return useContext(ConsultantFiltersContext);
};
