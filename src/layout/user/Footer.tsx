import { Box, styled, Typography } from '@mui/material';
import HealtcCheck from '../../assets/icons/HealthCheck.svg';
import Location from '../../assets/icons/JpsIcon.svg';
import Time from '../../assets/icons/TimeIcon.svg';
import Callican from '../../assets/icons/CallIcon.svg';
import Message from '../../assets/icons/MessageIcon.svg';
import Instagram from '../../assets/icons/FooterInstagram.svg';
import Telegram from '../../assets/icons/FooterTelegram.svg';
import WhatsApp from '../../assets/icons/FooterWhatsApp.svg';
import { Text } from '../../utils/constants/landingPageConstants';

const Footer = () => (
  <StyledMainContainer>
    <StyledContainer>
      <StyledContent>
        <StyledTextContainer>
          <StyledContainerContent>
            <StyledHealthTextContent>
              <HealtcCheck />
              <StyledHealthText>
                <StyledSpan>HEALTH</StyledSpan>CHECK
              </StyledHealthText>
            </StyledHealthTextContent>
            <StyledTextContaier>
              <Box>
                <StyledH1>Медицинская клиника «HealthCheck»</StyledH1>
              </Box>
              <Box>
                <StyledIcons>
                  Международная Медицинская клиника <br /> «HealthCheck» — это
                  клиника, в которой применяются <br /> новейшие диагностические
                  и лечебные технологии и <br /> ведут прием лучшие специалисты.
                </StyledIcons>
              </Box>
            </StyledTextContaier>
          </StyledContainerContent>

          <StyledIconsContainer>
            <Typography>Контактная информация</Typography>
            <StyledIconNumberContaier>
              <StyledIconsContent>
                <StyledALink href="https://yandex.ru/maps/10309/bishkek/house/Y00YcAVoTUcEQFpofXR2dHRqZA==/?ll=74.628236%2C42.876148&z=19.25">
                  <Location />
                </StyledALink>

                <Time />
                <Callican />
                <Message />
              </StyledIconsContent>
              <StyledNumberContent>
                <Typography>106452, г. Бишкек, Гражданская 119</Typography>
                <Typography>пн-сб 08:00 до 18:00</Typography>
                <Typography>+996(800) 000 000</Typography>
                <Typography>+996(505) 000 000</Typography>
                <Typography>healthchek.kg</Typography>
              </StyledNumberContent>
            </StyledIconNumberContaier>
          </StyledIconsContainer>
          <StyledBox>
            <Typography>Мы в социальных сетях:</Typography>
            <StyledIconsThre>
              <a href="https://www.instagram.com/_i.a.n.05_/">
                <Instagram />
              </a>
              <a href="https://t.me/+996500344433">
                <Telegram />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=996500344433&text&type=phone_number&app_absent=0">
                <WhatsApp />
              </a>
            </StyledIconsThre>
          </StyledBox>
        </StyledTextContainer>

        <StyledContactContainer>
          <StyledContactContent>
            {Text.map(item => (
              <Typography key={item.id}>{item.title}</Typography>
            ))}
          </StyledContactContent>
        </StyledContactContainer>
        <StyledHr />
        <StyledFoodContent>
          <Typography>
            © Peaksoft House 2023 | MedCheck | Все права защищены
          </Typography>
        </StyledFoodContent>
      </StyledContent>
    </StyledContainer>
  </StyledMainContainer>
);

export default Footer;
const StyledMainContainer = styled(Box)(() => ({
  width: '100%',
  background: '#212529',
  height: '564px',
}));
const StyledContainerContent = styled(Box)(() => ({
  marginRight: '3rem',
}));

const StyledContainer = styled(Box)(() => ({
  width: '100%',
  maxWidth: '1940px',
  // minWidth: '1200px',
  height: '564px',
  margin: '0 auto',
  display: 'flex',
  background: '#212529',
  padding: '5px 10px',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledContent = styled(Box)(() => ({
  padding: '5px 10px',
}));

const StyledTextContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-around',
  width: '78em',
  margin: '40px auto',
}));

const StyledHealthTextContent = styled(Box)(() => ({
  display: 'flex',
  width: '17.5rem',
}));

const StyledALink = styled('a')(() => ({
  color: '#c0bebe',
  textDecoration: 'none',
  fontSize: '1rem',
}));

const StyledHealthText = styled(Typography)(() => ({
  display: 'flex',
  gap: '2px',
  marginTop: '1.5rem',
  marginLeft: '1rem',
  color: 'aliceblue',
  fontSize: '1.45rem',
  cursor: 'pointer',
}));

const StyledSpan = styled('span')(() => ({
  color: '#058541',
  fontSize: '1.45rem',
  fontFamily: 'Manrope, sans-serif',
}));

const StyledTextContaier = styled(Box)(() => ({
  color: 'aliceblue',
  marginTop: '3.5rem',
}));

const StyledH1 = styled(Typography)(() => ({
  fontSize: '16px',
  marginBottom: '1rem',
  fontFamily: 'Manrope, sans-serif',
}));

const StyledIcons = styled(Typography)(() => ({
  width: '420px',
  fontFamily: 'Manrope, sans-serif',
  color: '#cfcccc',
}));

const StyledIconsContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginRight: '9rem',
  color: 'white',
  gap: '30px',
  h1: {
    fontSize: '1rem',
    fontWeight: '600',
    fontFamily: 'Manrope, sans-serif',
  },
}));

const StyledIconNumberContaier = styled(Box)(() => ({
  display: 'flex',
  gap: '20px',
}));

const StyledIconsContent = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '9px',
  width: '22px',
  color: 'white',
}));

const StyledNumberContent = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  fontFamily: 'Manrope, sans-serif',
  position: 'relative',
  right: '8px',
  p: {
    fontSize: '1rem',
    color: '#cfcccc',
  },
}));

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  color: 'white',
  h2: {
    fontFamily: 'Manrope, sans-serif',
    fontWeight: '300',
    fontSize: '1rem',
  },
}));

const StyledIconsThre = styled(Box)(() => ({
  display: 'flex',
  gap: '20px',
  marginTop: '5px',
  cursor: 'pointer',
}));

const StyledContactContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '20px',
  color: 'aliceblue',
  width: '100%',
}));

const StyledContactContent = styled(Box)(() => ({
  display: 'flex',
  gap: '30px',
  color: '#cfcccc',
  justifyContent: 'center',
  width: '100%',
  marginTop: '48px',
  p: {
    fontFamily: 'Manrope, sans-serif',
    cursor: 'pointer',
  },
}));

const StyledHr = styled('hr')(() => ({
  width: '100%',
  border: 'none',
  borderTop: '1px solid #868e96',
  marginTop: '48px',
}));

const StyledFoodContent = styled(Box)(() => ({
  display: 'flex',
  gap: '20px',
  color: 'white',
  justifyContent: 'center',
  marginTop: '28px',
  fontWeight: '100',
  fontSize: '14px',
  p: {
    fontFamily: 'Manrope, sans-serif',
    color: '#b6b1b1',
    width: '400px',
    fontSize: '14px',
  },
}));
