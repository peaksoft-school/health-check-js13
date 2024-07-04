import { forwardRef, ChangeEvent } from "react";
import { TextField, TextFieldProps, styled } from "@mui/material";

interface InputProps extends Omit<TextFieldProps, "onChange" | "onClick"> {
	type?: string;
	label?: string;
	placeholder?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	error?: boolean;
	onClick?: () => void;
	value?: string | number;
	disabled?: boolean;
	inputColor?: string;
	backgroundColor?: string;
	borderColor?: string;
	focusedBorderColor?: string;
	hoverBorderColor?: string;
}

interface TextFieldPropsStyled {
	inputColor?: string;
	backgroundColor?: string;
	borderColor?: string;
	focusedBorderColor?: string;
	hoverBorderColor?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			type,
			label,
			placeholder,
			onChange,
			error,
			onClick,
			value,
			disabled,
			inputColor,
			backgroundColor,
			borderColor,
			focusedBorderColor,
			hoverBorderColor,
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
				inputColor={inputColor}
				backgroundColor={backgroundColor}
				borderColor={borderColor}
				focusedBorderColor={focusedBorderColor}
				hoverBorderColor={hoverBorderColor}
				size={size}
				{...rest}
			/>
		);
	}
);

const StyledInput = styled(TextField)<TextFieldPropsStyled>(
	({
		theme,
		inputColor,
		backgroundColor,
		borderColor,
		focusedBorderColor,
		hoverBorderColor,
		error,
	}) => ({
		height: "42px",
		borderRadius: "8px",
		caretColor: theme.palette.primary.darkGreen,
		backgroundColor: backgroundColor || "inherit",

		"& .MuiOutlinedInput-input": {
			borderRadius: "2px",
			color: inputColor || theme.palette.secondary.lightBlack,
		},

		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: error
					? theme.palette.error.main
					: borderColor || theme.palette.secondary.lightBlack,
			},

			"&:hover fieldset": {
				borderColor: error
					? theme.palette.error.main
					: hoverBorderColor || theme.palette.secondary.darkGrey,
			},

			"&.Mui-focused fieldset": {
				borderWidth: "1px",
				borderColor: error
					? theme.palette.error.main
					: focusedBorderColor || theme.palette.primary.darkGreen,
			},

			"&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
				borderColor: theme.palette.secondary.main,
			},
		},
	})
);

export default Input;
