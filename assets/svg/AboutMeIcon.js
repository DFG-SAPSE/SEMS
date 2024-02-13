import * as React from 'react';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import { StyleSheet, View } from 'react-native';

const AboutMeIcon = () => (
	<View style={styles.container}>
		<Svg
			width={100}
			height={100}
			viewBox="0 0 75 56"
			fill={'gray'}
			xmlns="http://www.w3.org/2000/svg"
		>
			<G clipPath="url(#clip0_2605_5026)">
				<Path
					d="M39.9892 21L44.4167 25.83V35H31.5833V21H39.9892ZM39.9892 19H31.5833C30.575 19 29.75 19.9 29.75 21V35C29.75 36.1 30.575 37 31.5833 37H44.4167C45.425 37 46.25 36.1 46.25 35V25.83C46.25 25.3 46.0575 24.79 45.7092 24.42L41.2817 19.59C40.9425 19.21 40.475 19 39.9892 19ZM33.4167 31H42.5833V33H33.4167V31ZM33.4167 27H42.5833V29H33.4167V27ZM33.4167 23H39.8333V25H33.4167V23Z"
					fill="#6F6F6F"
				/>
			</G>
			<Defs>
				<ClipPath id="clip0_2605_5026">
					<Rect
						width={60}
						height={60}
						fill="white"
						transform="translate(27 16)"
					/>
				</ClipPath>
			</Defs>
		</Svg>
	</View>
);

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default AboutMeIcon;
