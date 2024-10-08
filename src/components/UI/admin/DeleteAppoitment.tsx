import { useState } from 'react';
import {
  Box,
  ButtonBase,
  Typography,
  styled,
  Modal as MuiModal,
} from '@mui/material';
import Button from '../Button';
import Korzina from '../../../assets/icons/Korzina.svg';
import { useAppDispatch, useAppSelector } from '../../../hooks/customHooks';
import { AsyncThunkAction } from '@reduxjs/toolkit';

type PropsDelete = {
  deleteFn?: (params: {
    deleteUser: string[];
    value: string;
  }) => AsyncThunkAction<any, void, {}>;
  variant?: string;
  disabled?: boolean;
  value: string;
};

const DeleteSelectedAppoitment = ({
  deleteFn,
  variant = '',
  value,
}: PropsDelete) => {
  const { deleteUser, isChecked } = useAppSelector(store => store.appoitment);
  console.log(deleteUser);
  const [toggleModal, setToggleModal] = useState(false);
  const dispatch = useAppDispatch();

  const getIds = () => ({
    deleteUser: deleteUser.length ? deleteUser : [],
    value,
  });

  const toggleModalHandler = () => setToggleModal(prev => !prev);

  const deleteHandler = () => {
    if (variant === 'appotment' && deleteUser.length) {
      deleteFn && dispatch(deleteFn({ deleteUser, value }));
    } else {
      deleteFn && dispatch(deleteFn(getIds()));
    }
    toggleModalHandler();
  };

  return (
    <>
      <StyledDeleteButton onClick={toggleModalHandler} disabled={!isChecked}>
        <Korzina />
      </StyledDeleteButton>

      <MuiModal
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        onClose={toggleModalHandler}
        open={toggleModal}
        aria-labelledby="delete-modal-title"
        aria-describedby="delete-modal-description">
        <StyledContainer>
          <Typography id="delete-modal-description" className="description">
            Вы уверены, что хотите удалить выбранные?
          </Typography>

          <Box className="buttons-container">
            <Button className="button" onClick={toggleModalHandler}>
              Отменить
            </Button>

            <Button className="button" onClick={deleteHandler}>
              Удалить
            </Button>
          </Box>
        </StyledContainer>
      </MuiModal>
    </>
  );
};

export default DeleteSelectedAppoitment;

const StyledDeleteButton = styled(ButtonBase)(() => ({
  width: '26px',
  height: '22px',
  transition: '0.3s linear',

  '&:disabled': {
    opacity: 0.2,
    cursor: 'not-allowed',
  },
}));

const StyledContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  margin: '0.63rem 1.38rem',
  backgroundColor: 'white',
  width: '600px',
  height: '200px',
  borderRadius: '10px',

  '& > .description': {
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '24.59px',
    marginBottom: '40px',
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
