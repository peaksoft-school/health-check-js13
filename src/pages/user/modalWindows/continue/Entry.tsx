import { IconButton, styled } from '@mui/material';
import Button from '../../../../components/UI/Button';
import BackArrow from '../../../../assets/icons/chevron-left.svg';
import { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import OnlineEntry from './OnlineEntry';
import { useAppDispatch, useAppSelector } from '../../../../hooks/customHooks';
import {
  clearSelectChoose,
  clearSelectData,
  clearSelectSpesialist,
  OnlineRecordData,
  setOnlineRecordData,
} from '../../../../store/slices/siteBarMenu/sitBarMenu';
import { getOnlineRecordCode } from '../../../../store/slices/siteBarMenu/siteBarThunk';
import { addRecordingData } from '../../../../store/slices/adminAppoitments/adminAppoitments';

interface FormData {
  name: string;
  phone: string;
  email: string;
  code: string;
}

interface EntryProps {
  handleContinueClick: () => void;
  handleClose: () => void;
}

const Entry: FC<EntryProps> = ({ handleContinueClick, handleClose }) => {
  const dispatch = useAppDispatch();
  const { selectSpesialist } = useAppSelector(state => state.siteBarMenu);
  const { allPersonalData } = useAppSelector(
    state => state.userApplicationSlice
  );

  const [constinue, setConstinue] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      name: allPersonalData.firstName || '',
      email: allPersonalData.email || '',
      phone: allPersonalData.phoneNumber || '',
    },
  });

  const name = watch('name');
  const phone = watch('phone');
  const email = watch('email');
  const code = watch('code');

  const handleConstinue = () => {
    email && dispatch(getOnlineRecordCode({ email, setConstinue }));
  };

  const handleGetOnlineRecordCode = () => {
    const data: OnlineRecordData = {
      id: selectSpesialist?.id,
      patientFullName: name,
      phoneNumber: phone,
      email: email,
      position: selectSpesialist?.position,
      doctorFullName: selectSpesialist?.name,
      dateAndTime: selectSpesialist?.times,
      isCheckout: false,
    };

    dispatch(setOnlineRecordData(data));
    dispatch(addRecordingData(data));
  };

  const recordOnline: SubmitHandler<FormData> = () => {
    setIsSubmitted(prev => !prev);
  };

  const enrollMore = () => {
    dispatch(clearSelectSpesialist());
    dispatch(clearSelectChoose());
    dispatch(clearSelectData());

    handleContinueClick();
  };

  return (
    <>
      {isSubmitted ? (
        <OnlineEntry enrollMore={enrollMore} handleClose={handleClose} />
      ) : (
        <>
          <BoxHeaderStyle>
            <IconButton onClick={handleContinueClick} aria-label="back">
              <BackArrow />
            </IconButton>
            <H2>Запись</H2>
          </BoxHeaderStyle>

          <form onSubmit={handleSubmit(recordOnline)}>
            <SelectTime>
              <LabelStyle htmlFor="name">Ваше имя и фамилия</LabelStyle>
              <InputStyle
                type="text"
                id="name"
                {...register('name', { required: 'Это поле обязательно' })}
              />
              {errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}

              <LabelStyle htmlFor="num">Номер телефона</LabelStyle>
              <InputStyle
                type="tell"
                id="num"
                {...register('phone', {
                  required: 'Введите номер телефона',
                })}
              />
              {errors.phone && (
                <ErrorMessage>{errors.phone.message}</ErrorMessage>
              )}

              <LabelStyle htmlFor="email">Ваш e-mail</LabelStyle>
              <InputStyle
                type="email"
                id="email"
                {...register('email', {
                  required: 'Введите корректный e-mail',
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: 'Неверный формат e-mail',
                  },
                })}
              />
              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}

              {constinue && (
                <>
                  <LabelStyle htmlFor="capche">Введите код из почты</LabelStyle>
                  <InputStyle
                    type="text"
                    id="capche"
                    {...register('code')}
                    style={{ width: '50%' }}
                  />
                </>
              )}

              <Button
                onClick={handleGetOnlineRecordCode}
                sx={{
                  width: '100%',
                  marginTop: '20px',
                  display: !constinue ? 'none' : '',
                }}
                type="submit"
                disabled={!(code && name && phone && email)}>
                Записаться
              </Button>
              <Button
                type="button"
                onClick={handleConstinue}
                sx={{
                  width: '100%',
                  marginTop: '20px',
                  display: constinue ? 'none' : '',
                }}
                disabled={!(name && phone && email)}>
                Продолжить
              </Button>
            </SelectTime>
          </form>
        </>
      )}
    </>
  );
};

export default Entry;

const BoxHeaderStyle = styled('div')(() => ({
  backgroundColor: 'white',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  height: '56px',
}));

const H2 = styled('h2')(() => ({
  fontSize: '18px',
  fontWeight: '700',
  color: '#048741',
  margin: '0 auto',
  paddingRight: '50px',
}));

const SelectTime = styled('div')(() => ({
  width: '95%',
  backgroundColor: 'white',
  margin: '10px',
  borderRadius: '16px',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
}));

const LabelStyle = styled('label')(() => ({
  fontSize: '16px',
  fontFamily: 'sans-serif',
  padding: '5px 0',
  color: '#4d4e51',
}));

const InputStyle = styled('input')(() => ({
  padding: '10px',
  borderRadius: '7px',
  border: '1px solid grey',
}));

const ErrorMessage = styled('span')(() => ({
  color: 'red',
  fontSize: '12px',
  marginTop: '5px',
}));
