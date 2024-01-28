import { theme } from '../../styles/theme';
import Button from '../../components/common/Button';
import { StyleSheet, View, Text } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

const ProfileType = () => {
    const params = useLocalSearchParams();
    const { enterpriseObject } = params;

    const navigateToProfileCreation = (isConsultant) => {
        router.push({
            pathname: '/ProfileCreation',
            params: {
              isConsultantState: isConsultant,
              enterpriseObject: enterpriseObject,
            },
          });
    };

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.text}>Are you a consultant or an entrepreneur?</Text>
            </View>
            <View style={styles.subContainer}>
                <Button
                    title={'Consultant'}
                    onPress={() => navigateToProfileCreation(true)}
                    customBtnStyle={styles.firstButton}
                />
                <Button
                    title={'Entrepreneur'}
                    onPress={() => navigateToProfileCreation(false)}
                    customBtnStyle={styles.secondButton}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    subContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginVertical: 20, // Add margin to separate the buttons
    },
    text: {
        fontSize: 24,
        marginTop: theme.spacing.xxxlarge,
        paddingTop: theme.spacing.xxxlarge,
        marginBottom: theme.spacing.xlarge,
        textAlign: 'center',
    },
    firstButton: {
        marginTop: theme.spacing.xxxlarge,
        marginBottom: theme.spacing.xxlarge,
        paddingVertical: theme.spacing.medium,
        paddingHorizontal: '37%',
        backgroundColor: theme.colors.primary.light,
        borderRadius: 24,
    },  
    secondButton: {
        marginBottom: theme.spacing.xxxlarge,
        paddingVertical: theme.spacing.medium,
        paddingHorizontal: '35%',
        backgroundColor: theme.colors.primary.light,
        borderRadius: 24,
    }, 
});

export default ProfileType;
