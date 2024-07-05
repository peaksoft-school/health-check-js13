import { forwardRef, ChangeEvent } from "react";
import { TextField, TextFieldProps, styled } from "@mui/material";

interface InputProps extends Omit<TextFieldProps, "onChange" | "onClick"> {
	type?: string;
	label?: string;
	placeholder?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	error?: boolean;
	value?: string | number;
	disabled?: boolean;
	inputcolor?: string;
	backgroundcolor?: string;
	bordercolor?: string;
	focusedbordercolor?: string;
	hoverbordercolor?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			type,
			label,
			placeholder,
			onChange,
			error,
			value,
			disabled,
			size,
			...rest
		},
		ref
	) => {
		return (
			<StyledInput
				error={!!error}
				type={type}
				label={label}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				disabled={disabled}
				ref={ref}
				size={size}
				{...rest}
			/>
		);
	}
);

const StyledInput = styled(TextField)(({ theme, error }) => ({
	height: "42px",
	borderRadius: "8px",
	caretColor: theme.palette.primary.darkGreen,
	backgroundColor: "inherit",

	"& .MuiOutlinedInput-input": {
		borderRadius: "2px",
		color: theme.palette.secondary.lightBlack,
	},

	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: error
				? theme.palette.error.main
				: theme.palette.secondary.lightBlack,
		},

		"&:hover fieldset": {
			borderColor: error
				? theme.palette.error.main
				: theme.palette.secondary.darkGrey,
		},

		"&.Mui-focused fieldset": {
			borderWidth: "1px",
			borderColor: error
				? theme.palette.error.main
				: theme.palette.primary.darkGreen,
		},

		"&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
			borderColor: theme.palette.secondary.main,
		},
	},
}));

export default Input;
