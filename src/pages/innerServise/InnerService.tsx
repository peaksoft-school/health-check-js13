import { Box, styled, Typography } from '@mui/material';
import Header from '../../layout/user/Header';
import {
  Dermatology,
  DermatologyLi,
  DermatologyText,
  DermatologyTextLi,
} from '../../utils/constants/Dermatology';
import doctors from '../../utils/constants/doctors.json';
import Button from '../../components/UI/Button';
import FeedbackSlider from '../../components/landingPage/FeedbackSlider';
import Accordionst from '../../components/UI/Accardionst';
import Aplication from '../../components/landingPage/Aplication';
import Footer from '../../layout/user/Footer';
import BreadCrumbs from '../../components/UI/BreadCrumbs';

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Услуги', href: '/uslugi' },
  { label: 'Дерматология' },
];

const InnerService = () => {
  const applicationUpdateFunc = () => {
    // I don't know why this func , syimyk bro will fix, and also syimyk bro fix buttons collor, mentors will not give comments
    //i don't do it reausable becouse routes is not available
  };

  return (
    <>
      <StyledContainer>
        <Header />
        <StyledBox>
          <BreadCrumbs items={breadcrumbs} />
          <StyledContent>
            {Dermatology.map(item => (
              <StyledMapContainer key={item.id}>
                <StyledDoctor>{item.doctor}</StyledDoctor>
                <StyledName>{item.name}</StyledName>
                <StyledTitle>{item.title}</StyledTitle>
                <StyledSubTitle>{item.subTitle}</StyledSubTitle>
              </StyledMapContainer>
            ))}

            {DermatologyLi.map(item => (
              <ul key={item.id}>
                <StyledLi>{item.titleLiText}</StyledLi>
              </ul>
            ))}

            {DermatologyText.map(item => (
              <>
                <StyledNameText>{item.titleText}</StyledNameText>
                <StyledTexttext>{item.textText}</StyledTexttext>
              </>
            ))}

            {DermatologyTextLi.map(item => (
              <>
                <StyledList>{item.title}</StyledList>
              </>
            ))}

            <StyledText>
              Цены на прием <span>врача-дерматолога</span>
              <StyledService>
                <p>Услуга</p>
                <p>Стоимость</p>
              </StyledService>
              <StyledPrice>
                <Accordionst
                  title="Первичный прием врача-дерматолога"
                  price="2300 сом">
                  <Box>
                    <p style={{ fontSize: '16px' }}>
                      Показано при любых формах ишемической болезни и пороках
                      сердца, повышенном артериальном давлении, кардиомиопатии,
                      аритмии и других патологиях.
                    </p>
                  </Box>
                </Accordionst>
                <Accordionst
                  title="Первичный прием врача-дерматолога"
                  price="1500 сом"
                />
                <Accordionst
                  title="Повторный прием врача-дерматолога"
                  price="1000 сом"
                />
              </StyledPrice>
            </StyledText>
          </StyledContent>
        </StyledBox>
      </StyledContainer>

      <FeedbackSlider />

      <StyledContainer>
        <StyledBox>
          <StyledContent>
            <StyledContainerDoctors>
              {doctors.slice(0, 9).map(({ id, img, name, doctor }) => (
                <Box key={id}>
                  <StyledImg src={img} alt={name} />
                  <h3>{name}</h3>
                  <Typography>{doctor}</Typography>
                  <br />
                  <Button variant="outlined">Записаться на прием</Button>
                </Box>
              ))}
            </StyledContainerDoctors>
          </StyledContent>
          <Aplication updateFunc={applicationUpdateFunc} />
        </StyledBox>
      </StyledContainer>

      <Footer />
    </>
  );
};

export default InnerService;

const StyledBox = styled(Box)(() => ({
  width: '100%',
  maxWidth: '1200px',
}));

const StyledContent = styled(Box)(() => ({
  width: '100%',
  minWidth: '1100px',
  fontFamily: 'Manrope, sans-serif',
}));

const StyledContainerDoctors = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '30px',
  margin: '0 auto',
  marginTop: '120px',
  fontFamily: 'Manrope, sans-serif',
}));

const StyledContainer = styled(Box)(() => ({
  maxWidth: '90rem',
  width: '100%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  fontFamily: 'Manrope, sans-serif',
}));

const StyledText = styled('h1')(() => ({
  fontSize: '2.25rem',
  fontFamily: 'Manrope, sans-serif',
  width: '56.4rem',
  marginTop: '120px',
  span: {
    color: 'green',
    fontWeight: 'bold',
  },
}));

const StyledDoctor = styled('h1')(() => ({
  fontSize: '2.25rem',
  fontFamily: 'Manrope, sans-serif',
  color: 'green',
  fontWeight: 'bold',
  marginTop: '26px',
}));

const StyledName = styled(Typography)(() => ({
  width: '48rem',
  fontFamily: 'Manrope, sans-serif',
  marginTop: '34px',
}));

const StyledMapContainer = styled(Typography)(() => ({
  width: '48rem',
  marginBottom: '12px',
}));

const StyledImg = styled('img')(() => ({
  width: '19.9rem',
}));

const StyledTitle = styled(Typography)(() => ({
  width: '48rem',
  fontSize: '24px',
  fontWeight: '600',
  fontFamily: 'Manrope, sans-serif',
  marginTop: '50px',
}));

const StyledNameText = styled(Typography)(() => ({
  width: '40rem',
  fontSize: '24px',
  fontWeight: '600',
  fontFamily: 'Manrope, sans-serif',
  marginTop: '40px',
}));

const StyledTexttext = styled(Typography)(() => ({
  width: '485px',
  fontSize: '16px',
  fontFamily: 'Manrope, sans-serif',
  marginTop: '16px',
  marginBottom: '12px',
}));

const StyledSubTitle = styled(Typography)(() => ({
  width: '48rem',
  fontSize: '1rem',
  fontWeight: '300',
  marginTop: '16px',
  fontFamily: 'Manrope, sans-serif',
}));

const StyledPrice = styled(Box)(() => ({
  width: '53.3rem',
}));

const StyledService = styled(Box)(() => ({
  display: 'flex',
  gap: '39rem',
  alignItems: 'center',
  backgroundColor: '#dbf0e5',
  width: '53.3rem',
  height: '3.7rem',
  borderRadius: '0.63rem',
  marginTop: '60px',
  '& p': {
    fontSize: '18px',
    marginLeft: '20px',
  },
}));

const StyledLi = styled('li')(() => ({
  marginLeft: '18px',
  fontFamily: 'Manrope, sans-serif',

  '&::marker': {
    marginLeft: '5px',
    color: 'green',
  },
}));

const StyledList = styled('li')(() => ({
  fontFamily: 'Manrope, sans-serif',

  '&::marker': {
    marginLeft: '5px',
    color: 'green',
  },
}));
