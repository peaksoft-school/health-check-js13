import { Box, InputAdornment, styled, TextField } from '@mui/material';
import Instagram from '../../assets/icons/HeaderInstagram.svg';
import Telegram from '../../assets/icons/HeaderTelegram.svg';
import WhatsApp from '../../assets/icons/HeaderWhatsApp.svg';
import Telephone from '../../assets/icons/CallIcon.svg';
import TheMap from '../../assets/icons/JpsIcon.svg';
import Hour from '../../assets/icons/TimeIcon.svg';
import Medcheck from '../../assets/images/HEALTHCHECK.png';
import Search from '../../assets/icons/SearchIcon.svg';
import Button from '../../components/UI/CustomUI/Button';
import AuthDropdown from '../../components/UI/menuItem/AuthDropdown';
import { Text } from '../../utils/constants/landingPageConstants';
import { useState, useEffect } from 'react';

const Header = () => {
  const [showBoxContent, setShowBoxContent] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (scrollY > 50) {
      setShowBoxContent(false);
      setScrolled(true);
    } else {
      setShowBoxContent(true);
      setScrolled(false);
    }
  };

  useEffect(() => {
    addEventListener('scroll', handleScroll);

    return () => {
      removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderClass>
      <Box className="container">
        <Content>
          <ContentCards className={scrolled ? 'scrolled' : ''}>
            <ContentNom>
              <ALink href="https://yandex.ru/maps/10309/bishkek/house/Y00YcAVoTUcEQFpofXR2dHRqZA==/?ll=74.628236%2C42.876148&z=19.25">
                <ContainerNom>
                  <SentryImg src={TheMap} alt="theMap" />
                  <MaxNumber>106452, г. Бишкек, Гражданская 119</MaxNumber>
                </ContainerNom>
              </ALink>
              <ContainerNom>
                <SentryImg src={Hour} alt="hour" />
                <GreenP>пн-сб</GreenP>
                <MaxNumber>08:00 до 18:00</MaxNumber>
              </ContainerNom>
            </ContentNom>
            <ContentInput>
              <Input
                fullWidth
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchImg src={Search} alt="search" />
                    </InputAdornment>
                  ),
                }}
                type="text"
                placeholder="Поиск по сайту"
              />
            </ContentInput>
            <ContainerCards>
              <IconContainer>
                <a href="https://www.instagram.com/_i.a.n.05_/">
                  <ImgNetworks src={Instagram} alt="instagram" />
                </a>
                <a href="https://t.me/+996500344433">
                  <ImgNetworks src={Telegram} alt="telegram" />
                </a>
                <a href="https://api.whatsapp.com/send/?phone=996500344433&text&type=phone_number&app_absent=0">
                  <ImgNetworks src={WhatsApp} alt="whatsApp" />
                </a>
              </IconContainer>
              <ContentNumber>
                <NumberCards>
                  <img src={Telephone} alt="telephone" />
                  <span>+996(800) 000 000</span>
                </NumberCards>
                <Span>+996(505) 000 000</Span>
              </ContentNumber>
              <AuthDropdown />
            </ContainerCards>
            <HR />
          </ContentCards>
          <ContentCards1>
            <BoxContent className={showBoxContent ? 'show' : 'hide'}>
              <HealthCheck src={Medcheck} alt="medcheck" />
              {Text.map((item, index) => (
                <Box key={index}>
                  <Title>{item.title}</Title>
                </Box>
              ))}
              <ContentButton>
                <ButtonClass variant="outlined">
                  получить результаты
                </ButtonClass>
                <Button1>запись онлайн</Button1>
              </ContentButton>
            </BoxContent>
          </ContentCards1>
        </Content>
      </Box>
    </HeaderClass>
  );
};

export default Header;

const HeaderClass = styled('header')(() => ({
  position: 'sticky',
  top: 0,
  zIndex: '999',
  marginTop: '10px',
}));

const ALink = styled('a')({
  color: '#000000',
  textDecoration: 'none',
});

const Content = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const ContentCards = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  paddingTop: 5,
  transition: 'background-color 0.3s ease',
  padding: '10px 0 3px 0 ',
  '&.scrolled': {
    backgroundColor: '#fff',
  },
}));

const ContentCards1 = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
}));

const ContentNom = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginRight: '5rem',
  '@media (max-width: 767px)': {
    width: '100%',
    height: 'auto',
    marginRight: '0',
  },
}));

const ContainerNom = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.3125rem',
  '@media (max-width: 767px)': {
    width: '100%',
    height: 'auto',
  },
}));

const MaxNumber = styled('p')(() => ({
  '@media (max-width: 567px)': {
    flexWrap: 'wrap',
    width: '100%',
    height: 'auto',
  },
}));

const GreenP = styled('p')(() => ({
  color: '#009344',
}));

const SentryImg = styled('img')(() => ({
  width: '1.25rem',
  height: '1.25rem',
}));

const ContentInput = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '1.25rem',
  width: '367px',
  flex: '1',
  '@media (max-width: 767px)': {
    marginLeft: '0',
    width: '100%',
    marginTop: '10px',
  },
}));

const ContainerCards = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '2.1875rem',
  '@media (max-width: 767px)': {
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
  },
}));

const HR = styled('hr')(() => ({
  width: '100%',
  marginTop: '0.8125rem',
  border: '1px solid #D9D9D9',
}));

const Input = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '1.5rem',
    width: '100%',
    height: '2.5rem',
    backgroundColor: '#F3F1F1',
    padding: '0 0 0 0.3125rem',
    '@media (max-width: 767px)': {
      width: '100%',
      height: 'auto',
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '1.5rem',
    border: 'none',
    outline: 'none',
  },
}));

const SearchImg = styled('img')(() => ({
  cursor: 'pointer',
  marginRight: '20px',
}));

const ContentNumber = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const Span = styled('span')(() => ({
  marginLeft: '1.375rem',
}));

const NumberCards = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const BoxContent = styled('div')(() => ({
  display: 'flex',
  gap: '2.8125rem',
  alignItems: 'center',
  marginTop: '0.875rem',
  flexWrap: 'wrap',
  transition: 'opacity 0.15s , transform 60ms',
  '&.hide': {
    opacity: '0',
    transform: 'translateY(-20px)',
    pointerEvents: 'none',
  },
  '&.show': {
    opacity: '1',
    transform: 'translateY(0)',
    pointerEvents: 'all',
  },
  '@media (max-width: 767px)': {
    width: '100%',
    height: 'auto',
  },
}));

const HealthCheck = styled('img')(() => ({
  width: '16.25rem',
  height: '4.5625rem',
  flexWrap: 'wrap',
  '@media (max-width: 767px)': {
    width: '100%',
    height: 'auto',
  },
}));

const ContentButton = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '1rem',
  flex: '1',
  '@media (max-width: 767px)': {
    marginLeft: '0',
    width: '100%',
    marginTop: '10px',
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

const Button1 = styled(Button)(() => ({
  '&.MuiButtonBase-root': {
    width: '158px',
    height: '43px',
    borderRadius: '24px',
    padding: '10px',
    fontSize: '14px',
  },
}));

const IconContainer = styled('div')(() => ({
  display: 'flex',
  gap: '0.625rem',
  marginLeft: '2.1875rem',
  '@media (max-width: 767px)': {
    width: '100%',
    height: 'auto',
  },
}));

const ImgNetworks = styled('img')(() => ({
  width: '2rem',
  height: '2rem',
  cursor: 'pointer',
}));

const Title = styled('p')(() => ({
  cursor: 'pointer',
}));
