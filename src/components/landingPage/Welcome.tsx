import { styled, Modal as MuiModal, Box } from '@mui/material';
import { useState } from 'react';
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

const Welcome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSecondModal, setIsOpenSecondModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormTypes>({ mode: 'onChange' });

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
        <div>
          <StyledH1>Добро пожаловать в клинику HealthCheck</StyledH1>
        </div>

        <div>
          <StyledText>
            Медицинская клиника «HealthCheck— это клиника, в которой применяются
            новейшие диагностические и лечебные технологии и ведут прием лучшие
            специалисты.
          </StyledText>
        </div>

        <div>
          <ButtonClass variant="outlined" onClick={handleOpen}>
            Оставьте заявку
          </ButtonClass>
        </div>
      </StyledContentText>

      <div>
        <img src={Image} alt="HealthCheck" />
      </div>

      <MuiModal open={isOpen} onClose={handleClose}>
        <ModalContent>
          <div>
            <StyledH2>Оставьте заявку</StyledH2>
          </div>

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
              <div>
                <Input
                  size='small'
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
              </div>

              <div>
                <Input
                  size='small'
                  {...register('phone', {
                    required: 'Введите номер телефона',
                    pattern: {
                      value: /^\+996/,
                      message: 'Введите номер в формате +996(___) __-__-__',
                    },
                    maxLength: {
                      value: 15,
                      message: 'Номер телефон должен максимум 15 символов',
                    },
                    minLength: {
                      value: 11,
                      message: 'Номер телефон минимум 11 символов',
                    },
                  })}
                  icon={CallProgres}
                  label="Номер мобильного телефона"
                  placeholder="+996(___) __-__-__"
                  type="text"
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                />
              </div>
            </StyledInputContent>

            <StyledButton type="submit">
              ОТПРАВИТЬ ЗАЯВКУ
              <StyledImg src={Arrow} alt="" />
            </StyledButton>

            <StyledModalImg onClick={handleClose} src={Close} alt="" />
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

          <StyledModalImg onClick={handleCloseSecondModal} src={Close} alt="" />
        </StyledSecondModal>
      </MuiModal>
    </StyledContainer>
  );
};

export default Welcome;

const StyledContainer = styled('div')`
  width: 100%;
  max-width: 1420px;
  min-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const StyledContentText = styled('div')`
  width: 45%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

const StyledH1 = styled('h1')`
  font-size: 3.7rem;
  line-height: 1.1;
  font-weight: bold;
  margin-bottom: 30px;
  background: linear-gradient(90deg, #30c5cb, #33327e);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  font-family: 'Manrope', sans-serif;
  background-size: 200% 200%;
  animation: gradientAnimation 3s linear infinite;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;


const StyledText = styled('p')`
  width: 90%;
  color: #333;
  margin-bottom: 40px;
  margin-top: 5px;
  font-size: 19px;
  line-height: 1.5;
  font-family: 'Manrope', sans-serif;
`;

const StyledModalImg = styled('img')`
  width: 36px;
  height: 36px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const StyledH2 = styled('h1')`
  margin-top: 40px;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
`;

const StyledImg = styled('img')`
  margin-left: 30px;
`;

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

const StyledP = styled('div')`
  width: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 2rem;
`;

const StyledSpan = styled('span')`
  display: block;
  text-align: center;
  margin-bottom: 5px;
  font-size: 16px;
  font-family: 'Manrope', sans-serif;
`;

const ModalContent = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 659px;
  height: 468px;
  background-color: #ebf2fc;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  padding: 16px;
`;

const StyledFormContainer = styled(Box)`
  display: flex;
  gap: 30px;
  flex-direction: column;
`;

const StyledInputContent = styled(Box)`
  display: flex;
  gap: 10px;
`;

const StyledSecondModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 659px;
  height: 468px;
  background-color: #ebf2fc;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  padding: 16px;

  h2 {
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    width: 380px;
    height: 50px;
    font-size: 27px;
    margin-bottom: 50px;
  }

  p {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const StyledParagraf = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
  margin-bottom: 2rem;
`;
