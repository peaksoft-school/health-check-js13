import { styled, Modal as MuiModal, Box } from '@mui/material';
import image from '../assets/images/Mask group (2).png';
import Button from './UI/CustomUI/Button';
import { useState } from 'react';
import Input from './UI/CustomUI/Input';
import MaleFemale from '../assets/icons/MaleFemaleIcon.svg';
import CallProgres from '../assets/icons/CallProgressIcon.svg';
import { SubmitHandler, useForm } from 'react-hook-form';
import Arrow from "../assets/icons/ArrowIcon.svg";

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
          <Button onClick={handleOpen} variant="outlined">
            Оставьте заявку
          </Button>
        </div>
      </StyledContentText>

      <div>
        <img src={image} alt="HealthCheck" />
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
                label="Как к Вам обратиться?"
              />

              <Input
                {...register('phone', {
                  required: 'Phone number required',
                })}
                icon={CallProgres}
                label="Номер мобильного телефона"
                placeholder="+(996)"
                type="text"
              />
            </StyledInputContent>

            <StyledButton  onClick={handleOpenSecondModal} type="submit">
              ОТПРАВИТЬ ЗАЯВКУ
              <StyledImg src={Arrow} alt="" />
            </StyledButton>
          </StyledFormContainer>
        </ModalContent>
      </MuiModal>

      <MuiModal open={isOpenSecondModal} onClose={handleCloseSecondModal}>
        <StyledSecondModal>
          <h2> Заявка успешно отправлена!</h2>
          <p>
            В ближайшее время с вами свяжется администратор для согласования
            деталей.
          </p>
        </StyledSecondModal>
      </MuiModal>
    </StyledContainer>
  );
};

export default Welcome;

const StyledContainer = styled('div')`
  width: 100%;
  max-width: 1500px;
  min-width: 1200px;
  display: flex;
  justify-content: space-between;
`;

const StyledContentText = styled('div')`
  width: 40%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const StyledH1 = styled('h1')`
  font-size: 50px;
  line-height: 1.1;
  font-weight: bold;
  margin-bottom: 30px;
  background: linear-gradient(90deg, #30c5cb, #33327e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledH2 = styled('h1')`
  margin-top: 40px;
`;
const StyledImg = styled("img")`
margin-left: 30px;
`

const StyledText = styled('p')`
  font-size: 18px;
  line-height: 1.5;
  color: #333;
  margin-bottom: 20px;
  width: 85%;
`;

const StyledButton = styled("button")`
  width: 220px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border:none;
  margin-left: 9rem;
  background: #04884c;
  color: white;
  font-weight: 400;
  border-radius: 2rem;
  padding:8px, 12px, 8px, 24px;
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
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  padding: 16px;
`;
