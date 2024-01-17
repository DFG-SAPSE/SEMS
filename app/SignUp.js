import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	Image,
} from 'react-native';

import { useFonts } from 'expo-font';
import { fonts } from '../styles/fonts';
import Button from '../components/common/Button';
import FilePlus from '../assets/svg/FilePlus';

const SignUp = () => {
	const [name, setName] = useState('');
	const [experience, setExperience] = useState('');
	const [regions, setRegions] = useState('');
	// const [picture, setPicture] = useState(null);
	const [expertise, setExpertise] = useState('');
	const [fontsLoaded] = useFonts(fonts);

	if (!fontsLoaded) {
		return null;
	}

	const handlePictureUpload = () => {
		// Implement logic for picture upload here
	};

	const handleSubmit = () => {
		console.log('hello');
	};

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image
					resizeMode="contain"
					source={require('../assets/pngs/SEMSLogo.png')}
					style={styles.imageStyle}
				/>
			</View>
			<Text style={styles.question}>Tell us about yourself?</Text>
			<Text style={styles.clarifyQuestion}>
				Please fill out the required forms below
			</Text>
			<TextInput
				style={styles.input}
				placeholder="Enter your name"
				value={name}
				onChangeText={(text) => setName(text)}
				placeholderTextColor={theme.colors.text.gray}
			/>
			<TextInput
				style={styles.input}
				placeholder="Enter your years of experience"
				value={experience}
				onChangeText={(text) => setExperience(text)}
				keyboardType="numeric"
				placeholderTextColor={theme.colors.text.gray}
			/>
			<TextInput
				style={styles.input}
				placeholder="What geographic are you in?"
				value={regions}
				onChangeText={(text) => setRegions(text)}
				placeholderTextColor={theme.colors.text.gray}
			/>
			<TextInput
				style={styles.input}
				placeholder="Enter your expertise"
				value={expertise}
				onChangeText={(text) => setExpertise(text)}
				placeholderTextColor={theme.colors.text.gray}
			/>
			<TouchableOpacity
				style={styles.uploadBox}
				onPress={handlePictureUpload}
			>
				<View style={styles.fileContainer}>
					<FilePlus
						width={35}
						height={35}
						color={theme.colors.text.dark}
					/>
					<Text style={styles.uploadText}>Upload Image</Text>
				</View>
			</TouchableOpacity>
			<Button
				title="Done"
				onPress={handleSubmit()}
				customBtnStyle={styles.submitbutton}
			/>
		</View>
	);
};
import { theme } from '../styles/theme';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: theme.spacing.large,
	},
	imageContainer: {
		height: 100,
		width: 100,
		marginTop: theme.spacing.xxlarge,
		alignItems: 'center',
		justifyContent: 'center',
	},
	header: {
		fontSize: 24,
		marginBottom: 20,
		fontFamily: 'Roboto-Bold',
		color: theme.colors.text.dark,
	},
	question: {
		fontSize: theme.typography.mediumBody.fontSize,
		marginTop: theme.spacing.large,
		fontFamily: 'Roboto-Bold',
		color: theme.colors.text.dark,
	},
	clarifyQuestion: {
		fontSize: theme.typography.mediumBody.fontSize,
		marginTop: theme.spacing.large,
		fontFamily: 'Roboto-Regular',
		color: theme.colors.text.dark,
	},
	input: {
		height: 40,
		borderColor: theme.colors.text.gray,
		color: theme.colors.text.dark,
		borderWidth: 1,
		paddingHorizontal: theme.spacing.medium,
		paddingVertical: theme.spacing.mediumSmall,
		borderRadius: theme.spacing.tiny,
		marginVertical: 10,
		width: '100%',
		marginBottom: theme.spacing.medium,
		fontFamily: 'Roboto-Regular',
	},
	submitbutton: {
		paddingHorizontal: theme.spacing.medium,
		paddingVertical: theme.spacing.mediumSmall,
		backgroundColor: theme.colors.primary.default,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: theme.spacing.large,
		width: '100%',
		marginVertical: theme.spacing.xlarge,
	},
	uploadBox: {
		width: '100%',
		height: 100,
		borderWidth: 1,
		borderStyle: 'dashed',
		borderRadius: theme.spacing.tiny,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: theme.spacing.medium,
	},
	uploadText: {
		fontSize: theme.typography.smallBody.fontSize,
		fontFamily: 'Roboto-Regular',
		color: theme.colors.text.gray,
	},
	uploadedImage: {
		width: '100%',
		height: '100%',
		borderRadius: theme.spacing.tiny,
	},
	fileContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},

	imageStyle: {
		width: '100%',
		aspectRatio: 1,
		flex: 1,
	},
});

export default SignUp;
