import { Typography, styled } from "@mui/material";
import { toast, ToastOptions } from "react-toastify";
import React from "react";

interface ShowToastProps {
	pending?: boolean;
	message?: string;
	status?: "success" | "error";
	duration?: number;
}
const StyledMessage = styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.darkGrey,
	fontSize: "16px",
	fontWeight: 400,
}));

export const toastifyMessage = ({
	message = "Успешно",
	status = "success",
	duration = 2000,
}: ShowToastProps): void => {
	let borderColor: string;
	let backroundColor: string;

	switch (status) {
		case "error":
			borderColor = "red";
			backroundColor = "#fff8f8";
			break;
		default:
			borderColor = "green";
			backroundColor = "#f0fef3";
			break;
	}

	const style: React.CSSProperties = {
		borderLeft: "10px solid",
		borderLeftColor: borderColor,
		borderRadius: 3,
		backgroundColor: backroundColor,
	};

	const toastOptions: ToastOptions = {
		icon: false,
		position: "top-right",
		autoClose: duration,
		style,
	};

	toast[status](<StyledMessage>{message}</StyledMessage>, toastOptions);
};
