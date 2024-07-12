import { styled, Modal as MuiModal, Box } from '@mui/material';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from './UI/CustomUI/Input';
import Image from '../assets/images/DoctorMakc.png';
import MaleFemale from '../assets/icons/MaleFemaleIcon.svg';
import CallProgres from '../assets/icons/CallProgressIcon.svg';
import Arrow from '../assets/icons/ArrowIcon.svg';
import Close from '../assets/icons/CloseIcon.svg';

interface IFormTypes {
  name: string;
  phone: number;
}

const Welcome = () => {
  const { register, handleSubmit } = useForm<IFormTypes>();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSecondModal, setIsOpenSecondModal] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

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
    console.log(data);
  };

  return (
    <StyledContainer>
      <StyledContentText>
        <div>
          <StyledH1>Добро пожаловать в клинику HealthCheck</StyledH1>
        </div>

        <div>
          <StyledText>
            Международная Медицинская клиника «HealthCheck— это клиника, в
            которой применяются новейшие диагностические и лечебные технологии и
            ведут прием лучшие специалисты.
          </StyledText>
        </div>

        <div>
          <StyledButtonMain onClick={handleOpen}>
            Оставьте заявку
          </StyledButtonMain>
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
            <p>Оставьте свой номер и наши специалисты свяжутся</p>
            <p>с Вами в ближайшее время</p>
          </StyledP>

          <StyledFormContainer
            component="form"
            onSubmit={handleSubmit(submitHandler)}>
            <StyledInputContent>
              <Input
                {...register('name', {
                  required: 'Name required',
                })}
                icon={MaleFemale}
                placeholder="Введите имя"
                label="Как к Вам обратиться?"
              />

              <Input
                {...register('phone', {
                  required: 'Phone number required',
                })}
                icon={CallProgres}
                label="Номер мобильного телефона"
                placeholder="+996(___) __-__-__"
                type="text"
              />
            </StyledInputContent>

            <StyledButton onClick={handleOpenSecondModal} type="submit">
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
            <p>В ближайшее время с вами свяжется администратор</p>
            <p>для согласования деталей.</p>
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
  font-size: 3.700rem;
  line-height: 1.1;
  font-weight: bold;
  margin-bottom: 30px;
  background: linear-gradient(90deg, #30c5cb, #33327e);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  font-family: 'Manrope', sans-serif;
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



const StyledButton = styled('button')`
  width: 220px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin-left: 9rem;
  background: #04884c;
  color: white;
  font-weight: 500;
  border-radius: 2rem;
  padding: 8px, 12px, 8px, 24px;
  font-family: 'Manrope', sans-serif;
`;

const StyledButtonMain = styled('button')`
  border-radius: 30px;
  padding: 10px 26px;
  border: 1px solid #048741;
  color: #048741;
  transition: all 0.3s;
  height: 42px;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
`;

const StyledP = styled('p')`
  width: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 2rem;
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

const StyledParagraf = styled('p')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
  margin-bottom: 2rem;
`;
