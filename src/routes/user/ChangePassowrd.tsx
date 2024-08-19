import { Box, styled, Typography } from '@mui/material';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import CloseIcon from '../../assets/icons/CloseIcon.svg';
import { useAppDispatch } from '../../hooks/customHooks';
import { SubmitHandler, useForm } from 'react-hook-form';
import { changePassword } from '../../store/slices/auth/authThunk';
import { useParams } from 'react-router-dom';

type PropsTypes = {
  openChnageModal?: () => void;
};

type FormTypes = {
  oldPassword?: string;
  newPassword?: string;
};

const ChangePassowrd = ({ openChnageModal }: PropsTypes) => {
  const { token } = useParams();
  console.log(token);

  const disaptch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handlerSubmit: SubmitHandler<FormTypes> = data => {
    disaptch(changePassword(data));
    reset();
  };

  return (
    <Container onSubmit={handleSubmit(handlerSubmit)}>
      <div className="box" onClick={openChnageModal}>
        <CloseIcon />
      </div>
      <Typography className="two">СМЕНА ПАРОЛЯ</Typography>
      <Typography className="one">
        Вам будет отправлена ссылка для сброса пароля
      </Typography>
      <BoxContainer>
        <Input placeholder="Введите новый пароль" />
        <Input placeholder="Повторите пароль" />
        <Button>Подтвердить</Button>
      </BoxContainer>
    </Container>
  );
};

export default ChangePassowrd;

const Container = styled('form')(() => ({
  width: '490px',
  minHeight: '340px',
  margin: '0 auto',
  padding: '30px',
  position: 'relative',
  '& > .box': {
    position: 'absolute',
    top: '2px',
    right: '2px',
  },
  '& > .two': {
    fontFamily: '"Manrope" , san-serif',
    fontWeight: '500',
    fontSize: '22px',
    textAlign: 'center',
    margin: '20px 0 10px 0',
  },
  '& > .one': {
    fontFamily: '"Manrope" , san-serif',
    fontWeight: '500',
    fontSize: '14px',
    color: '#959595',
    margin: '0 0 5px 0',
  },
}));

const BoxContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
}));
