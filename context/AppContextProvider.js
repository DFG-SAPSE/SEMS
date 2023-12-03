import React from "react";
import BookingProvider from "./BookingContext";

const AppContextProvider = ({ children }) => {
	const providers = [BookingProvider];

	return providers.reduce(
		(children, Provider) => <Provider>{children}</Provider>,
		children
	);
};

export default AppContextProvider;
