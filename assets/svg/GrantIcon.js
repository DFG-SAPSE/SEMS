import * as React from 'react';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import { StyleSheet, View } from 'react-native';

const GrantIcon = () => (
	<View style={styles.container}>
		<Svg
			width={100}
			height={100}
			viewBox="0 0 75 56"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<G clipPath="url(#clip0_2605_5027)">
				<Path
					d="M38.4583 23.2H43.25V25.12H38.4583V23.2ZM38.4583 29.92H43.25V31.84H38.4583V29.92ZM44.2083 18.88H30.7917C29.7375 18.88 28.875 19.744 28.875 20.8V34.24C28.875 35.296 29.7375 36.16 30.7917 36.16H44.2083C45.2625 36.16 46.125 35.296 46.125 34.24V20.8C46.125 19.744 45.2625 18.88 44.2083 18.88ZM44.2083 34.24H30.7917V20.8H44.2083V34.24ZM36.5417 21.76H31.75V26.56H36.5417V21.76ZM35.5833 25.6H32.7083V22.72H35.5833V25.6ZM36.5417 28.48H31.75V33.28H36.5417V28.48ZM35.5833 32.32H32.7083V29.44H35.5833V32.32Z"
					fill="#6F6F6F"
				/>
			</G>
			<Defs>
				<ClipPath id="clip0_2605_5027">
					<Rect
						width="23"
						height="23.04"
						fill="white"
						transform="translate(26 16)"
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

export default GrantIcon;
