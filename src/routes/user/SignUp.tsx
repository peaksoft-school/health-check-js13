import { Box, styled, Typography } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import CloseIcon from '@mui/icons-material/Close';
import Gogle from '../../assets/icons/gogle.svg';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import { useAppDispatch } from '../../hooks/customHooks';
import { signUp } from '../../store/slices/auth/authThunk';

type TProps = {
  onClose?: () => void;
  handleToggleSignIn: () => void;
};

type TTypesRegistr = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

const SignUp = ({ onClose, handleToggleSignIn }: TProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<TTypesRegistr>();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<TTypesRegistr> = data => {
    const { confirmPassword, ...restData } = data;
    dispatch(signUp(restData));
    onClose?.();
    reset();
  };

  const password = watch('password');

  return (
    <>
      <ContainerForm onSubmit={handleSubmit(onSubmit)}>
        <BoxStyled onClick={onClose}>
          <CloseIcon />
        </BoxStyled>
        <Typography className="Typography">Регистрация</Typography>
        <Input
          className="input"
          {...register('firstName', { required: 'Обязательное поле' })}
          error={!!errors.firstName}
          helperText={errors.firstName?.message || ''}
          size="small"
          placeholder="Имя"
        />
        <Input
          className="input"
          {...register('lastName', { required: 'Обязательное поле' })}
          error={!!errors.lastName}
          helperText={errors.lastName?.message || ''}
          size="small"
          placeholder="Фамилия"
        />
        <Input
          className="input"
          {...register('phoneNumber', { required: 'Обязательное поле' })}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message || ''}
          size="small"
          placeholder="+996 (_ _ _) _ _  _ _  _ _ "
        />
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
          placeholder="Email"
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
          size="small"
          type="password"
          placeholder="Введите пароль"
        />
        <Input
          className="input"
          {...register('confirmPassword', {
            required: 'Обязательное поле',
            validate: value => value === password || 'Пароли должны совпадать',
          })}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message || ''}
          size="small"
          type="password"
          placeholder="Повторите пароль"
        />
        <Button className="button" type="submit">
          Создать аккаунт
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
        <BoxGoogle>
          <Gogle />
          Зарегистрироваться с Google
        </BoxGoogle>
        <TypographyStyled>
          У вас уже есть аккаунт?
          <span
            onClick={() => {
              handleToggleSignIn();
              onClose?.();
            }}>
            Войти
          </span>
        </TypographyStyled>
      </ContainerForm>
    </>
  );
};

export default SignUp;

const ContainerForm = styled('form')(() => ({
  width: '550px',
  minHeight: '650px',
  margin: '0 auto',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 40px',
  borderRadius: '8px',
  '& .input': {
    marginBottom: '20px',
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

const BoxStyled = styled(Box)(() => ({
  position: 'absolute',
  top: '5px',
  right: '5px',
  cursor: 'pointer',
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
