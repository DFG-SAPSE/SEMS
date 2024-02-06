import React, { useContext } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	SafeAreaView,
} from 'react-native';
import { useFonts } from 'expo-font';
import { fonts } from '../../styles/fonts';
import { router } from 'expo-router';
import { theme } from '../../styles/theme';
import { UserContext } from '../../context/UserContext';

const Dashboard = () => {
	const { userData } = useContext(UserContext);
	const [fontsLoaded] = useFonts(fonts);

	if (!fontsLoaded) {
		return null;
	}
	return (
		<ScrollView style={styles.dashboard}>
			<SafeAreaView style={styles.wrapper}>
				<View style={styles.header}>
					<Text style={styles.headerText}>Welcome,</Text>
					<Text style={styles.headerName}>{userData.name}</Text>
					<Text style={styles.headerText}> !</Text>
				</View>

				<View style={styles.layer}>
					<TouchableOpacity
						onPress={() => {
							router.push('MeetingDashboard');
						}}
						style={styles.iconContainer}
					>
						<View style={styles.iconWrapper}>
							<Image
								resizeMode="contain"
								source={{
									uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9f8bf2982f8064a65b6a6aa3fed7a3cf66503161fac70fe52c8eed7b144991f7?apiKey=978f41e0131a442f8daf873f3d5553aa',
								}}
								style={styles.icon}
							/>
						</View>

						<Text style={styles.iconText}>Meeting Dashboard</Text>
					</TouchableOpacity>

					{/* {userData.isConsultant ? ( */}
					<TouchableOpacity
						onPress={() => {
							router.push('EditAvailability');
						}}
						style={styles.iconContainer}
					>
						<View style={styles.iconContainer}>
							<View style={styles.iconWrapper}>
								<Image
									resizeMode="contain"
									source={{
										uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7397f5e5c9a174fbcd84d47298e8185c33c7947d1b4d0b14e18e3863d9712836?apiKey=978f41e0131a442f8daf873f3d5553aa',
									}}
									style={styles.icon}
								/>
							</View>
							<Text style={styles.iconText}>
								Edit Availability
							</Text>
						</View>
					</TouchableOpacity>
				</View>
				<Text style={styles.otherServicesText}>Other Services</Text>
				<View style={styles.layer}>
					<View style={styles.iconContainer}>
						<View style={styles.iconWrapper}>
							<Image
								resizeMode="contain"
								source={{
									uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1b4ddcb4669c20973b2008c02583c4b5fa0a4f70bfbb2174c2028d127b408ddd?apiKey=978f41e0131a442f8daf873f3d5553aa',
								}}
								style={styles.icon}
							/>
						</View>
						<Text style={styles.iconText}>
							Funding Opportunities & Capacity Building
						</Text>
					</View>

					<View style={styles.iconContainer}>
						<View style={styles.iconWrapper}>
							<Image
								resizeMode="contain"
								source={{
									uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7397f5e5c9a174fbcd84d47298e8185c33c7947d1b4d0b14e18e3863d9712836?apiKey=978f41e0131a442f8daf873f3d5553aa',
								}}
								style={styles.icon}
							/>
						</View>
						<Text style={styles.iconText}>
							Research & Grant Writing
						</Text>
					</View>
				</View>

				<View style={styles.layer}>
					<View style={styles.iconContainer}>
						<View style={styles.iconWrapper}>
							<Image
								resizeMode="contain"
								source={{
									uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8625d80bd6d7e8764c3140717dfd0b6d2243c4945531a59ed24a5e9eb7f5b19d?apiKey=978f41e0131a442f8daf873f3d5553aa',
								}}
								style={styles.icon}
							/>
						</View>
						<Text style={styles.iconText}>
							{' '}
							Project Management Data
						</Text>
					</View>
					<View style={styles.iconContainer}>
						<View style={styles.iconWrapper}>
							<Image
								resizeMode="contain"
								source={{
									uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/54b8d78eedb9783506a3ef7eedb4bf51e961b280f5e41c17a8bee1176d507471?apiKey=978f41e0131a442f8daf873f3d5553aa',
								}}
								style={styles.icon}
							/>
						</View>
						<Text style={styles.iconText}>
							Social Enterprise Registry
						</Text>
					</View>
				</View>
			</SafeAreaView>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: theme.colors.white,
	},
	dashboard: {
		flex: 1,
		flexDirection: 'column',
		marginHorizontal: theme.spacing.large,
		backgroundColor: theme.colors.white,
	},
	header: {
		padding: theme.spacing.medium,
		alignItems: 'left',
		flexDirection: 'row',
		backgroundColor: theme.colors.white,
		marginTop: theme.spacing.xlarge,
	},
	headerText: {
		color: theme.colors.text.dark,
		fontSize: theme.typography.extraLarge.fontSize,
		fontFamily: 'Roboto-Bold',
		letterSpacing: 0.1,
		marginRight: 2,
	},
	headerName: {
		color: theme.colors.primary.default,
		fontSize: theme.typography.extraLarge.fontSize,
		fontFamily: 'Roboto-Bold',
		letterSpacing: 0.1,
	},
	layer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginVertical: theme.spacing.xlarge,
		backgroundColor: theme.colors.white,
	},
	iconContainer: {
		alignItems: 'center',
		flexGrow: 1,
		flex: 1,
		justifyContent: 'center',
		height: 'auto',
		flexDirection: 'column',
	},
	icon: {
		width: 60,
		borderRadius: 50,
		flex: 1,
	},
	iconWrapper: {
		backgroundColor: 'rgba(202, 223, 244, 1)',
		borderRadius: 50,
		width: 80,
		height: 80,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.25,
		shadowRadius: 4,
	},
	iconText: {
		color: theme.colors.primary.dark,
		fontFamily: 'Roboto-Bold',
		fontSize: theme.spacing.medium,
		textAlign: 'center',
		marginTop: theme.spacing.small,
		padding: theme.spacing.small,
		height: 75,
	},
	otherServicesText: {
		marginVertical: theme.spacing.small,
		fontFamily: 'Roboto-Regular',
		fontSize: theme.spacing.large,
		color: theme.colors.text.dark,
	},
});

export default Dashboard;
