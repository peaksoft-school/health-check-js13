import { Box, styled, Typography } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import Gogle from '../../assets/icons/gogle.svg';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import { useAppDispatch, useAppSelector } from '../../hooks/customHooks';
import { googleAuthFirbase, signUp } from '../../store/slices/auth/authThunk';
import { useNavigate } from 'react-router-dom';
import LoadingComponent from '../../utils/helpers/LoadingComponents';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../configs/firebase';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  SignUpFormSchema,
  signUpSchema,
} from '../../utils/validations/signUpSchema';

const SignUp = () => {
  const { isLoading, error: storeError } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpFormSchema> = formData => {
    dispatch(signUp({ formData, navigate }));
  };

  const signInFunc = () => {
    navigate('/sign-in');
  };

  const goBack = () => {
    navigate('/');
  };

  const googleAuthFn = () => {
    signInWithPopup(auth, provider)
      .then(data => {
        if (data.user) {
          data.user.getIdToken().then(token => {
            dispatch(googleAuthFirbase({ tokenId: token }));
          });
        }
      })
      .catch(error => {
        console.error('Ошибка при аутентификации через Google:', error);
      });
  };

  return (
    <>
      <ContainerForm onSubmit={handleSubmit(onSubmit)}>
        <Typography className="Typography">Регистрация</Typography>
        <Input
          className="input"
          {...register('firstName')}
          error={!!errors.firstName}
          helperText={errors.firstName?.message || ''}
          size="small"
          placeholder="Имя"
        />
        <Input
          className="input"
          {...register('lastName')}
          error={!!errors.lastName}
          helperText={errors.lastName?.message || ''}
          size="small"
          placeholder="Фамилия"
        />
        <Input
          className="input"
          {...register('phoneNumber')}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message || ''}
          size="small"
          placeholder="+996 (_ _ _) _ _  _ _  _ _ "
        />
        <Input
          className="input"
          {...register('email', {
            pattern: {
              value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
              message: 'Введите действительный email',
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message || ''}
          size="small"
          placeholder="Email"
        />
        <Input
          className="input"
          {...register('password')}
          error={!!errors.password}
          helperText={errors.password?.message || ''}
          size="small"
          type="password"
          placeholder="Введите пароль"
        />
        <Input
          className="input"
          {...register('confirmPassword')}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message || ''}
          size="small"
          type="password"
          placeholder="Повторите пароль"
        />

        {storeError ? <ErrorText>{storeError}</ErrorText> : null}

        <Button className="button" type="submit">
          Создать аккаунт
        </Button>
        <Button onClick={goBack} sx={{ marginTop: '10px' }} variant="outlined">
          Назад Домой
        </Button>
        <BoxHr>
          <One>
            <hr />
          </One>
          <Two>или</Two>
          <Three>
            <hr />
          </Three>
        </BoxHr>
        <BoxGoogle onClick={googleAuthFn}>
          <Gogle />
          Зарегистрироваться с Google
        </BoxGoogle>
        {isLoading && <LoadingComponent />}
        <TypographyStyled>
          У вас уже есть аккаунт?
          <span onClick={signInFunc}>Войти</span>
        </TypographyStyled>
      </ContainerForm>
    </>
  );
};

export default SignUp;

const ContainerForm = styled('form')(() => ({
  width: '550px',
  minHeight: '650px',
  margin: '50px auto',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 40px',
  borderRadius: '8px',
  border: '1px solid #bebeb6',
  boxShadow: '-7px 9px 5px 0px #dbd8db',

  '& .input': {
    marginBottom: '20px',
    backgroundColor: 'white',
  },

  '& > .Typography': {
    textAlign: 'center',
    fontSize: '25px',
    fontWeight: '300',
    marginTop: '20px',
    marginBottom: '10px',
  },
  '& .button': {
    marginTop: '10px',
  },
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
  fontFamily: '"Manrope", sans-serif',
  fontWeight: '300',
  marginTop: '30px',
  '& > span': {
    color: '#346EFB',
    marginLeft: '10px',
    cursor: 'pointer',
  },
}));

const ErrorText = styled(Typography)(() => ({
  color: '#f00',
}));
