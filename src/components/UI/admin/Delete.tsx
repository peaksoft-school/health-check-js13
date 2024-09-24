import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, ButtonBase, Typography, styled } from '@mui/material';
import Modal from '../Modal';
import Button from '../Button';
import Korzina from '../../../assets/icons/Korzina.svg';
import { AppDispatch } from '../../../hooks/customHooks';
import { AsyncThunkAction } from '@reduxjs/toolkit';

type TProps = {
  id: number;
  name?: string;
  disabled?: boolean;
  deleteFn: (params: {
    deleteUser: number[];
    value: string;
  }) => AsyncThunkAction<any, void, {}>;
  variant?: string;
  isProcessed?: boolean;
  value: string;
};

const Delete = ({
  id,
  deleteFn,
  variant,
  name,
  isProcessed,
  value,
}: TProps) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setOpen(prev => !prev);
  };
  const isDisabled = variant === 'patients' ? false : !isProcessed;

  let deleteUser = [id];

  const deleteHandler = (e: any) => {
    e.stopPropagation();
    if (deleteFn) {
      (dispatch as AppDispatch)(deleteFn({ deleteUser, value }));
    }
    toggleModal();
  };

  return (
    <>
      <StyledDeleteButton onClick={toggleModal} disabled={isDisabled}>
        <Korzina />
      </StyledDeleteButton>

      <Modal open={open}>
        <StyledModalContent>
          <Typography className="description">
            Вы уверены, что хотите удалить
          </Typography>

          <Typography className="name">{name}</Typography>

          <Box className="buttons-container">
            <Button className="button" onClick={toggleModal}>
              Отменить
            </Button>

            <Button className="button" onClick={deleteHandler}>
              Удалить
            </Button>
          </Box>
        </StyledModalContent>
      </Modal>
    </>
  );
};

export default Delete;

const StyledDeleteButton = styled(ButtonBase)(() => ({
  cursor: 'pointer',
  width: '26px',
  height: '22px',
  transition: '0.3s linear',

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.2,
  },
}));

const StyledModalContent = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  margin: '50px',

  '& > .name': {
    fontFamily: 'Manrope',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '24.59px',
    marginBottom: '1.25rem',
  },

  '& > .description': {
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '24.59px',
  },

  '& > .buttons-container': {
    display: 'flex',
    gap: '18px',
  },

  '& > div > .button': {
    height: '2.625rem',
    padding: '0.625rem 1.25rem !important',
  },
}));
