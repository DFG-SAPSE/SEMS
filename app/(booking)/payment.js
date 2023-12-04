import React, { useContext, useState } from "react";

import { BookingContext } from "../../context/BookingContext";
import BookingCommon from "../../components/booking/common/BookingCommon";
import NextButton from "../../components/booking/common/NextButton";
import VoucherForm from "../../components/booking/payment/VoucherForm";
import SelectPaymentMethod from "../../components/booking/payment/SelectPaymentMethod";

const PaymentComponent = () => {
	const [voucher, setVoucher] = useState("");
	const { updatePaymentMethod } = useContext(BookingContext);

	const handleApplyVoucher = () => {
		// Logic to apply voucher
	};

	const handleSelectPaymentMethod = (method) => {
		updatePaymentMethod(method);
	};

	const nextBtn = <NextButton nextRoute={"/booking-review"}></NextButton>;

	return (
		<BookingCommon proceedButton={nextBtn}>
			<SelectPaymentMethod
				handleSelectPaymentMethod={handleSelectPaymentMethod}
			></SelectPaymentMethod>

			<VoucherForm
				voucher={voucher}
				setVoucher={setVoucher}
				handleApplyVoucher={handleApplyVoucher}
			></VoucherForm>
		</BookingCommon>
	);
};

export default PaymentComponent;
