import { FC } from 'react';
import { Box, styled } from '@mui/material';
import { date } from '../../utils/constants/aboutCards';

const AboutPart: FC = () => (
  <Box>
    <Box className="container">
      <Content>
        <ContentGlab>
          <span style={{ fontSize: '36px' }}>Почему</span>
          <SpanGreen>нас выбирают?</SpanGreen>
        </ContentGlab>
        <CardsContainer>
          <CardsContent>
            {date.map(item => (
              <Cards key={item.id}>
                <Span>{item.number}</Span>
                <Title>{item.title}</Title>
                <Text>{item.text}</Text>
              </Cards>
            ))}
          </CardsContent>
        </CardsContainer>
      </Content>
    </Box>
  </Box>
);

export default AboutPart;

const Content = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}));

const ContentGlab = styled('div')(() => ({
  display: 'flex',
  gap: '5px',
  marginRight: '800px',
}));

const SpanGreen = styled('span')(() => ({
  color: '#048741',
  fontSize: '36px',
}));

const CardsContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '45px',
}));

const CardsContent = styled('div')(() => ({
  display: 'flex',
  gap: '15px',
}));

const Cards = styled('div')(() => ({
  width: '389px',
  height: '280px',
  backgroundColor: '#DBEBFF',
  padding: '25px 65px 35px 35px',
  borderRadius: '4px',
}));

const Span = styled('span')(() => ({
  color: '#048741',
  fontSize: '48px',
}));

const Title = styled('p')(() => ({
  fontSize: '20px',
}));

const Text = styled('p')(() => ({
  fontSize: '16px',
  marginTop: '10px',
}));
