import { FC } from 'react';
import { Box, styled, Typography } from '@mui/material';
import Accordeon from '../../../components/UI/Accardeon';
import { Cards } from '../../../utils/constants/price';

const Price: FC = () => (
  <PriceContainer>
    <Box className="container">
      <Box className="content">
        <Box className="cards">
          <Box className="contentPrice">
            <span>Наш</span>
            <span className="greenText">прайс</span>
          </Box>
          <StyledTypographyText>
            Цены на услуги формируются в соответствии с действующими
            Прейскурантами. Общая стоимость зависит от объема услуг, оказываемых
            в рамках приёма. Объём оказываемых услуг определяется врачом, исходя
            из показаний для обследования и пожеланий клиента.
          </StyledTypographyText>
        </Box>
        <StyledContent>
          <AccordeonsContent>
            {Cards?.map(
              ({ id, name, goodName, goodNumber, good, goodText, inside }) => (
                <Accordeon key={id} title={name}>
                  <StyledCards>
                    <BoxContent>
                      <Boxs>
                        <StyledTypography>{goodName}</StyledTypography>
                        <PriceNumber>{goodNumber}</PriceNumber>
                      </Boxs>
                      <MapContent>
                        <Text>{good}</Text>
                        <Text>{goodText}</Text>
                      </MapContent>
                    </BoxContent>
                    <MapContainer>
                      <HrClass />
                      {inside.map(({ id, text, textNumber }) => (
                        <NumberCont key={id}>
                          <StyledCardsText>
                            <StyledTypography>{text}</StyledTypography>
                            <PriceNumber>{textNumber}</PriceNumber>
                          </StyledCardsText>
                          <Hr />
                        </NumberCont>
                      ))}
                    </MapContainer>
                  </StyledCards>
                </Accordeon>
              )
            )}
          </AccordeonsContent>
        </StyledContent>
      </Box>
    </Box>
  </PriceContainer>
);

export default Price;

const PriceContainer = styled('div')(() => ({
  width: '100%',
  maxWidth: '1440px',
  minWidth: '1200px',
  margin: '0 auto',
  marginTop: '40px',
  '.content': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    '.cards': {
      width: '691px',
      height: '183px',
      margin: '0 500px 0 0',
      '.contentPrice': {
        display: 'flex',
        gap: '7px',
        span: {
          fontSize: '36px',
          fontFamily: '"Poppins", sans-serif',
        },
        '& > .greenText': {
          color: '#048741',
        },
      },
      p: {
        fontSize: '18px',
        fontFamily: '"Poppins", sans-serif',
        color: '#4D4E51',
      },
    },
  },
}));

const StyledContent = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '30px 340px 0 0',
}));

const StyledCards = styled('div')(() => ({
  width: '100%',
  paddingTop: '26px',
}));

const Boxs = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const BoxContent = styled('div')(() => ({
  width: '800px',
  height: '134px',
  display: 'flex',
  flexDirection: 'column',
}));

const StyledTypographyText = styled(Typography)(() => ({
  fontSize: '18px',
  fontFamily: '"Manrope", sans-serif',
  color: '#4D4E51',
  margin: '34px 0 0 0',
}));

const StyledTypography = styled(Typography)(() => ({
  fontSize: '18px',
  fontFamily: '"Manrope", sans-serif',
  color: '#4D4E51',
  fontWeight: 500,
}));

const AccordeonsContent = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '852px',
  marginTop: '35px',
}));

const PriceNumber = styled('p')(() => ({
  fontSize: '18px',
  fontFamily: '"Manrope", sans-serif',
  color: '#4D4E51',
}));

const MapContent = styled('div')(() => ({
  width: '699px',
  marginTop: '26px',
}));

const MapContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
}));

const NumberCont = styled('div')(() => ({
  marginLeft: '-14px',
}));

const StyledCardsText = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '800px',
  height: '50px',
  justifyContent: 'space-between',
  marginLeft: '12px',
  marginBottom: '25px',
}));

const Text = styled('p')(() => ({
  fontSize: '16px',
  fontFamily: '"Manrope", sans-serif',
  color: '#4D4E51',
}));

const Hr = styled('hr')(() => ({
  width: '850px',
  border: '1px solid #E0E2E7',
  margin: '-5px 0 0 0.710px',
}));

const HrClass = styled('hr')(() => ({
  width: '850px',
  border: '1px solid #E0E2E7',
  margin: '15px 10px 0 -14px',
}));
