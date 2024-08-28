import { Box, styled } from '@mui/material';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks/customHooks';
import { forgotPasswordEmail } from '../../store/slices/auth/authThunk';
import { useNavigate } from 'react-router-dom';
import { Button as MyButton } from '@mui/material';
import LoadingComponent from '../../utils/helpers/LoadingComponents';

type FormTypes = {
  email: string;
  link: string;
};

const ForgotPassword = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(state => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormTypes>({ mode: 'onSubmit' });

  const linkObj = window.location.origin;

  const link = `${linkObj}/reset_password`;

  const navigate = useNavigate();

  const submitHandlerOn = (value: FormTypes) => {
    dispatch(
      forgotPasswordEmail({
        email: value.email,
        link,
      })
    );
    reset();
  };

  const goBackFn = () => {
    navigate('/sign-in');
  };

  return (
    <StyledContainer>
      {isLoading && <LoadingComponent />}
      <Block>
        <h1>ЗАБЫЛИ ПАРОЛЬ?</h1>
      </Block>
      <ContainerForm onSubmit={handleSubmit(submitHandlerOn)}>
        <div>
          <h2 className="h2">Вам будет отправлена ссылка для сброса пароля</h2>
          <Input
            className="input"
            size="small"
            {...register('email', {
              required: 'Заполните поле',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Введите действительный адрес электронной почты',
              },
            })}
            helperText={errors.email ? errors.email.message : ''}
            placeholder="Введите ваш Email"
            fullWidth
          />
        </div>
        <BoxStyled>
          <Button type="submit">ОТПРАВИТЬ</Button>
          <MyButton onClick={goBackFn} variant="text">
            Назад
          </MyButton>
        </BoxStyled>
      </ContainerForm>
    </StyledContainer>
  );
};

export default ForgotPassword;

const StyledContainer = styled(Box)(() => ({
  width: '490px',
  minHeight: '340px',
  display: 'flex',
  flexDirection: 'column',
  margin: '100px auto',
  gap: '20px',
  border: '1px solid black',
  alignItems: 'center',
  fontFamily: '"Manrope" , san-serif',
  padding: '30px 40px',
  backgroundColor: 'white',
  borderRadius: '4px',
  '& .box': {
    position: 'absolute',
    top: '2px',
    right: '2px',
  },
}));

const Block = styled(Box)(() => ({
  '& > h1': {
    fontFamily: '"Manrope" , san-serif',
    fontWeight: '500',
    fontSize: '22px',
    textAlign: 'center',
  },
  margin: '30px 0 10px 0 ',
}));

const ContainerForm = styled('form')(() => ({
  width: '100%',
  minHeight: '100px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',

  '& .input': {
    backgroundColor: 'white',
  },
  '& .h2': {
    fontSize: '14px',
    color: '#959595',
    textAlign: 'start',
    marginBottom: '10px',
    fontWeight: '300',
  },
}));

const BoxStyled = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',

  '& > button': {
    padding: '10px 10px',
    backgroundColor: 'white',
    border: 'none',
    cursor: 'pointer',
    color: 'grey',
  },
}));
