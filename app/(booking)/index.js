// app/booking/index.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import SearchConsultant from '../(searching-consultant)/SearchConsultant';

const Stack = createNativeStackNavigator();

const BookingNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="SearchConsultant"
					component={SearchConsultant}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default BookingNavigator;
