import { forwardRef, ChangeEvent, useState } from "react";
import {
	InputAdornment,
	TextField,
	TextFieldProps,
	Typography,
	styled,
} from "@mui/material";
import eye from "../../../assets/icons/eye.svg";
import eyenot from "../../../assets/icons/noteye.svg";

interface InputProps extends Omit<TextFieldProps, "onChange" | "onClick"> {
	type: "text" | "password";
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
			fullWidth,
			...rest
		},
		ref
	) => {
		const [showPassword, setShowPassword] = useState(false);

		const handleClickEye = () => {
			setShowPassword((prev) => !prev);
		};

		const getType = () => {
			if (type === "password") {
				return showPassword ? "text" : "password";
			}
			return type;
		};

		return (
			<LabelDiv>
				<Typography sx={{ color: disabled ? "lightgray" : "#939292" }}>
					{label}
				</Typography>
				<StyledInput
					error={!!error}
					type={getType()}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					disabled={disabled}
					ref={ref}
					size={size}
					fullWidth={fullWidth}
					InputProps={{
						endAdornment: type === "password" && (
							<InputAdornment position="end">
								<img
									onClick={handleClickEye}
									src={showPassword ? eye : eyenot}
									alt={showPassword ? "eye" : "eyenot"}
									style={{ cursor: "pointer" }}
								/>
							</InputAdornment>
						),
					}}
					{...rest}
				/>
			</LabelDiv>
		);
	}
);

const StyledInput = styled(TextField)(({ theme, error }) => ({
	width: "100%",
	borderRadius: "10px",
	caretColor: theme.palette.primary.darkGreen,
	backgroundColor: "inherit",

	"& .MuiOutlinedInput-input": {
		padding: "8px 18px",
		borderRadius: "8px",
		color: theme.palette.secondary.lightBlack,
	},
	"& .MuiFormLabel-root": {
		"&.Mui-focused ": {
			color: theme.palette.secondary.darkGrey,
		},
	},

	"& .MuiOutlinedInput-root": {
		borderRadius: "8px",

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
			color: theme.palette.secondary,
			borderColor: error
				? theme.palette.error.main
				: theme.palette.primary.darkGreen,
		},

		"&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
			borderColor: theme.palette.secondary.main,
		},
	},
}));
const LabelDiv = styled("div")({
	display: "flex",
	flexDirection: "column",
});

export default Input;
