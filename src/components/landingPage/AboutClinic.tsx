import Clinic from '../../assets/images/Clinic.png';
import DoctorsLesson from '../../assets/images/DoctorsLesson.png';
import GeneralPhotoDoctors from '../../assets/images/GeneralPhotoDoctors.png';
import MeetingTeam from '../../assets/images/MeetingTeam.png';
import Podrovnee from '../../assets/icons/Podrovnee.svg';
import { styled, Typography, Box } from '@mui/material';

const AboutClinic = () => (
  <StyledContainer>
    <StyledImageContainerText>
      <StyledTextHealt fontFamily={'Manrope,sans-serif'}>
        О нашей клинике <span>“HealthCheck”</span>
      </StyledTextHealt>
      <StyledText>
        <Typography fontFamily={'Manrope,sans-serif'}>
          Вся наша команда готова обеспечить вам медицинский уход и заботу на
          самом вы соком уровне. Наша главная задача — оказать Вам теплый прием
          и обеспечить самый лучший медицинский уход. У нас Вы в хороших руках!
          В нашей клинике используются только качественные материалы и
          проверенные технологии. Для каждого клиента специалисты нашей клиники
          разработают
          <br />
          индивидуальный план лечения, подробно рассказывая о каждом <br />
          этапе.
        </Typography>
        <Typography fontFamily={'Manrope,sans-serif'}>
          Доброжелательность и уважительное отношение к пациентам, не только
          материальная, но и моральная ответственность за результаты лечения —
          все это взято за основу политики Medical Clinic. Профессионализм и
          высокое качество оказываемых услуг помогают нам привлечь пациентов
          которые рекомендуют нас своим родным и близким.
        </Typography>
        <Typography fontFamily={'Manrope,sans-serif'}>
          Уже 20 лет мы работаем на уровне лучших мировых стандартов, внедряя и
          развивая передовые методы лечения для сохранения здоровья наших
          пациентов.
        </Typography>
      </StyledText>
      {/* <StyledTextIcon fontFamily={'Manrope,sans-serif'}>
        Читать подробнее о клинике <img src={Podrovnee} alt="" />
      </StyledTextIcon> */}
    </StyledImageContainerText>

    <StyledBox>
      <StyledImageContainer>
        <img src={Clinic} alt="Restangle" />
      </StyledImageContainer>
      <StyledContainerImage>
        <img src={DoctorsLesson} alt="Restangle" />
        <img src={GeneralPhotoDoctors} alt="Restangle" />
        <img src={MeetingTeam} alt="Restangle" />
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
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  min-width: 1200px;
  margin: 1.25rem auto;
`;

const StyledText = styled(Typography)`
  width: 100%;
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
  margin-left: 5.8rem;
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
