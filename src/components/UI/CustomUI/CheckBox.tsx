import React, { forwardRef } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

interface CheckboxUIProps {
	label?: string;
	checked?: boolean;
	onChange?: (
		event: React.ChangeEvent<HTMLInputElement>,
		checked: boolean
	) => void;
}

const CheckboxMui = forwardRef<HTMLInputElement, CheckboxUIProps>(
	({ label, checked, onChange }, ref) => {
		return (
			<FormControlLabel
				label={label}
				control={
					<Checkbox
						checked={checked}
						onChange={onChange}
						inputRef={ref}
						style={{ color: "green" }}
					/>
				}
			/>
		);
	}
);

export default CheckboxMui;
