import React, { createContext, useContext, useState } from 'react';
import defaultValues from '../defaultdata/DefaultFilterSettings.json';

// Create a context
const SpecialitiesContext = createContext();

// Create a provider component
export const SpecialitiesProvider = ({ children }) => {
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
	const addSpecialty = (Specialty) => {
		setSelectedSpecialities((prevSpecialities) => [
			...prevSpecialities,
			Specialty,
		]);
	};

	const removeSpecialty = (Specialty) => {
		setSelectedSpecialities((prevSpecialities) =>
			prevSpecialities.filter((sp) => sp !== Specialty),
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
		<SpecialitiesContext.Provider
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
		</SpecialitiesContext.Provider>
	);
};

// Create a hook to use the context values
export const useSpecialities = () => {
	return useContext(SpecialitiesContext);
};
