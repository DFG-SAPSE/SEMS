import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

const WarningIcon = ({ width, height, color, isChecked }) => (
	<Svg
		xmlns="http://www.w3.org/2000/svg"
		shape-rendering="geometricPrecision"
		text-rendering="geometricPrecision"
		image-rendering="optimizeQuality"
		fill-rule="evenodd"
		clip-rule="evenodd"
		viewBox="0 0 512 512"
		width={width}
		height={height}
	>
		<Path
			fill="#A82C1F"
			fill-rule="nonzero"
			d="M256 0c70.686 0 134.69 28.658 181.016 74.984C483.342 121.31 512 185.314 512 256c0 70.686-28.658 134.69-74.984 181.016C390.69 483.342 326.686 512 256 512c-70.686 0-134.69-28.658-181.016-74.984C28.658 390.69 0 326.686 0 256c0-70.686 28.658-134.69 74.984-181.016C121.31 28.658 185.314 0 256 0z"
		/>
		<Circle fill="#D03827" cx="256" cy="256" r="226.536" />
		<Path
			fill="#fff"
			fill-rule="nonzero"
			d="M275.546 302.281c-.88 22.063-38.246 22.092-39.099-.007-3.779-37.804-13.444-127.553-13.136-163.074.312-10.946 9.383-17.426 20.99-19.898 3.578-.765 7.512-1.136 11.476-1.132 3.987.007 7.932.4 11.514 1.165 11.989 2.554 21.402 9.301 21.398 20.444l-.044 1.117-13.099 161.385zm-19.55 39.211c14.453 0 26.168 11.717 26.168 26.171 0 14.453-11.715 26.167-26.168 26.167s-26.171-11.714-26.171-26.167c0-14.454 11.718-26.171 26.171-26.171z"
		/>
	</Svg>
);

export default WarningIcon;
