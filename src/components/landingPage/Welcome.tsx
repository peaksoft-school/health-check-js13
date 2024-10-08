import { useEffect, useState } from 'react';
import { styled, Modal as MuiModal, Box, Typography } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../UI/Input';
import Image from '../../assets/images/DoctorMakc.png';
import MaleFemale from '../../assets/icons/MaleFemaleIcon.svg';
import CallProgres from '../../assets/icons/CallProgressIcon.svg';
import Arrow from '../../assets/icons/ArrowIcon.svg';
import Close from '../../assets/icons/CloseIcon.svg';
import Gogle from '../../assets/icons/gogle.svg';
import Button from '../UI/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/customHooks';
import { postApplication } from '../../store/slices/adminApplication/adminApplicationThunk';
import LoadingComponent from '../../utils/helpers/LoadingComponents';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../configs/firebase';
import { googleAuthFirbase } from '../../store/slices/auth/authThunk';
import { useNavigate } from 'react-router-dom';

interface IFormTypes {
  name: string;
  phoneNumber: string;
}

export const Welcome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { role } = useAppSelector(state => state.auth);
  const { isLoading } = useAppSelector(state => state.application);
  const [isOpenSecondModal, setIsOpenSecondModal] = useState(false);
  const [isOpenThreeModal, setIsOpenThreeModal] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    reset,
  } = useForm<IFormTypes>({ mode: 'onSubmit' });

  useEffect(() => {
    setValue('phoneNumber', '+996');
  }, [setValue]);

  const handleOpen = () => {
    if (role === 'GUEST') {
      setIsOpenThreeModal(true);
    } else {
      setIsOpen(true);
    }
  };

  const navigateSignUp = () => navigate('sign-up');
  const navigateSignIn = () => navigate('sign-in');

  const handleCloseSecondModal = () => setIsOpenSecondModal(false);

  const handleOpenSecondModal = () => {
    setIsOpenSecondModal(true);
    handleClose();
  };

  const handleClose = () => setIsOpen(false);

  const submitHandler: SubmitHandler<IFormTypes> = data => {
    const value = data;
    if (isValid) {
      dispatch(
        postApplication({
          value,
          handleOpenSecondModal,
          handleCloseSecondModal,
        })
      );
    }
    reset();
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

  const openThreeModal = () => setIsOpenThreeModal(prev => !prev);
  return (
    <StyledContainer>
      <StyledContentText>
        {isLoading && <LoadingComponent />}
        <Box>
          <StyledH1>Добро пожаловать в клинику HealthCheck</StyledH1>
        </Box>

        <Box>
          <StyledText>
            Медицинская клиника «HealthCheck» — это клиника, в которой
            применяются новейшие диагностические и лечебные технологии и ведут
            прием лучшие специалисты.
          </StyledText>
        </Box>

        <Box>
          <ButtonClass variant="outlined" onClick={handleOpen}>
            Оставьте заявку
          </ButtonClass>
        </Box>
      </StyledContentText>

      <Box>
        <img src={Image} alt="HealthCheck" />
      </Box>

      <MuiModal open={isOpen} onClose={handleClose}>
        <ModalContent>
          <Box>
            <StyledH2>Оставьте заявку</StyledH2>
          </Box>

          <StyledP>
            <StyledSpan>
              Оставьте свой номер и наши специалисты свяжутся
            </StyledSpan>

            <StyledSpan>с Вами в ближайшее время</StyledSpan>
          </StyledP>

          <StyledFormContainer
            component="form"
            onSubmit={handleSubmit(submitHandler)}>
            <StyledInputContent>
              <Box>
                <Input
                  border=""
                  size="small"
                  {...register('name', {
                    required: 'Введите имя',
                    minLength: {
                      value: 2,
                      message: 'Имя должно минимум 2 символа',
                    },
                  })}
                  helperText={errors.name?.message}
                  error={!!errors.name}
                  Icon={<MaleFemale />}
                  placeholder="Введите имя"
                  label="Как к Вам обратиться?"
                />
              </Box>

              <Box>
                <Input
                  border=""
                  size="small"
                  {...register('phoneNumber', {
                    required: 'Введите номер телефона',
                    pattern: {
                      value: /^\+996\d{9}$/,
                      message: 'Введите номер в формате +996...',
                    },
                    maxLength: {
                      value: 15,
                      message: 'Введите действительный номер',
                    },
                    minLength: {
                      value: 11,
                      message: 'Минимум 11 символов',
                    },
                  })}
                  Icon={<CallProgres />}
                  label="Номер мобильного телефона"
                  placeholder="+996(___) __-__-__"
                  type="text"
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber?.message}
                />
              </Box>
            </StyledInputContent>

            <StyledButton type="submit">
              ОТПРАВИТЬ ЗАЯВКУ
              <StyledImg src={Arrow} alt="" />
            </StyledButton>

            <StyledModalIcon onClick={handleClose}>
              <Close />
            </StyledModalIcon>
          </StyledFormContainer>
        </ModalContent>
      </MuiModal>

      <MuiModal open={isOpenSecondModal} onClose={handleCloseSecondModal}>
        <StyledSecondModal>
          <Typography variant="h2">Заявка успешно отправлена!</Typography>

          <StyledParagraf>
            <StyledSpan>
              В ближайшее время с вами свяжется администратор
            </StyledSpan>

            <StyledSpan>для согласования деталей.</StyledSpan>
          </StyledParagraf>

          <StyledModalIcon onClick={handleCloseSecondModal}>
            <Close />
          </StyledModalIcon>
        </StyledSecondModal>
      </MuiModal>

      <MuiModal open={isOpenThreeModal} onClose={openThreeModal}>
        <StyledSecondModal>
          <TypographyStyled variant="h6">
            Для того чтобы оставить заявку, пожалуйста, зарегистрируйтесь или
            войдите в систему.
          </TypographyStyled>
          <BoxStyledButton>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                width: '100%',
              }}>
              <Button onClick={navigateSignUp} variant="contained">
                Зарегистрироваться
              </Button>
              <Button
                onClick={navigateSignIn}
                variant="contained"
                className="buttonSign">
                Войти
              </Button>
            </div>
            <BoxGoogle onClick={googleAuthFn}>
              <Gogle />
              Зарегистрироваться с Google
            </BoxGoogle>
          </BoxStyledButton>
          <StyledModalIcon onClick={openThreeModal}>
            <Close />
          </StyledModalIcon>
        </StyledSecondModal>
      </MuiModal>
    </StyledContainer>
  );
};

const StyledContainer = styled('div')(() => ({
  width: '100%',
  maxWidth: '1400px',
  minWidth: '1200px',
  margin: '50px auto',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '5px 5rem 0 5rem',
}));

const TypographyStyled = styled(Typography)(() => ({
  textAlign: 'center',
  fontFamily: 'monospace',
  fontWeight: '100',
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
  background: 'white',
  padding: '13px 10px',
  borderRadius: '8px',
  color: 'black',
  height: '44px',

  '& > img': {
    width: '20px',
    height: '20px',
  },
}));

const StyledContentText = styled('div')(() => ({
  width: '45%',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '100px',
}));

const BoxStyledButton = styled(Box)(() => ({
  display: 'flex',
  width: '550px',
  height: '120px',
  justifyContent: 'center',
  gap: '5px',
  margin: '20px 0 0 0',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginTop: '50px',
  '& .buttonSign': {
    width: '250px',
    height: '45px',
  },
}));

const StyledSecondModal = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '659px',
  zIndex:"19999999999999",
  height: '468px',
  backgroundColor: '#ebf2fc',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '20px',
  padding: '16px',
  fontFamily: '"Poppins",sans-serif',
  h2: {
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 500,
    width: '380px',
    height: '50px',
    fontSize: '27px',
    marginBottom: '50px',
  },

  p: {
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 400,
    fontSize: '18px',
    marginBottom: '10px',
  },
}));

const StyledH1 = styled('h1')(() => ({
  fontFamily: "'Manrope', sans-serif",
  fontSize: '3rem',
  fontWeight: '900',
  lineHeight: '140%',
  backgroundClip: 'text',
  color: 'transparent',
  width: '36.563rem',
  marginBottom: '1.625rem',
  backgroundImage: 'linear-gradient(90deg, #330867 0%, #30CFD0)',
  backgroundSize: '300% 300%',
  animation: 'moveGradient 3.2s infinite',

  '@keyframes moveGradient': {
    '0%': {
      backgroundPosition: '0% 50%',
    },

    '50%': {
      backgroundPosition: '100% 50%',
    },

    '100%': {
      backgroundPosition: '0% 50%',
    },
  },
}));

const StyledText = styled('p')(() => ({
  width: '90%',
  color: '#333',
  marginBottom: '40px',
  marginTop: '5px',
  fontSize: '19px',
  lineHeight: '1.5',
  fontFamily: "'Manrope', sans-serif",
}));

const StyledModalIcon = styled('div')(() => ({
  width: '36px',
  height: '36px',
  position: 'absolute',
  top: '10px',
  right: '10px',
  cursor: 'pointer',
}));

const StyledH2 = styled('h2')(() => ({
  marginTop: '40px',
  fontFamily: "'Manrope', sans-serif",
  fontWeight: 500,
}));

const StyledImg = styled('img')(() => ({
  marginLeft: '30px',
}));

const StyledButton = styled(Button)(() => ({
  '&.MuiButtonBase-root': {
    height: '43px',
    borderRadius: '24px',
    padding: '10px',
    fontSize: '14px',
    marginLeft: '9rem',
    marginTop: '1rem',
    width: '230px',
    display: 'flex',
    paddingLeft: '14px',
    textAlign: 'center',
    justifyContent: 'center',
  },
}));

const ButtonClass = styled(Button)(() => ({
  '&.MuiButtonBase-root': {
    width: '205px',
    height: '43px',
    borderRadius: '24px',
    border: '1px solid #048741',
    padding: '10px',
    fontSize: '14px',
    color: '#048741',
    transition: '0.7s',

    '&:hover': {
      backgroundColor: '#0CBB6B',
      color: '#FFFFFF',
      padding: '10px',
    },
  },
}));

const StyledP = styled('div')(() => ({
  width: '25rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20px',
  marginBottom: '2rem',
}));

const StyledSpan = styled('span')(() => ({
  display: 'block',
  textAlign: 'center',
  marginBottom: '5px',
  fontSize: '16px',
  fontFamily: "'Manrope', sans-serif",
}));

const ModalContent = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '659px',
  height: '468px',
  backgroundColor: '#ebf2fc',
  display: 'flex',
  justifyContent: 'start',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '20px',
  padding: '16px',
}));

const StyledFormContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '30px',
  flexDirection: 'column',
}));

const StyledInputContent = styled(Box)(() => ({
  display: 'flex',
  gap: '10px',
  width: '100%',
}));

const StyledParagraf = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '-30px',
  marginBottom: '2rem',
}));
