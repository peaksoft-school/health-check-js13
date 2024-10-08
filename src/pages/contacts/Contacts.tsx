import { Box, styled, Typography } from '@mui/material';
import GoogleMap from '../../components/UI/MapComponent';

const Contacts = () => (
  <Container>
    <MainContainer>
      <Box>
        <TypographyStyled variant="h3">
          Наши <span>контакты</span>
        </TypographyStyled>
        <Typography className="text">
          Комфорт и спокойствие пациента — это часть качественного лечения!{' '}
          <br />
          Предупредите администратора, что вы едете к нам на машине и мы
          предложим <br /> бесплатную подземную парковку при нашей клинике.
        </Typography>
        <BoxText>
          <Typography>Контактные номера: </Typography>
          <Typography className="green">
            +996(800) 000 000 ; +996(505) 000 000{' '}
          </Typography>
        </BoxText>
        <BoxText>
          <Typography>Наш адрес: </Typography>
          <Typography className="green">
            Кыргызстан, г. Бишкек, Медерова 44{' '}
          </Typography>
        </BoxText>
        <BoxText>
          <Typography>Режим работы клиники: </Typography>
          <Typography className="green">
            Понедельник - суббота с 08:00 до 18:00.{' '}
          </Typography>
        </BoxText>
        <BoxText>
          <Typography>Электронная почта : </Typography>
          <Typography className="green">healthchek.kg </Typography>
        </BoxText>
      </Box>
    </MainContainer>
    <BoxCart>
      <GoogleMap />
    </BoxCart>
  </Container>
);

export default Contacts;

const Container = styled(Box)(() => ({
  width: '100%',
  // minWidth: '1200px',
  // maxWidth: '1440px',
  margin: '20px auto',
}));

const MainContainer = styled(Box)(() => ({
  width: '1200px',
  minHeight: '500px',
  margin: '0 auto',
  position: 'relative',
  '& .text': {
    fontFamily: '"Poppins",sans-serif',
    fontSize: '18px',
    lineHeight: '1.5',
    fontWeight: '300',
  },
}));

const TypographyStyled = styled(Typography)(() => ({
  fontWeight: '500',
  margin: '10px 0',
  '& > span ': {
    color: 'green',
  },
}));

const BoxText = styled(Box)(() => ({
  margin: '10px 0',
  '& .green': {
    fontFamily: '"Poppins",sans-serif',
    fontSize: '18px',
    lineHeight: '1.5',
    fontWeight: '300',
    color: '#009345',
    cursor: 'pointer',
  },
}));

const BoxCart = styled(Box)(() => ({
  width: '100%',
  height: '500px',
  margin: '0 auto',
  backgroundColor: '#f5f5f5',
}));
