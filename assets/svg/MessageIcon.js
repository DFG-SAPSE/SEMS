import * as React from 'react';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import { StyleSheet, View } from 'react-native';

const MessageIcon = () => (
	<View style={styles.container}>
		<Svg
			width={100}
			height={100}
			viewBox="0 0 75 56"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<G clip-path="url(#clip0_2605_5028)">
				<Path
					d="M45.167 17.92H29.8337C28.7795 17.92 27.917 18.784 27.917 19.84V37.12L31.7503 33.28H45.167C46.2212 33.28 47.0837 32.416 47.0837 31.36V19.84C47.0837 18.784 46.2212 17.92 45.167 17.92ZM45.167 31.36H31.7503L29.8337 33.28V19.84H45.167V31.36ZM32.7087 24.64H34.6253V26.56H32.7087V24.64ZM36.542 24.64H38.4587V26.56H36.542V24.64ZM40.3753 24.64H42.292V26.56H40.3753V24.64Z"
					fill="#6F6F6F"
				/>
			</G>
			<Defs>
				<ClipPath id="clip0_2605_5028">
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

export default MessageIcon;
