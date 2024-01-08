import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect, Component } from 'react';
import { render } from 'react-dom';




export default function Home() {
	const [clientKey, setClientKey] = useState('test_6MLJSDGPR5BHXMOADLY7WVFPTIVJLDAW');
	const [sessionId, setSessionId] = useState('');
	const [paymentType, setPaymentType] = useState("card");
	const [amount, setAmount] = useState(10000);

	useEffect(() => {
		//adyen js script
		const script = document.createElement('script');
		script.src = 'https://checkoutshopper-test.adyen.com/checkoutshopper/sdk/5.40.0/adyen.js';
		script.integrity = 'sha384-ds1t0hgFCe636DXFRL6ciadL2Wb4Yihh27R4JO7d9CF7sFY3NJE4aPCK0EpzaYXD';
		script.crossOrigin = 'anonymous';
		document.body.appendChild(script);

		//adyen css file
		const css = document.createElement('link');
		css.rel = "stylesheet"
		css.href = "https://checkoutshopper-test.adyen.com/checkoutshopper/sdk/5.40.0/adyen.css"
		css.integrity = "sha384-BRZCzbS8n6hZVj8BESE6thGk0zSkUZfUWxL/vhocKu12k3NZ7xpNsIK39O2aWuni"
		css.crossOrigin = "anonymous"
		document.body.appendChild(css);


		script.onload = () => {
			startCheckout();
		};
	}, []);

	//beings the payment procedure
	const startCheckout = async () => {

		try {
			// Init Sessions
			const checkoutSessionResponse = await callServer("http://127.0.0.1:5000/api/sessions");
			// const checkoutSessionResponse = ""
			setSessionId(checkoutSessionResponse)
			// Create AdyenCheckout using Sessions response
			const checkout = await createAdyenCheckout(checkoutSessionResponse)

			// Create an instance of Drop-in and mount it to the container you created.
			const dropinComponent = checkout.create(paymentType).mount("#component");
			// console.log(dropinComponent)

		} catch (error) {
			console.error(error);
			// alert("Error occurred. Look at console for details");
		}
	}
	//creates an html component to render
	const createAdyenCheckout = async (session) => {
		const configuration = {
			clientKey,
			locale: "en_US",
			environment: "test",  // change to live for production
			showPayButton: true,
			session: session,
			paymentMethodsConfiguration: {
				ideal: {
					showImage: true
				},
				card: {
					hasHolderName: true,
					holderNameRequired: true,
					name: "Credit or debit card",
					amount: {
						value: amount, // 100€ in minor units
						currency: "USD"
					}
				},
				paypal: {
					amount: {
						currency: "USD",
						value: amount // 100€ in minor units
					},
					environment: "test",
					countryCode: "US"   // Only needed for test. This will be automatically retrieved when you are in production.
				}
			},
			onPaymentCompleted: (result, component) => {
				handleServerResponse(result, component);
			},
			onError: (error, component) => {
				console.error(error.name, error.message, error.stack, component);
			}
		};

		return new AdyenCheckout(configuration);
	}
	//redirect the user after the payment
	function handleServerResponse(res, component) {
		if (res.action) {
			component.handleAction(res.action);
		} else {
			switch (res.resultCode) {
				case "Authorised":
					alert("success!")
					window.location.href = "/home"
					break;
				case "Pending":
				case "Received":
					alert("pending!")
					break;
				case "Refused":
					alert("refused")
					break;
				default:
					// window.location.href = "/result/error";
					alert("error!")
					break;
			}
		}
	}
	//make api calls
	const callServer = async (url, data) => {
		const res = await fetch(url, {
			method: "POST",
			mode: "cors",
			body: data ? JSON.stringify(data) : "",
			headers: {
				"Content-Type": "application/json"
			}
		});

		return await res.json();
	}

	return (
		<View style={styles.container}>
			{/* adyen payment component is rendered*/}
			<div id="component" className="payment"></div>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
