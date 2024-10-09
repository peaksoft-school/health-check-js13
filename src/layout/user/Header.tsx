import { Box, styled, Typography } from '@mui/material';
import Instagram from '../../assets/icons/HeaderInstagram.svg';
import Telegram from '../../assets/icons/HeaderTelegram.svg';
import WhatsApp from '../../assets/icons/HeaderWhatsApp.svg';
import Telephone from '../../assets/icons/CallIcon.svg';
import TheMap from '../../assets/icons/JpsIcon.svg';
import Hour from '../../assets/icons/TimeIcon.svg';
import Medcheck from '../../assets/images/HEALTHCHECK.png';
import Button from '../../components/UI/Button';
import AuthDropdown from '../../components/UI/menuItem/AuthDropdown';
import { Text } from '../../utils/constants/landingPageConstants';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/customHooks';
import Close from '../../assets/icons/CloseIcon.svg';
import Gogle from '../../assets/icons/gogle.svg';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../configs/firebase';
import { googleAuthFirbase } from '../../store/slices/auth/authThunk';
import Modal from '../../components/UI/Modal';
import SidebarMenu from '../../pages/user/modalWindows/SidebarMenu';
import Search from './SearchHeaderNavigate copy';

const Header = () => {
  const [openModal, setIsOpenThreeModal] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const navigate = useNavigate();
  const { role } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const toggleSidebar = () => {
    setOpenSidebar(open => !open);
  };

  const openModalAll = () => setIsOpenThreeModal(prev => !prev);

  const navigateSignUp = () => navigate('sign-up');
  const navigateSignIn = () => navigate('sign-in');
  const googleAuthFn = () => {
    signInWithPopup(auth, provider)
      .then(data => {
        if (data.user) {
          data.user.getIdToken().then(token => {
            dispatch(googleAuthFirbase({ tokenId: token, openModalAll }));
          });
        }
      })
      .catch(error => {
        console.error('Ошибка при аутентификации через Google:', error);
      });
  };

  return (
    <div className="boxter">
      <HeaderClass>
        <Box className="container">
          <Content>
            <ContentCardsFunc>
              <ContentCards>
                <ContentNom>
                  <ALink
                    target="_blank"
                    href="https://yandex.ru/maps/10309/bishkek/house/Y00YcAVoTUcEQFpofXR2dHRqZA==/?ll=74.628236%2C42.876148&z=19.25">
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
                  <Search />
                </ContentInput>

                <ContainerCards>
                  <IconContainer>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/_i.a.n.05_/">
                      <Instagram />
                    </a>
                    <a target="_blank" href="https://t.me/+996500344433">
                      <Telegram />
                    </a>
                    <a
                      target="_blank"
                      href="https://api.whatsapp.com/send/?phone=996500344433&text&type=phone_number&app_absent=0">
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
              </ContentCards>
            </ContentCardsFunc>

            <SidebarMenu open={openSidebar} toggleDrawer={toggleSidebar} />
            <HR />

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
                  {role === 'USER' ? (
                    <Link to="results">
                      <ButtonClass variant="outlined">
                        получить результаты
                      </ButtonClass>
                    </Link>
                  ) : (
                    <Box>
                      <ButtonClass
                        variant="outlined"
                        onClick={() => setIsOpenThreeModal(true)}>
                        получить результаты
                      </ButtonClass>
                    </Box>
                  )}

                  {role === 'USER' ? (
                    <Button1 onClick={toggleSidebar}>запись онлайн</Button1>
                  ) : (
                    <Button1 onClick={openModalAll}>запись онлайн</Button1>
                  )}
                </ContentButton>
              </BoxContent>
            </ContentCards1>
          </Content>
        </Box>
      </HeaderClass>

      <Modal open={openModal} onClose={openModalAll}>
        <StyledSecondModal>
          <TypographyStyled fontFamily={'Manrope,sans-serif'} fontWeight={900} variant="h6">
            Для того чтобы оставить заявку, пожалуйста, <br /> зарегистрируйтесь
            или войдите в систему.
          </TypographyStyled>
          <BoxStyledButton>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                width: '100%',
              }}>
              <Button onClick={navigateSignUp} variant="contained">
                Зарегистрироваться
              </Button>
              <Button
                onClick={navigateSignIn}
                variant="contained"
                className="buttonSign">
                Войти
              </Button>
            </div>
            <BoxGoogle onClick={googleAuthFn}>
              <Gogle />
              Зарегистрироваться с Google
            </BoxGoogle>
          </BoxStyledButton>
          <StyledModalIcon onClick={openModalAll}>
            <Close />
          </StyledModalIcon>
        </StyledSecondModal>
      </Modal>
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

const TypographyStyled = styled(Typography)(() => ({
  textAlign: 'center',
  fontWeight: '500',
}));

const BoxStyledButton = styled(Box)(() => ({
  display: 'flex',
  width: '550px',
  height: '120px',
  justifyContent: 'center',
  gap: '5px',
  margin: '20px 0 0 0',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginTop: '50px',
  '& .buttonSign': {
    width: '250px',
    height: '45px',
  },
}));

const BoxGoogle = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  cursor: 'pointer',
  fontFamily: '"Manrope", san-serif',
  fontWeight: '600',
  background: 'white',
  padding: '13px 10px',
  borderRadius: '8px',
  color: 'black',
  height: '44px',

  '& > img': {
    width: '20px',
    height: '20px',
  },
}));

const StyledModalIcon = styled('div')(() => ({
  width: '36px',
  height: '36px',
  position: 'absolute',
  top: '10px',
  right: '10px',
  cursor: 'pointer',
}));

const StyledSecondModal = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '659px',
  zIndex: '19999999999999',
  height: '468px',
  backgroundColor: '#ebf2fc',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '20px',
  padding: '16px',
  fontFamily: '"Poppins",sans-serif',
  h2: {
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 500,
    width: '380px',
    height: '50px',
    fontSize: '27px',
    marginBottom: '50px',
  },

  p: {
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 400,
    fontSize: '18px',
    marginBottom: '10px',
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
  width: '100%',
}));

const ContentCardsFunc = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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
  width: '467px',
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
  width: '1200px',
  marginTop: '0.8125rem',
  border: '1px solid #D9D9D9',
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
