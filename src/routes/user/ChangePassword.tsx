import { Box, styled, Typography } from '@mui/material';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/customHooks';
import { SubmitHandler, useForm } from 'react-hook-form';
import { changePassword } from '../../store/slices/auth/authThunk';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingComponent from '../../utils/helpers/LoadingComponents';

type FormTypes = {
  oldPassword: string;
  newPassword: string;
};

const ChangePassowrd = () => {
  const token = useParams();
  const { isLoading, error } = useAppSelector(state => state.auth);
  const disaptch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormTypes>();

  const navigate = useNavigate();

  const handlerSubmit: SubmitHandler<FormTypes> = data => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { oldPassword, ...newPassword } = data;

    if (token.token) {
      disaptch(
        changePassword({
          newPassword: newPassword.newPassword,
          token: token.token,
          navigate,
        })
      );
      reset();
    }
  };
  const password = watch('newPassword');

  const goBack = () => {
    navigate('/');
  };

  return (
    <>
      {isLoading && <LoadingComponent />}
      <Container onSubmit={handleSubmit(handlerSubmit)}>
        <Typography className="two">СМЕНА ПАРОЛЯ</Typography>

        <BoxContainer>
          <Input
            border=""
            type="password"
            {...register('newPassword', {
              required: 'Поле Обязательно',
              minLength: {
                value: 8,
                message: 'Пароль должен быть минимум 8 символов',
              },
            })}
            helperText={
              errors.newPassword?.message ? errors.newPassword.message : ''
            }
            className="input"
            placeholder="Введите новый пароль"
            error={!!errors.newPassword}
          />
          <Input
            border=""
            type="password"
            {...register('oldPassword', {
              required: 'Обязательное поле',
              validate: value =>
                value === password || 'Пароли должны совпадать',
            })}
            helperText={
              errors.oldPassword?.message ? errors.oldPassword.message : ''
            }
            className="input"
            placeholder="Повторите пароль"
            error={!!errors.oldPassword}
          />

          {error && <ErrorText>{error}</ErrorText>}

          <div className="button">
            <Button type="submit">Подтвердить</Button>
            <Button onClick={goBack} type="button" variant="outlined">
              Назад
            </Button>
          </div>
        </BoxContainer>
      </Container>
    </>
  );
};

export default ChangePassowrd;

const Container = styled('form')(() => ({
  width: '490px',
  minHeight: '340px',
  margin: '100px auto',
  padding: '30px',
  position: 'relative',
  border: '1px solid black',
  borderRadius: '4px',
  boxShadow: '-7px 9px 13px 0px rgba(189,183,189,1)',

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
  gap: '10px',

  '& .input': {
    backgroundColor: 'white',
  },
  '& .button': {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
}));

const ErrorText = styled(Typography)(() => ({
  color: '#f00',
}));
