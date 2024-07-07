import { forwardRef } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller, Control } from "react-hook-form";
import { styled } from "@mui/material";

interface CustomDatePickerProps {
	control?: Control<any>;
	label?: string;
	name: string;
}

const CustomDatePicker = forwardRef<HTMLInputElement, CustomDatePickerProps>(
	({ control, label, name }, ref) => {
		return (
			<Controller
				name={name}
				control={control}
				defaultValue={null}
				render={({ field: { onChange, value } }) => (
					<DatePickerStyled
						inputRef={ref}
						label={label}
						value={value}
						onChange={(newValue) => {
							onChange(newValue);
						}}
					/>
				)}
			/>
		);
	}
);

export default CustomDatePicker;

const DatePickerStyled = styled(DatePicker)({
	"& .MuiInputBase-input": {
		padding: "8px 18px",
		borderRadius: "4px",
		fontSize: "16px",
		color: "rgba(0, 0, 0, 0.87)",
		backgroundColor: "white",
	},
});
