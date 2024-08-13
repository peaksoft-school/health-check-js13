import { Box, Modal as MuiModal, styled } from '@mui/material';
import { FC, ReactNode } from 'react';

type ModalTypes = {
  children?: ReactNode;
  open: boolean;
  onClose?: () => void;
};

const Modal: FC<ModalTypes> = ({ children, open, onClose, ...rest }) => (
  <MuiModal open={open} onClose={onClose} {...rest}>
    <ContentModal>{children}</ContentModal>
  </MuiModal>
);

export default Modal;

const ContentModal = styled(Box)(() => ({
  position: 'absolute',
  top: '48%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  border: 'none',
  boxShadow: '24px',
  borderRadius: '8px',
}));
