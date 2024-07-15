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

const Footer = () => {
  return (
    <MainContainer>
      <StyledContainer>
        <StyledContent>
          <StyledTextContainer>
            <div>
              <StyledHealthTextContent>
                <StyledImg src={HealtcCheck} alt="Icon1" />
                <StyledHealthText>
                  <StyledSpan>HEALTH</StyledSpan>CHECK
                </StyledHealthText>
              </StyledHealthTextContent>
              <StyledTextContaier>
                <div>
                  <StyledH1>Медицинская клиника «HealthCheck»</StyledH1>
                </div>
                <div>
                  <StyledIcons>
                    Международная Медицинская клиника <br /> «HealthCheck» — это
                    клиника, в которой применяются <br /> новейшие
                    диагностические и лечебные технологии и <br /> ведут прием
                    лучшие специалисты.
                  </StyledIcons>
                </div>
              </StyledTextContaier>
            </div>

            <StyledIconsContainer>
              <h1>Контактная информация</h1>
              <StyledIconNumberContaier>
                <StyledIconsContent>
                  <StyledIconsLocation src={Location} alt="Icon2" />
                  <StyledIconsLocation src={Time} alt="Icon3" />
                  <StyledIconsLocation src={Callican} alt="Icon4" />
                  <StyledIconsLocation
                    src={Message}
                    alt="Icon5"
                    style={{ marginTop: '33px' }}
                  />
                </StyledIconsContent>
                <StyledNumberContent>
                  <ALink href="https://yandex.ru/maps/10309/bishkek/house/Y00YcAVoTUcEQFpofXR2dHRqZA==/?ll=74.628236%2C42.876148&z=19.25">
                    106452, г. Бишкек, Гражданская 119
                  </ALink>
                  <p>пн-сб 08:00 до 18:00</p>
                  <p>+996(800) 000 000</p>
                  <p>+996(505) 000 000</p>
                  <p>healthchek.</p>
                </StyledNumberContent>
              </StyledIconNumberContaier>
            </StyledIconsContainer>
            <StyledBox>
              <h2>Мы в социальных сетях:</h2>
              <StyledIconsThre>
               
                <a href="https://www.instagram.com/_i.a.n.05_/">
                  <img src={Instagram} alt="instagram" />
                </a>
                <a href="https://t.me/+996500344433">
                  <img src={Telegram} alt="telegram" />
                </a>
                <a href="https://api.whatsapp.com/send/?phone=996500344433&text&type=phone_number&app_absent=0">
                  <img src={WhatsApp} alt="whatsApp" />
                </a>
              </StyledIconsThre>
            </StyledBox>
          </StyledTextContainer>

          <StyledContactContainer>
            <StyledContactContent>
              {Text?.map(item => (
                <p>{item.title}</p>
              ))}
            </StyledContactContent>
          </StyledContactContainer>
          <StyledHr />
          <StyledFoodContent>
            <p>© Peaksoft House 2023 | MedCheck | Все права защищены</p>
          </StyledFoodContent>
        </StyledContent>
      </StyledContainer>
    </MainContainer>
  );
};

export default Footer;
const MainContainer = styled('div')`
  width: 100%;
  background: #212529;
  height: 564px;
`;
const StyledContainer = styled(Box)`
  width: 100%;
  max-width: 1440px;
  min-width: 1200px;
  height: 564px;
  margin: 20px auto;
  display: flex;
  background: #212529;
  padding: 5px 10px 5px 10px;
  align-items: center;
  justify-content: center;
`;

const StyledContent = styled(Box)`
  padding: 5px 10px 5px 10px;
`;

const StyledTextContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 78em;
  margin: 40px auto;
`;

const StyledHealthTextContent = styled(Box)`
  display: flex;
  width: 17.5rem;
`;

const ALink = styled('a')({
  color: '#ffffff',
  textDecoration: 'none',
});

const StyledHealthText = styled(Typography)`
  display: flex;
  gap: 2px;
  margin-top: 1.5rem;
  margin-left: 1rem;
  color: aliceblue;
  font-size: 1.45rem;
`;

const StyledSpan = styled('span')`
  color: #058541;
  font-size: 1.45rem;
  font-family: 'Manrope', sans-serif;
`;

const StyledImg = styled('img')`
  width: 4.5rem;
  height: 5rem;
  cursor: pointer;
`;

const StyledTextContaier = styled(Box)`
  color: aliceblue;
  margin-top: 3.5rem;
`;

const StyledH1 = styled(Typography)`
  font-size: 19px;
  margin-bottom: 1rem;
  font-family: 'Manrope', sans-serif;
`;

const StyledIcons = styled(Typography)`
  width: 420px;
  font-family: 'Manrope', sans-serif;
`;

const StyledIconsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  color: white;
  gap: 30px;
  h1 {
    font-size: 1.5rem;
    font-weight: 300;
    font-family: 'Manrope', sans-serif;
  }
`;

const StyledIconNumberContaier = styled(Box)`
  display: flex;
  gap: 20px;
`;

const StyledIconsContent = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 9px;
  width: 20px;
  color: white;
`;

const StyledIconsLocation = styled('img')`
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin-left: 9px;
`;

const StyledNumberContent = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: 'Manrope', sans-serif;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: white;
  h2 {
    font-family: 'Manrope', sans-serif;
    font-weight: 300;
  }
`;

const StyledIconsThre = styled(Box)`
  display: flex;
  gap: 20px;
  margin-top: 5px;
  cursor: pointer;
`;

const StyledContactContainer = styled(Box)`
  display: flex;
  gap: 20px;
  color: aliceblue;
  width: 100%;
`;

const StyledContactContent = styled(Box)`
  display: flex;
  gap: 30px;
  color: aliceblue;
  justify-content: center;
  width: 100%;
  margin-top: 48px;
  p {
    font-family: 'Manrope', sans-serif;
    cursor: pointer;
  }
`;

const StyledHr = styled('hr')`
  width: 100%;
  border: none;
  border-top: 1px solid #868e96;
  margin-top: 48px;
`;

const StyledFoodContent = styled(Box)`
  display: flex;
  gap: 20px;
  color: white;
  justify-content: center;
  margin-top: 28px;
  font-weight: 100;
  font-size: 14px;
  p {
    font-family: 'Manrope', sans-serif;
  }
`;
