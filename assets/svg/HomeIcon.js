import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import { StyleSheet, View } from 'react-native';

const HomeIcon = () => (
	<View style={styles.container}>
		<Svg
			width={30}
			height={30}
			viewBox="0 0 20 18"
			fill={'gray'}
			xmlns="http://www.w3.org/2000/svg"
		>
			<G id="Group">
				<G id="Group_2">
					<Path
						id="Vector"
						d="M17 6.928V1.84H14V4.336L10 0.880005L0 9.52H3V17.2H9V11.44H11V17.2H17V9.52H20L17 6.928ZM15 15.28H13V9.52H7V15.28H5V7.7824L10 3.4624L15 7.7824V15.28Z"
						fill={'gray'}
					/>
					<Path
						id="Vector_2"
						d="M8 7.60005H12C12 6.54405 11.1 5.68005 10 5.68005C8.9 5.68005 8 6.54405 8 7.60005Z"
						fill={'gray'}
					/>
				</G>
			</G>
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

export default HomeIcon;
