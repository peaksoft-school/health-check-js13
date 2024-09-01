import { useState } from 'react';
import { Box, ButtonBase, Typography, styled } from '@mui/material';
import { Modal as MuiModal } from '@mui/material';
import Button from '../Button';
import Korzina from '../../../assets/icons/Korzina.svg';
import { useAppDispatch, useAppSelector } from '../../../hooks/customHooks';

type PropsDelete = {
  deleteFn?: (ids: string[]) => void;
  variant?: string;
};

type I = {
  isDisabled: boolean;
};

const DeleteSelected = ({ deleteFn, variant }: PropsDelete) => {
  const { isChecked, deleteUser } = useAppSelector(store => store.application);
  const [toggleModal, setToggleModal] = useState(false);

  const dispatch = useAppDispatch();

  const toggleModalHandler = () => setToggleModal(prev => !prev);

  const deleteHandler = () => {
    if (variant === 'applications') {
      dispatch(deleteFn(deleteUser));
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
        open={toggleModal}>
        <StyledContainer>
          <Typography className="description">
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

export default DeleteSelected;

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
