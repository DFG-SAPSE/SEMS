// app/auth/index.js
import React from 'react';
import { Redirect } from 'expo-router';

const AuthNavigator = () => {
	return <Redirect href="/LoginScreen" />;
};

export default AuthNavigator;
