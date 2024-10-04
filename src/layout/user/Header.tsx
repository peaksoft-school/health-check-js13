import { Box, InputAdornment, styled, TextField } from '@mui/material';
import Instagram from '../../assets/icons/HeaderInstagram.svg';
import Telegram from '../../assets/icons/HeaderTelegram.svg';
import WhatsApp from '../../assets/icons/HeaderWhatsApp.svg';
import Telephone from '../../assets/icons/CallIcon.svg';
import TheMap from '../../assets/icons/JpsIcon.svg';
import Hour from '../../assets/icons/TimeIcon.svg';
import Medcheck from '../../assets/images/HEALTHCHECK.png';
import Search from '../../assets/icons/SearchIcon.svg';
import Button from '../../components/UI/Button';
import AuthDropdown from '../../components/UI/menuItem/AuthDropdown';
import { Text } from '../../utils/constants/landingPageConstants';
import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const [showBoxContent, setShowBoxContent] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const navigate = useNavigate();

  const handleScroll = () => {
    const scrollTop = pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      setShowBoxContent(false);
    } else {
      setShowBoxContent(true);
    }

    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
  };

  useEffect(() => {
    addEventListener('scroll', handleScroll);

    return () => {
      removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    const handleScrolled = () => {
      if (scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    addEventListener('scroll', handleScrolled);

    return () => {
      removeEventListener('scroll', handleScrolled);
    };
  }, []);

  return (
    <div className="boxter">
      <HeaderClass>
        <Box className="container">
          <Content>
            <ContentCardsFunc>
              <ContentCards className={scrolled ? 'scrolled' : ''}>
                <ContentNom>
                  <ALink href="https://yandex.ru/maps/10309/bishkek/house/Y00YcAVoTUcEQFpofXR2dHRqZA==/?ll=74.628236%2C42.876148&z=19.25">
                    <ContainerNom>
                      <TheMap />
                      <MaxNumber>106452, г. Бишкек, Гражданская 119</MaxNumber>
                    </ContainerNom>
                  </ALink>
                  <ContainerNom>
                    <Hour />
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
                          <Search />
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
                      <Instagram />
                    </a>
                    <a href="https://t.me/+996500344433">
                      <Telegram />
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=996500344433&text&type=phone_number&app_absent=0">
                      <WhatsApp />
                    </a>
                  </IconContainer>
                  <ContentNumber>
                    <NumberCards>
                      <Telephone />
                      <span>+996(800) 000 000</span>
                    </NumberCards>
                    <Span>+996(505) 000 000</Span>
                  </ContentNumber>
                  <AuthDropdown />
                </ContainerCards>
                <HR />
              </ContentCards>
            </ContentCardsFunc>
            <ContentCards1>
              <BoxContent>
                <HealthCheck
                  src={Medcheck}
                  alt="medcheck"
                  onClick={() => navigate('/')}
                />
                {Text.map((item, index) => (
                  <Box key={index}>
                    <Title>
                      <StyledNavLink to={item.to}>{item.title}</StyledNavLink>
                    </Title>
                  </Box>
                ))}
                <ContentButton>
                  <Link to="results">
                    <ButtonClass variant="outlined">
                      получить результаты
                    </ButtonClass>
                  </Link>
                  <Button1>запись онлайн</Button1>
                </ContentButton>
              </BoxContent>
            </ContentCards1>
          </Content>
        </Box>
      </HeaderClass>
    </div>
  );
};

export default Header;

const StyledNavLink = styled(NavLink)(() => ({
  color: 'black',
  textDecoration: 'none',
  padding: '4px 10px',
  borderRadius: '4px',

  '&:hover': {
    color: '#1E90FF',
  },
  '&.active': {
    color: 'blue',
  },
}));

const HeaderClass = styled('header')(() => ({
  position: 'sticky',
  top: 0,
  zIndex: 999,
  fontFamily: '"Poppins", sans-serif',
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

const ContentCardsFunc = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  backgroundColor: '#fff',
}));

const ContentCards = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  paddingTop: 5,
  transition: 'background-color 0.3s ease',
  width: '1217px',
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

const BoxContent = styled('div')(() => ({
  width: '1220px',
  display: 'flex',
  gap: '31px',
  alignItems: 'center',
  marginTop: '0.875rem',
  flexWrap: 'wrap',
  position: 'relative',

  '@media (max-width: 767px)': {
    width: '100%',
    height: 'auto',
    padding: '0 0.5rem',
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
    padding: '0 20px 0 5px',
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

const HealthCheck = styled('img')(() => ({
  width: '16.25rem',
  height: '4.5625rem',
  flexWrap: 'wrap',
  cursor: 'pointer',
  '@media (max-width: 767px)': {
    width: '100%',
    height: 'auto',
  },
}));

const Title = styled('p')(() => ({
  cursor: 'pointer',
}));

const ContentButton = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.625rem',
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
    justifyContent: 'center',
    marginLeft: '0',
  },
}));
