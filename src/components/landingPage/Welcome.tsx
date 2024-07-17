import { useState } from 'react';
import { styled, Modal as MuiModal, Box } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../UI/Input';
import Image from '../../assets/images/DoctorMakc.png';
import MaleFemale from '../../assets/icons/MaleFemaleIcon.svg';
import CallProgres from '../../assets/icons/CallProgressIcon.svg';
import Arrow from '../../assets/icons/ArrowIcon.svg';
import Close from '../../assets/icons/CloseIcon.svg';
import Button from '../UI/Button';

interface IFormTypes {
  name: string;
  phone: string;
}

export const Welcome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSecondModal, setIsOpenSecondModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormTypes>({ mode: 'onSubmit' });

  const handleOpen = () => setIsOpen(true);

  const handleCloseSecondModal = () => {
    setIsOpenSecondModal(false);
  };

  const handleOpenSecondModal = () => {
    setIsOpenSecondModal(true);
    handleClose();
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const submitHandler: SubmitHandler<IFormTypes> = data => {
    if (isValid) {
      console.log(data);
      handleOpenSecondModal();
    }
  };

  return (
    <StyledContainer>
      <StyledContentText>
        <Box>
          <StyledH1>Добро пожаловать в клинику HealthCheck</StyledH1>
        </Box>

        <Box>
          <StyledText>
            Медицинская клиника «HealthCheck— это клиника, в которой применяются
            новейшие диагностические и лечебные технологии и ведут прием лучшие
            специалисты.
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
                  icon={MaleFemale}
                  placeholder="Введите имя"
                  label="Как к Вам обратиться?"
                />
              </Box>

              <Box>
                <Input
                  size="small"
                  {...register('phone', {
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
                      message: ' Минимум 11 символов',
                    },
                  })}
                  icon={CallProgres}
                  label="Номер мобильного телефона"
                  placeholder="+996(___) __-__-__"
                  type="text"
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                />
              </Box>
            </StyledInputContent>

            <StyledButton type="submit">
              ОТПРАВИТЬ ЗАЯВКУ
              <StyledImg src={Arrow} alt="" />
            </StyledButton>

            <StyledModalIcon onClick={handleClose} src={Close} alt="" />
          </StyledFormContainer>
        </ModalContent>
      </MuiModal>

      <MuiModal open={isOpenSecondModal} onClose={handleCloseSecondModal}>
        <StyledSecondModal>
          <h2> Заявка успешно отправлена!</h2>

          <StyledParagraf>
            <StyledSpan>
              В ближайшее время с вами свяжется администратор
            </StyledSpan>

            <StyledSpan>для согласования деталей.</StyledSpan>
          </StyledParagraf>

          <StyledModalIcon
            onClick={handleCloseSecondModal}
            src={Close}
            alt=""
          />
        </StyledSecondModal>
      </MuiModal>
    </StyledContainer>
  );
};

const StyledContainer = styled('div')(() => ({
  width: '100%',
  maxWidth: '1420px',
  minWidth: '1200px',
  margin: '20px auto',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '5px 5rem 0 5rem',
}));

const StyledContentText = styled('div')(() => ({
  width: '45%',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '100px',
}));

const StyledH1 = styled('h1')(() => ({
  fontSize: '3.7rem',
  lineHeight: '1.1',
  fontWeight: 'bold',
  marginBottom: '30px',
  background: 'linear-gradient(90deg, #30c5cb, #33327e)',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontFamily: "'Manrope', sans-serif",
  backgroundSize: '200% 200%',
  animation: 'gradientAnimation 3s linear infinite',

  '@keyframes gradientAnimation': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
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

const StyledModalIcon = styled('img')(() => ({
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

const StyledParagraf = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '-30px',
  marginBottom: '2rem',
}));
