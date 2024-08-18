import { Box, styled, Typography } from '@mui/material';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import Gogle from '../../assets/icons/gogle.svg';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks/customHooks';
import { signIn } from '../../store/slices/auth/authThunk';
import { useNavigate } from 'react-router-dom';
import UndoIcon from '@mui/icons-material/Undo';
import LoadingComponent from '../../utils/helpers/LoadingComponents';

type InputTypes = {
  email: string;
  password: string;
};

const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<InputTypes>({ mode: 'onSubmit' });

  const goBackSignUp = () => {
    navigate('/sign-up');
  };

  const onSubmit = (data: InputTypes) => {
    dispatch(signIn({ data, navigate }));
    reset();
  };

  const goBack = () => {
    navigate('/');
  };

  const forgotPassowrd = () => {
    navigate('/forgot-password');
  };

  return (
    <>
      {/* {isLoading && <LoadingComponent />} */}
      <Container>
        <div className="back" onClick={goBack}>
          <UndoIcon className="icon" />
        </div>
        <h2>ВОЙТИ</h2>

        <ContainerForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            className="input"
            {...register('email', {
              required: 'Обязательное поле',
              pattern: {
                value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                message: 'Введите действительный email',
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message || ''}
            size="small"
          />
          <Input
            className="input"
            {...register('password', {
              required: 'Обязательное поле',
              minLength: {
                value: 8,
                message: 'Пароль должен быть минимум 8 символов',
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message || ''}
            type="password"
            size="small"
          />
          <Button type="submit">Войти</Button>
        </ContainerForm>
        <BlockTwo>
          <TypographyStyle onClick={forgotPassowrd}>
            Забыли пароль?
          </TypographyStyle>
          <BoxHr>
            <One>
              <hr />
            </One>
            <Two>или</Two>
            <Three>
              <hr />
            </Three>
          </BoxHr>
          <BoxGoogle>
            <Gogle />
            Зарегистрироваться с Google
          </BoxGoogle>
          <TypographyStyled>
            Нет аккаунта? <span onClick={goBackSignUp}>Зарегистрироваться</span>
          </TypographyStyled>
        </BlockTwo>
      </Container>
    </>
  );
};

export default SignIn;

const Container = styled(Box)(() => ({
  width: '550px',
  minHeight: '450px',
  borderRadius: '4px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: '"Manrope",san-serif',
  padding: '30px',
  border: '1px solid black',
  margin: '50px auto',
  boxShadow: '-7px 9px 13px 0px rgba(189,183,189,1)',

  '& h2': {
    margin: '20px 0 10px 0',
    textAlign: 'center',
    fontWeight: '400',
  },
  '& .input': {
    backgroundColor: 'white',
  },
}));

const ContainerForm = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
}));

const TypographyStyle = styled(Typography)(() => ({
  textAlign: 'center',
  marginTop: '30px',
  cursor: 'pointer',
  color: '#346EFB',
  transition: 'all 0.3s',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const BlockTwo = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
}));

const BoxHr = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  margin: '20px 0',
  '& hr': {
    backgroundColor: '#F3F1F1',
    width: '100%',
    height: '1px',
    border: 'none',
  },
}));

const One = styled(Box)(() => ({
  width: '39.5%',
}));

const Two = styled(Box)(() => ({
  width: '20%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: '"Manrope", san-serif',
}));

const Three = styled(Box)(() => ({
  width: '39.5%',
}));

const BoxGoogle = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  cursor: 'pointer',
  fontFamily: '"Manrope", san-serif',
  fontWeight: '600',
  backgroundColor: '#F5F5F5',
  padding: '13px 10px',
  borderRadius: '8px',
  '& > img': {
    width: '20px',
    height: '20px',
  },
}));

const TypographyStyled = styled(Typography)(() => ({
  textAlign: 'center',
  marginBottom: '30px',
  marginTop: '10px',
  '& > span': {
    color: '#346EFB',
    cursor: 'pointer',
    fontWeight: '300',
    marginLeft: '10px',
  },
}));
