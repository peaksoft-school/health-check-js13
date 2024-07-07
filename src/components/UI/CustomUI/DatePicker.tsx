import { forwardRef } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller, Control } from "react-hook-form";

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
					<DatePicker
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
