import { Box, Modal as MuiModal } from "@mui/material";
import { FC, ReactNode } from "react";

type ModalTypes = {
	children: ReactNode;
	open: boolean;
	onClose: () => void;
};

const Modal: FC<ModalTypes> = ({ children, open, onClose, ...rest }) => {
	return (
		<MuiModal open={open} onClose={onClose} {...rest}>
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					bgcolor: "background.paper",
					border: "none",
					boxShadow: 24,
					p: 4,
					borderRadius: "20px",
				}}>
				{children}
			</Box>
		</MuiModal>
	);
};

export default Modal;
