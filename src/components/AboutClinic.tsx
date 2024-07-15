import Restangle from '../assets/images/Rectangle.png';
import Restangle1 from '../assets/images/Rectangle1.png';
import Restangle3 from '../assets/images/Rectangle3.png';
import Restangle2 from '../assets/images/Rectangle2.png';
import Podrovnee from '../assets/icons/Podrovnee.svg';
import { styled, Typography, Box } from '@mui/material';

const AboutClinic = () => (
  <StyledContainer>
    <StyledImageContainerText>
      <StyledTextHealt>
        О нашей клинике <StyledSapn>“HealthCheck”</StyledSapn>
      </StyledTextHealt>
      <StyledText>
        <p>
          Вся наша команда готова обеспечить вам медицинский уход и заботу на
          самом высоком уровне. Наша главная задача — оказать Вам теплый прием и
          обеспечить самый лучший медицинский уход. У нас Вы в хороших руках! В
          нашей клинике используются только качественные материалы и проверенные
          технологии. Для каждого клиента специалисты нашей клиники разработают
          <br />
          индивидуальный план лечения, подробно рассказывая о каждом <br />{' '}
          этапе.
        </p>
        <p>
          Доброжелательность и уважительное отношение к пациентам, не только
          материальная, но и моральная ответственность за результаты лечения —
          все это взято за основу политики Medical Clinic. Профессионализм и
          высокое качество оказываемых услуг помогают нам привлечь пациентов
          которые рекомендуют нас своим родным и близким.
        </p>
        <p>
          Уже 20 лет мы работаем на уровне лучших мировых стандартов, внедряя и
          развивая передовые методы лечения для сохранения здоровья наших
          пациентов.
        </p>
      </StyledText>
      <StyledTextIcon>
        Читать подробнее о клинике <img src={Podrovnee} alt="" />
      </StyledTextIcon>
    </StyledImageContainerText>

    <StyledBox>
      <StyledImageContainer>
        <img src={Restangle} alt="Restangle" />
      </StyledImageContainer>
      <StyledContainerImage>
        <StyledImg src={Restangle1} alt="Restangle" />
        <StyledImg src={Restangle3} alt="Restangle" />
        <StyledImg src={Restangle2} alt="Restangle" />
      </StyledContainerImage>
    </StyledBox>
  </StyledContainer>
);

export default AboutClinic;

const StyledImageContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const StyledImageContainerText = styled(Box)`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
const StyledSapn = styled("span")`
color: green;
`

const StyledContainerImage = styled(Box)`
  display: flex;
  margin-top: 16px;
  gap: 30px;
`;
const StyledImg = styled('img')`
  width: 200px;
`;

const StyledContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-width: 1200px;
  max-width: 1440px;
  margin: 20px auto;
`;

const StyledText = styled(Typography)`
  width: 629px;
  height: 504px;
  font-family: 'Manrope', sans-serif;
  margin-top: 50px;
  font-size: 16.9px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
`;

const StyledTextHealt = styled(Typography)`
  font-size: 36px;
`;

const StyledTextIcon = styled(Typography)`
  font-size: 18;
  margin-top: 48px;
  font-family: 'Manrope', sans-serif;
  color: #10aa10;
  cursor: pointer;
`;
