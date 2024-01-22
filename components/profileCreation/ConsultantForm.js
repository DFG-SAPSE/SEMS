import React, { useRef, useState } from 'react';
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import { router } from 'expo-router';
import { Form, FormItem } from 'react-native-form-component';

const ConsultantForm = ({ user }) => {
	const emailInput = useRef();
	const [email, setEmail] = useState('');
	return (
		<Form onButtonPress={() => alert(user.fullName)}>
			<FormItem
				label="Email"
				isRequired
				value={email}
				onChangeText={(newEmail) => setEmail(email)}
				asterik
				ref={emailInput}
			/>
		</Form>
	);
};

import { theme } from '../../styles/theme';

/*const styles = StyleSheet.create({
	
});*/

export default ConsultantForm;
