import * as React from 'react';
import {
	View,
	StyleSheet,
	TextInput,
	Image,
	Text,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import image from '../styles/bi_filter.png';

export default function Home(props) {
	const [searchQuery, setSearchQuery] = React.useState('');
	const data = [1, 2, 3, 4, 5, 6];

	const handleSearch = (query) => {
		setSearchQuery(query);
	};

	return (
		<ScrollView>
			<View>
				<View style={styles.searchContainer}>
					<View style={styles.previousContainer}>
						<Ionicons
							styles={styles.previousButton}
							name="ios-arrow-back"
							size={35}
							color="black"
						/>
					</View>
					<View style={styles.searchSection}>
						<TextInput
							style={styles.input}
							onChangeText={handleSearch}
							value={searchQuery}
							placeholder="Search consultant"
							placeholderTextColor={'black'}
						/>
						<Ionicons
							style={styles.searchIcon}
							name="ios-search"
							size={24}
							color="black"
						/>
					</View>
				</View>
				<View style={styles.containerFor}>
					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
					>
						<View style={styles.containerIcon}>
							<Image style={styles.icon} source={image} />
							<TouchableOpacity style={styles.tabButton}>
								<Text style={styles.tabText}>Speciality</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.tabButton}>
								<Text style={styles.tabText}>Industry</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.tabButton}>
								<Text style={styles.tabText}>Experience</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.tabButton}>
								<Text style={styles.tabText}>
									Consultations
								</Text>
							</TouchableOpacity>
						</View>
					</ScrollView>
				</View>

				<View style={styles.container}>
					{data.map((item, index) => (
						<View key={index} style={styles.box}>
							<Image
								resizeMode="contain"
								source={{
									uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/131bb728735b5613ad46152ae2fb8afe4ea761c73ca55bb4d43f36db7875ce9d?apiKey=978f41e0131a442f8daf873f3d5553aa&',
								}}
								style={styles.consultantImage}
							/>
							<View style={styles.textContent}>
								<Text style={styles.textSize}>
									{' '}
									Andrea Beatrice{' '}
								</Text>
							</View>
							<View style={styles.textContent}>
								<Text style={styles.textSize}>
									{' '}
									GreenCycle{' '}
								</Text>
							</View>
							<View style={styles.consultantIndustry}>
								<Text style={styles.colorText}>
									{' '}
									Healthcare and Wellbeing{' '}
								</Text>
							</View>
						</View>
					))}
				</View>
			</View>
			<Text style={styles.Text}>
				Complete your profile to schedule a call with and see other
				Social Enterprise Consultants
			</Text>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	containerFor: {
		flex: 1,
	},
	containerIcon: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 12,
		paddingHorizontal: 6,
		justifyContent: 'center',
		gap: 8,
	},
	icon: {
		width: 40,
		height: 40,
		marginRight: 10,
		backgroundColor: '#00367C',
		borderRadius: 100,
	},
	tabButton: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#00367C',
		borderRadius: 100,
	},
	tabText: {
		color: 'white',
		paddingVertical: 12,
		paddingHorizontal: 12,
		gap: 8,
		fontSize: 14,
		fontWeight: 500,
		letterSpacing: 0.01,
	},
	previousContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 4,
	},
	searchContainer: {
		flexDirection: 'row',
		marginTop: 16,
		width: '100%',
		justifyContent: 'center',
	},
	previousButton: {
		padding: 8,
	},
	Text: {
		color: '#444',
		letterSpacing: 0.1,
		font: '400 14px/20px Roboto, sans-serif ',
		margin: 15,
		padding: 15,
	},
	searchSection: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 30,
		padding: 4,
		width: 340,
		height: 60,
		position: 'relative',
		gap: 4,
	},
	input: {
		color: '#212529',
		flex: 1,
		height: 48,
		width: 214,
		paddingLeft: 16,
		alignItems: 'center',
		gap: 10,
		fontSize: 16,
		letterSpacing: 0.1,
	},
	searchIcon: {
		position: 'absolute',
		right: 20,
		gap: 10,
		padding: 8,
	},
	box: {
		margin: 15,
		width: '40 %',
		height: 230,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 7,
		borderColor: '#999',
	},
	consultantImage: {
		overflow: 'hidden',
		alignSelf: 'center',
		position: 'relative',
		display: 'flex',
		width: 136,
		flexDirection: 'column',
		aspectRatio: '1',
	},
	textContent: {
		color: '#000',
		letterSpacing: 0.1,
		alignSelf: 'stretch',
		marginTop: 6,
	},
	textSize: {
		fontSize: 12,
		alignSelf: 'stretch',
		letterSpacing: 0.1,
	},
	colorText: {
		color: '#999',
		fontSize: 12,
		alignSelf: 'stretch',
		letterSpacing: 0.1,
	},
	consultantIndustry: {
		marginTop: 6,
		alignSelf: 'stretch',
		color: '#999',
		letterSpacing: 0.1,
		fontSize: 11,
		fontFamily: 'Roboto',
		fontWeight: '400',
		lineHeight: 20,
	},

	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		display: 'flex',
		justifyContent: 'center',
		paddingHorizontal: 10,
	},
});
