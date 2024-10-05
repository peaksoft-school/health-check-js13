import { Box, styled, Typography } from '@mui/material';

import Button from '../../components/UI/Button';
import FeedbackSlider from '../../components/landingPage/FeedbackSlider';
import Footer from '../../layout/user/Footer';
import BreadCrumbs from '../../components/UI/BreadCrumbs';
import DoctorTenImg from '../../assets/images/DoctorTenImg.png';
import DoctorSeven from '../../assets/images/DoctorSevenImg.png';
import DoctorFive from '../../assets/images/DoctorFiveImg.png';
import Application from '../../components/landingPage/Application';
import Accordeon from '../../components/UI/Accardeon';
import { useParams } from 'react-router-dom';
import index from '../../utils/constants/index.json';

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Услуги', href: '/uslugi' },
  { label: 'Дерматология' },
];

const InnerService = () => {
  const { id } = useParams();
  const innerData = index.find(item => item.id === +id);
  return (
    <>
      <StyledContainer>
        <StyledBox>
          <BreadCrumbs items={breadcrumbs} />
          <StyledContent>
            <StyledMapContainer>
              <StyledDoctor>{innerData?.name}</StyledDoctor>
              <StyledName>{innerData?.text}</StyledName>
              <StyledTitle>{innerData?.title}</StyledTitle>
              <StyledSubTitle>{innerData?.titleOptions}</StyledSubTitle>
            </StyledMapContainer>

            <ul>
              {innerData?.options.map(({ id, proud }) => (
                <StyledLi key={id}>{proud}</StyledLi>
              ))}
            </ul>

            <StyledNameText>{innerData?.doctor}</StyledNameText>
            <StyledTexttext>{innerData?.doctorTitle}</StyledTexttext>

            {innerData?.doctorOptions?.map(({ proud }) => (
              <StyledList>{proud}</StyledList>
            ))}

            <div style={{ width: '71%', margin: '20px 0' }}>
              <Typography variant="h4" sx={{ margin: '35px 0' }}>
                Цены на прием
                <span style={{ color: '#048741', marginLeft: '5px' }}>
                  врача-{innerData?.name}
                </span>
              </Typography>
              <Accordeon style={{ width: '100%' }} title="Услуга">
                <Typography className="good">price</Typography>
                <Ul>
                  {[1, 2, 3, 4, 5, 6].map(todo => (
                    <li key={todo}>wite house</li>
                  ))}
                </Ul>
              </Accordeon>
            </div>
          </StyledContent>
        </StyledBox>
      </StyledContainer>

      <FeedbackSlider />

      <StyledContainer>
        <StyledBox>
          <StyledContent>
            <StyledContainerDoctors>
              <div className="imgContent">
                <StyledImg src={DoctorTenImg} alt="name" />
                <StyledImg src={DoctorSeven} alt="name" />
                <StyledImg src={DoctorFive} alt="name" />
              </div>
              <div className="imgContents">
                <div>
                  <p>Манак Елена</p>
                  <p>Врач-{innerData?.name}</p>
                </div>
                <div>
                  <p>Манак Елена</p>
                  <p>Врач-{innerData?.name}</p>
                </div>
                <div>
                  <p>Манак Елена</p>
                  <p>Врач-{innerData?.name}</p>
                </div>
              </div>
              <div className="imgContentst">
                <Button variant="outlined">Записаться на прием</Button>
                <Button variant="outlined">Записаться на прием</Button>
                <Button variant="outlined">Записаться на прием</Button>
              </div>
            </StyledContainerDoctors>
          </StyledContent>
          <Application />
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

const Ul = styled('ul')(() => ({
  '& > li': {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    paddingLeft: '10px',
    fontFamily: '"Manrope", sans-serif',
    fontSize: '14px',
  },
  '& li::before': {
    content: '"•"',
    color: 'green',
    fontSize: '30px',
    fontWeight: '900',
    marginRight: '10px',
  },
}));

const StyledContent = styled(Box)(() => ({
  width: '100%',
  minWidth: '1100px',
  fontFamily: 'Manrope, sans-serif',
}));

const StyledContainerDoctors = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  margin: '0 auto',
  marginTop: '120px',
  fontFamily: 'Manrope, sans-serif',

  '& .imgContent': {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
  },
  '& .imgContents': {
    display: 'flex',
    justifyContent: 'center',
    gap: '220px',
  },
  '& .imgContentst': {
    display: 'flex',
    justifyContent: 'center',
    gap: '120px',
  },
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

const StyledLi = styled('li')(() => ({
  margin: '15px 0 15px 18px',
  fontFamily: 'Manrope, sans-serif',

  '&::marker': {
    marginLeft: '5px',
    color: 'green',
  },
}));

const StyledList = styled('li')(() => ({
  fontFamily: 'Manrope, sans-serif',
  margin: '15px 0',
  '&::marker': {
    marginLeft: '5px',
    color: 'green',
  },
}));
