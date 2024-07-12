import Restangle from '../assets/images/Rectangle.png';
import Restangle1 from '../assets/images/Rectangle1.png';
import Restangle3 from '../assets/images/Rectangle3.png';
import Restangle2 from '../assets/images/Rectangle2.png';
import { Box } from '@mui/system';
import { styled, Typography } from '@mui/material';
const AboutClinic = () => {
  return (
    <StyledContainer>
      <StyledImageContainerText>
        <StyledTextHealt>
          О нашей клинике{' '}
          <span style={{ color: '#048741' }}>“HealthCheck”</span>
        </StyledTextHealt>
        <StyledText>
          Вся наша команда готова обеспечить вам медицинский уход и заботу на
          самом высоком уровне. Наша главная задача — оказать Вам теплый прием и
          обеспечить самый лучший медицинский уход. У нас Вы в хороших руках! В
          нашей клинике используются только качественные материалы и проверенные
          технологии. Для каждого клиента специалисты нашей клиники разработают
          индивидуальный план лечения, подробно рассказывая о каждом этапе.
        </StyledText>
        <StyledTexts>
          Доброжелательность и уважительное отношение к пациентам, не только
          материальная, но и моральная ответственность за результаты лечения —
          все это взято за основу политики Medical Clinic. Профессионализм и
          высокое качество оказываемых услуг помогают нам привлечь пациентов
          которые рекомендуют нас своим родным и близким. Уже 20 лет мы работаем
          на уровне лучших мировых стандартов, внедряя и развивая передовые
          методы лечения для сохранения здоровья наших пациентов.
        </StyledTexts>
        <StyledTextsss>Читать подробнее о клинике</StyledTextsss>
      </StyledImageContainerText>
      <StyledBox>
        <StyledImageContainer>
          <img src={Restangle} alt="Restangle" />
        </StyledImageContainer>
        <StyledContainerImage>
          <img src={Restangle1} alt="Restangle" />
          <img src={Restangle3} alt="Restangle" />
          <img src={Restangle2} alt="Restangle" />
        </StyledContainerImage>
      </StyledBox>
    </StyledContainer>
  );
};

export default AboutClinic;

const StyledImageContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  /* width: 600px; */
`;

const StyledImageContainerText = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 580px;
`;

const StyledContainerImage = styled(Box)`
  display: flex;
  margin-top: 26px;
  gap: 30px;
`;

const StyledContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 1444px;
  margin: 0 auto;
`;

const StyledText = styled(Typography)`
  margin-top: -60px;
`;

const StyledTexts = styled(Typography)`
  margin-top: -100px;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
`;

const StyledTextHealt = styled(Typography)`
  font-size: 36px;
`;

const StyledTextsss = styled(Typography)`
  color: #048741;
  font-size: 16px;
  margin-top: -120px;
`;
