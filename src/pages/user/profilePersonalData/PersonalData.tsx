import { Box, styled, Typography, Button as MuiButton } from '@mui/material';
import Button from '../../../components/UI/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../../../components/UI/Input';
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from '../../../hooks/customHooks';
import {
  getPersonalData,
  putPersonalData,
} from '../../../store/slices/userApplication/userThunk';
import { useEffect } from 'react';

type FormValues = {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

const PersonalData = () => {
  const dispatch = useAppDispatch();
  const { allPersonalData } = useAppSelector(
    (state: RootState) => state.userSlice
  );
  useEffect(() => {
    dispatch(getPersonalData());
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: allPersonalData.firstName || undefined,
      lastName: allPersonalData.lastName || undefined,
      email: allPersonalData.email || undefined,
      phoneNumber: allPersonalData.phoneNumber || undefined,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = charityData => {
    const allData = { ...allPersonalData, ...charityData };
    console.log('data', allData);
    dispatch(putPersonalData(allData));
  };

  return (
    <>
      <StyleH1 variant="h1">Ваши личные данные</StyleH1>

      <StyleForm onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <label htmlFor="firstName">Имя</label> <br />
          <StyledTextField
            fullWidth
            id="firstName"
            variant="outlined"
            {...register('firstName', { required: 'Имя обязательно' })}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />
        </Box>
        <Box>
          <label htmlFor="lastName">Фамилия</label> <br />
          <StyledTextField
            fullWidth
            id="lastName"
            variant="outlined"
            {...register('lastName', { required: 'Фамилия обязательна' })}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
        </Box>
        <Box>
          <label htmlFor="email">E-mail</label> <br />
          <StyledTextField
            fullWidth
            id="email"
            type="email"
            variant="outlined"
            {...register('email', {
              required: 'E-mail обязателен',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Неверный формат E-mail',
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Box>
        <Box>
          <label htmlFor="phoneNumber">Телефон</label> <br />
          <StyledTextField
            fullWidth
            id="phoneNumber"
            variant="outlined"
            {...register('phoneNumber', { required: 'Телефон обязателен' })}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
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

export default PersonalData;

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
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
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
