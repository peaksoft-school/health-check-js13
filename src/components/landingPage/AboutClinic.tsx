import Clinic from '../../assets/images/Clinic.png';
import Restangle1 from '../../assets/images/Rectangle1.png';
import Restangle3 from '../../assets/images/Rectangle3.png';
import Restangle2 from '../../assets/images/Rectangle2.png';
import Podrovnee from '../../assets/icons/Podrovnee.svg';
import { styled, Typography, Box } from '@mui/material';

const AboutClinic = () => (
  <StyledContainer>
    <StyledImageContainerText>
      <StyledTextHealt>
        О нашей клинике <span>“HealthCheck”</span>
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
        <img src={Clinic} alt="Restangle" />
      </StyledImageContainer>
      <StyledContainerImage>
        <img src={Restangle1} alt="Restangle" />
        <img src={Restangle3} alt="Restangle" />
        <img src={Restangle2} alt="Restangle" />
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

const StyledContainerImage = styled(Box)`
  display: flex;
  margin-top: 1rem;
  gap: 1.5rem;
  img {
    width: 70%;
  }
`;

const StyledContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 90rem;
  min-width: 76.25rem;
  margin: 1.25rem auto;
  padding: 2%;
`;

const StyledText = styled(Typography)`
  width: 80%;
  height: 80%;
  font-family: 'Manrope', sans-serif;
  margin-top: 2.4rem;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 5.8rem;
`;

const StyledTextHealt = styled(Typography)`
  font-size: 2.25rem;
  span {
    color: green;
  }
`;

const StyledTextIcon = styled(Typography)`
  font-size: 1.125rem;
  margin-top: 3rem;
  font-family: 'Manrope', sans-serif;
  color: #10aa10;
  cursor: pointer;
`;