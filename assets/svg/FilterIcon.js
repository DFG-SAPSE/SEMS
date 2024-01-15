import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FilterIcon = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
		<Path
			d="M9.33333 15.6667C9.33333 15.4899 9.40357 15.3203 9.5286 15.1953C9.65362 15.0702 9.82319 15 10 15H14C14.1768 15 14.3464 15.0702 14.4714 15.1953C14.5964 15.3203 14.6667 15.4899 14.6667 15.6667C14.6667 15.8435 14.5964 16.013 14.4714 16.1381C14.3464 16.2631 14.1768 16.3333 14 16.3333H10C9.82319 16.3333 9.65362 16.2631 9.5286 16.1381C9.40357 16.013 9.33333 15.8435 9.33333 15.6667ZM6.66667 11.6667C6.66667 11.4899 6.7369 11.3203 6.86193 11.1953C6.98695 11.0702 7.15652 11 7.33333 11H16.6667C16.8435 11 17.013 11.0702 17.1381 11.1953C17.2631 11.3203 17.3333 11.4899 17.3333 11.6667C17.3333 11.8435 17.2631 12.013 17.1381 12.1381C17.013 12.2631 16.8435 12.3333 16.6667 12.3333H7.33333C7.15652 12.3333 6.98695 12.2631 6.86193 12.1381C6.7369 12.013 6.66667 11.8435 6.66667 11.6667ZM4 7.66667C4 7.48986 4.07024 7.32029 4.19526 7.19526C4.32029 7.07024 4.48986 7 4.66667 7H19.3333C19.5101 7 19.6797 7.07024 19.8047 7.19526C19.9298 7.32029 20 7.48986 20 7.66667C20 7.84348 19.9298 8.01305 19.8047 8.13807C19.6797 8.2631 19.5101 8.33333 19.3333 8.33333H4.66667C4.48986 8.33333 4.32029 8.2631 4.19526 8.13807C4.07024 8.01305 4 7.84348 4 7.66667Z"
			fill={color}
		/>
	</Svg>
);

export default FilterIcon;
