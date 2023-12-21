import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const DropDownIcon = ({ width, height, color }) => (
	<Svg
		width={width}
		height={height}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<Path id="icon_2" d="M7 10L12 15L17 10H7Z" fill={color} />
	</Svg>
);

export default DropDownIcon;
