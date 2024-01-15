import React from 'react';
import { Text, StyleSheet, View, ScrollView, Pressable } from 'react-native';
import Button from '../../common/Button';
import { useFonts } from 'expo-font';

import { fonts } from '../../../styles/fonts';
import { useConsultantFiltersContext } from '../../../context/ConsultantFilterContext';
import RegionComponent from './masterFilterComponents/RegionComponent';
import PriceModal from './masterFilterComponents/PriceRangeComponent';
import ExperienceModal from './masterFilterComponents/ExperienceComponent';
import SpecialtyComponent from './masterFilterComponents/SpecialtyComponent';
import tabs from '../../../locales/en/Tabs.json';
// This is the main UI for the master filters.
// Inside the 'master-filter-components' folder is where you would add a new filter if needed.
const MasterFilter = ({ closeModal }) => {
    const {
        clearAllFilters,
        selectedSpecialities,
        removeSpecialty,
        addSpecialty,
        experience,
        setExperience,
        price,
        setPrice,
        addRegion,
        removeRegion,
        selectedRegions,
    } = useConsultantFiltersContext();

    const [fontsLoaded] = useFonts(fonts);

    // If fonts are not loaded, return undefined
    if (!fontsLoaded) {
        return undefined;
    }
    // Function to clear all filters and close the modal
    const clearAllFiltersAndCloseModal = () => {
        clearAllFilters();
        closeModal();
    };

    return (
        <ScrollView style={styles.modalContent}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{'Filter by'}</Text>
                <Pressable onPress={clearAllFiltersAndCloseModal}>
                    <Text style={styles.clearAllText}>{tabs.ClearAll}</Text>
                </Pressable>
            </View>
            <View style={styles.divider} />
            <Text style={styles.experience}>Experience</Text>
            <SpecialtyComponent
                selectedSpecialities={selectedSpecialities}
                removeSpecialty={removeSpecialty}
                addSpecialty={addSpecialty}
            />
            <ExperienceModal
                experience={experience}
                setExperience={setExperience}
            />
            <View style={styles.divider} />
            <PriceModal setPrice={setPrice} price={price} />
            <View style={styles.divider} />
            <RegionComponent
                selectedRegions={selectedRegions}
                removeRegion={removeRegion}
                addRegion={addRegion}
            />
            <Button title="Done" onPress={closeModal} />
        </ScrollView>
    );
};

import { theme } from '../../../styles/theme';

const styles = StyleSheet.create({
    modalContent: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '90%',
        backgroundColor: theme.colors.white,
        padding: theme.spacing.xxlarge,
        borderTopEndRadius: theme.spacing.xlarge,
        borderStartStartRadius: theme.spacing.xlarge,
    },
    divider: {
        backgroundColor: theme.colors.border,
        marginVertical: theme.spacing.medium,
        height: 1,
    },
    experience: {
        color: theme.colors.text.dark,
        letterSpacing: 0.1,
        fontFamily: 'Roboto-Bold',
        fontSize: theme.typography.mediumBody.fontSize,
        paddingVertical: theme.spacing.medium,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerText: {
        letterSpacing: 0.1,
        fontFamily: 'Roboto-Bold',
        fontSize: theme.typography.large.fontSize,
    },
    clearAllText: {
        color: theme.colors.primary.dark,
        fontFamily: 'Roboto-Bold',
        fontSize: theme.typography.smallBody.fontSize,
    },
});

export default MasterFilter;
