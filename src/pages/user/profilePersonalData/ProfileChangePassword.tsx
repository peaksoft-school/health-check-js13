import { Box, styled, Typography, Button as MuiButton } from '@mui/material';
import Button from '../../../components/UI/Button';
import Input from '../../../components/UI/Input';
import { useAppDispatch } from '../../../hooks/customHooks';
import { useForm } from 'react-hook-form';
import { putChangePersonalPassword } from '../../../store/slices/userApplication/userThunk';

type FormValues = {
  oldPassword: string;
  password?: string;
  newPassword: string;
};

const ProfileChangePassword = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormValues>();

  const onSubmit = ({ oldPassword, newPassword }: FormValues) => {
    dispatch(putChangePersonalPassword({ oldPassword, newPassword }));
  };

  return (
    <>
      <StyleH1 variant="h1">Смена пароля</StyleH1>

      <StyleForm onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <label htmlFor="oldPassword" style={{ color: '#272827' }}>
            Старый пароль
          </label>
          <br />
          <StyledTextField
            placeholder="Введите ваш пароль"
            type="password"
            fullWidth
            id="oldPassword"
            autoComplete="current-password"
            {...register('oldPassword', { required: 'Введите старый пароль' })}
            error={!!errors.oldPassword}
            helperText={errors.oldPassword?.message}
          />
        </Box>

        <Box>
          <label htmlFor="password" style={{ color: '#272827' }}>
            Новый пароль
          </label>
          <br />
          <StyledTextField
            placeholder="Введите новый пароль"
            type="password"
            fullWidth
            id="password"
            autoComplete="current-password"
            {...register('password', {
              required: 'Введите новый пароль',
              minLength: {
                value: 8,
                message: 'Пароль должен содержать минимум 8 символов',
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </Box>

        <Box>
          <label htmlFor="newPassword" style={{ color: '#272827' }}>
            Подтвердить новый пароль
          </label>
          <br />
          <StyledTextField
            placeholder="Подтвердите пароль"
            type="password"
            fullWidth
            id="newPassword"
            autoComplete="current-password"
            {...register('newPassword', {
              required: 'Подтвердите новый пароль',
              validate: value =>
                value === getValues('password') || 'Пароли не совпадают',
            })}
            error={!!errors.newPassword}
            helperText={errors.newPassword?.message}
          />
        </Box>

        <ButtonContainer>
          <MyButton fullWidth type="button">
            назад
          </MyButton>
          <Button type="submit">Редактировать</Button>
        </ButtonContainer>
      </StyleForm>
    </>
  );
};

export default ProfileChangePassword;

const StyleH1 = styled(Typography)(() => ({
  fontSize: '24px',
  padding: '25px 0',
}));

const StyledTextField = styled(Input)(() => ({
  backgroundColor: '#ffffff',

  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    padding: '0px 12px',
    margin: '5px 0 0 0',
    height: '50px',
  },
}));

const StyleForm = styled('form')(() => ({
  width: '500px',
  display: 'grid',
  gap: '30px',
}));

const ButtonContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '25px',
}));

const MyButton = styled(MuiButton)(() => ({
  '&.MuiButtonBase-root': {
    padding: '14px 32px',
    borderRadius: '10px',
    border: '2px solid #059352',
    color: '#059352',
    transition: 'all 0.2s ',
    height: '44px',
  },
}));
