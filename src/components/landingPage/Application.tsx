import { Box, styled, Typography } from '@mui/material';
import Input from '../UI/Input';
import Button from '../UI/Button';
import MaleFemaleIcon from '../../assets/icons/MaleFemaleIcon.svg';
import CallProgressIcon from '../../assets/icons/CallProgressIcon.svg';
import { SubmitHandler, useForm } from 'react-hook-form';
import GirlDoctor from '../../assets/images/GirlDoctor.png';
import Modal from '../UI/Modal';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../configs/firebase';
import { googleAuthFirbase } from '../../store/slices/auth/authThunk';
import { useAppDispatch, useAppSelector } from '../../hooks/customHooks';
import { useState } from 'react';
import Close from '../../assets/icons/CloseIcon.svg';
import Gogle from '../../assets/icons/gogle.svg';
import { postApplication } from '../../store/slices/adminApplication/adminApplicationThunk';

interface IAplicationProps {
  name?: string;
  phoneNumber?: number;
}

const Application = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isOpenThreeModal, setIsOpenThreeModal] = useState(false);
  const { role } = useAppSelector(state => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IAplicationProps>({ mode: 'onSubmit' });

  const navigateSignUp = () => navigate('sign-up');
  const navigateSignIn = () => navigate('sign-in');

  const onSubmit: SubmitHandler<IAplicationProps> = data => {
    if (data.phoneNumber && data.name) {
      const value = {
        phoneNumber: data.phoneNumber.toString(),
        name: data.name,
      };

      dispatch(postApplication({ value }));
      reset();
    } else {
      console.error('Phone number and name are required.');
    }
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

  const handleOpen = () => {
    if (role === 'GUEST') {
      setIsOpenThreeModal(true);
    }
  };
  const openThreeModal = () => setIsOpenThreeModal(prev => !prev);

  return (
    <Container>
      <Box className="boxs">
        <AplicationBox>
          <Typography className="h1text">Оставьте заявку</Typography>

          <Typography className="h3text">
            Оставьте свой номер и наши специалисты свяжутся с Вами
            <br />в ближайшее время
          </Typography>

          <BoxForm component={'form'} onSubmit={handleSubmit(onSubmit)}>
            <Box className="inputBox">
              <Box className="inBox">
                <Input
                  border=""
                  {...register('name', {
                    required: 'Обязательное поле',
                  })}
                  fullWidth
                  size="small"
                  Icon={<MaleFemaleIcon />}
                  label="Как к Вам обратиться?"
                  placeholder="Введите имя"
                  error={!!errors.name}
                  helperText={errors.name?.message ? errors.name.message : ''}
                />
              </Box>

              <Box className="inBox">
                <Input
                  border=""
                  {...register('phoneNumber', {
                    required: 'Ведите ваш действительный номер',
                    pattern: {
                      value: /^\+996\d{9}$/,
                      message: 'Введите корректный номер телефона',
                    },
                  })}
                  fullWidth
                  size="small"
                  Icon={<CallProgressIcon />}
                  label="Номер мобильного телефона"
                  placeholder="+996 (___) __-__-__"
                  error={!!errors.phoneNumber}
                  helperText={
                    errors.phoneNumber?.message
                      ? errors.phoneNumber.message
                      : ''
                  }
                />
              </Box>
            </Box>

            <Box className="buttonBox">
              <Button
                onClick={handleOpen}
                className="myButton"
                size="large"
                type="submit"
                variant="contained">
                ОТПРАВИТЬ ЗАЯВКУ
              </Button>
            </Box>
          </BoxForm>
        </AplicationBox>

        <BoxMui>
          <img className="imgGirl" src={GirlDoctor} alt="GirlDoctor" />
        </BoxMui>

        <Modal open={isOpenThreeModal}>
          <StyledSecondModal>
            <TypographyStyled variant="h6">
              Для того чтобы оставить заявку, пожалуйста, зарегистрируйтесь или
              войдите в систему.
            </TypographyStyled>
            <BoxStyledButton>
              <Button onClick={navigateSignUp} variant="contained">
                Зарегистрироваться
              </Button>
              <Button
                onClick={navigateSignIn}
                variant="contained"
                className="buttonSign">
                Войти
              </Button>
              <BoxGoogle onClick={googleAuthFn}>
                <Gogle />
                Зарегистрироваться с Google
              </BoxGoogle>
            </BoxStyledButton>
            <StyledModalIcon onClick={openThreeModal}>
              <Close />
            </StyledModalIcon>
          </StyledSecondModal>
        </Modal>
      </Box>
    </Container>
  );
};

export default Application;

const Container = styled(Box)(() => ({
  width: '100%',
  minHeight: '500px',
  marginTop: '120px',
  marginBottom: '120px',
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'center',
  fontFamily: 'Manrope, sans-serif',

  '.boxs': {
    width: '100%',
    maxWidth: '1440px',
    minWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'center',
  },
}));

const TypographyStyled = styled(Typography)(() => ({
  textAlign: 'center',
  fontFamily: 'monospace',
  fontWeight: '100',
}));

const BoxStyledButton = styled(Box)(() => ({
  display: 'flex',
  width: '500px',
  height: '100px',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '5px',
  margin: '20px 0 0 0',
  '& .buttonSign': {
    width: '250px',
    height: '45px',
  },
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
  background: 'linear-gradient(181deg, #08DF7D 0.95%, #048F50 82.76%)',
  padding: '13px 10px',
  borderRadius: '8px',
  color: 'white',
  height: '44px',

  '& > img': {
    width: '20px',
    height: '20px',
  },
}));

const StyledModalIcon = styled('div')(() => ({
  width: '36px',
  height: '36px',
  position: 'absolute',
  top: '10px',
  right: '10px',
  cursor: 'pointer',
}));

const StyledSecondModal = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '659px',
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

const AplicationBox = styled(Box)(() => ({
  width: '39em',
  height: '28.75em',
  backgroundColor: '#DBEBFF',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '20px',

  '.h1text': {
    textAlign: 'center',
    fontSize: '33px',
    fontWeight: '400',
  },

  '.h3text': {
    textAlign: 'center',
    fontSize: '17px',
    fontWeight: '200',
  },
}));

const BoxMui = styled(Box)(() => ({
  width: '36.5rem',
  height: '33.1rem',
  position: 'relative',

  '.imgGirl': {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: '-10px',
  },
}));

const BoxForm = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px',

  '.inputBox': {
    margin: '10px',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    width: '90%',

    '.inBox': {
      width: '70%',
    },

    '.inputsCor': {
      backgroundColor: '#fff',
    },
  },

  '.buttonBox': {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',

    '.myButton': {
      width:"350px",
      borderRadius: '50px',
      backgroundColor: theme.palette.primary.linearGradient,
      color: 'white',

      '&:after': {
        content: 'url(src/assets/icons/arrow.svg)',
        marginTop: '8px',
        marginLeft: '20px',
        marginRight: '-20px',
      },
    },
  },
}));
