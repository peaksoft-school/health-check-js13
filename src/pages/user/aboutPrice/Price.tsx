import { FC } from 'react';
import { styled, Typography } from '@mui/material';
import Accordeon from '../../../components/UI/Accardeon';
import { Cards } from '../../../utils/constants/price';

const Price: FC = () => {
  return (
    <PriceContainer>
      <div className="container">
        <div className="content">
          <div className="Cards">
            <div className="contentPrice">
              <span>Наш</span>
              <span style={{ color: '#048741' }}>прайс</span>
            </div>
            <p style={{ marginTop: '34px' }}>
              Цены на услуги формируются в соответствии с действующими
              Прейскурантами. Общая стоимость зависит от объема услуг,
              оказываемых в рамках приёма. Объём оказываемых услуг определяется
              врачом, исходя из показаний для обследования и пожеланий клиента.
            </p>
          </div>
          <StyledContent className="ButtonContent">
            <AccordeonsContent>
              {Cards?.map(item => (
                <Accordeon key={item.id} title={item.name}>
                  <CardsContent>
                    <BoxContent>
                      <Box>
                        <StyledTypography>{item.goodName}</StyledTypography>
                        <PriceNumber>{item.goodNumber}</PriceNumber>
                      </Box>
                      <MapContent>
                        <Text>{item.good}</Text>
                        <Text>{item.goodText}</Text>
                      </MapContent>
                    </BoxContent>
                    <MapContainer>
                      <HrClass />
                      {item.inside.map(subItem => (
                        <NumberCont key={subItem.id}>
                          <CardsText>
                            <StyledTypography>{subItem.text}</StyledTypography>
                            <PriceNumber>{subItem.textNumber}</PriceNumber>
                          </CardsText>
                          <Hr />
                        </NumberCont>
                      ))}
                    </MapContainer>
                  </CardsContent>
                </Accordeon>
              ))}
            </AccordeonsContent>
          </StyledContent>
        </div>
      </div>
    </PriceContainer>
  );
};

export default Price;

const PriceContainer = styled('div')(() => ({
  width: '100%',
  maxWidth: '1440px',
  minWidth: '1200px',
  margin: '0 auto',
  marginTop: '40px',
  '.content': {
    display: 'flex',
    flexDirection: 'column',
    '.Cards': {
      width: '691px',
      height: '183px',
      marginLeft: '100px',
      '.contentPrice': {
        display: 'flex',
        gap: '7px',
        span: {
          fontSize: '36px',
          fontFamily: '"Poppins", sans-serif',
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
  marginTop: '40px',
  marginLeft: '100px',
}));

const CardsContent = styled('div')(() => ({
  width: '100%',
  paddingTop: '26px',
}));

const Box = styled('div')(() => ({
  display: 'flex',
  gap: '160px',
}));

const BoxContent = styled('div')(() => ({
  width: '852px',
  height: '134px',
}));

const StyledTypography = styled(Typography)(() => ({
  fontSize: '18px',
  fontFamily: '"Manrope", sans-serif',
  fontWeight: 'bold',
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
  fontWeight: 'bold',
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

const CardsText = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '850px',
  height: '50px',
  justifyContent: 'space-between',
}));

const Text = styled('p')(() => ({
  fontSize: '16px',
  fontFamily: '"Manrope", sans-serif',
}));

const Hr = styled('hr')(() => ({
  width: '852px',
  border: '1px solid #E0E2E7',
  marginTop: '15px',
}));

const HrClass = styled('hr')(() => ({
  width: '852px',
  border: '1px solid #E0E2E7',
  marginTop: '15px',
  marginLeft: '-10px',
}));
