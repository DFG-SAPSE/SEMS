import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CheckIcon = ({ width, height, color, isChecked }) => (
	<Svg
		width={width}
		height={height}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		{isChecked && (
			<Path
				d="M9.54961 18.0001L3.84961 12.3001L5.27461 10.8751L9.54961 15.1501L18.7246 5.9751L20.1496 7.4001L9.54961 18.0001Z"
				fill={color}
			/>
		)}
	</Svg>
);

export default CheckIcon;
