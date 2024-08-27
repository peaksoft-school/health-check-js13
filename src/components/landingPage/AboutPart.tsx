import { FC } from 'react';
import { Box, styled } from '@mui/material';
import { date } from '../../utils/constants/aboutCards';

const AboutPart: FC = () => (
  <AboutPartContainer>
    <Box className="container">
      <Content>
        <ContentGlab>
          <Span>Почему</Span>
          <SpanGreen>нас выбирают?</SpanGreen>
        </ContentGlab>
        <CardsContainer>
          <CardsContent>
            {date.map(item => (
              <Cards key={item.id}>
                <Number>{item.number}</Number>
                <Title>{item.title}</Title>
                <Text>{item.text}</Text>
              </Cards>
            ))}
          </CardsContent>
        </CardsContainer>
      </Content>
    </Box>
  </AboutPartContainer>
);

export default AboutPart;

const AboutPartContainer = styled('div')(() => ({
  width: '100%',
  minHeight: '400px',
  minWidth: '1200px',
  maxWidth: '1440px',
  margin: '0 auto',
}));

const Content = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  fontFamily: 'Manrope, sans-serif',
}));

const ContentGlab = styled('div')(() => ({
  display: 'flex',
  gap: '7px',
  marginRight: '790px',
  fontFamily: 'Manrope, sans-serif',
}));

const Span = styled('span')(() => ({
  fontSize: '36px',
  fontWeight: '550',
}));

const SpanGreen = styled('span')(() => ({
  color: '#048741',
  fontSize: '36px',
  fontWeight: '550',
}));

const CardsContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '60px',
}));

const CardsContent = styled('div')(() => ({
  display: 'flex',
  gap: '16px',
}));

const Cards = styled('div')(() => ({
  width: '389px',
  height: '280px',
  backgroundColor: '#DBEBFF',
  padding: '25px 65px 35px 35px',
  borderRadius: '4px',
}));

const Number = styled('span')(() => ({
  color: '#048741',
  fontSize: '48px',
  fontFamily: 'Manrope, sans-serif',
  fontWeight: '550',
}));

const Title = styled('p')(() => ({
  fontSize: '1.3269rem',
  fontFamily: 'Manrope, sans-serif',
  fontWeight: '450',
  marginTop: '5px',
}));

const Text = styled('p')(() => ({
  fontSize: '16px',
  marginTop: '18px',
  fontFamily: 'Manrope, sans-serif',
}));
