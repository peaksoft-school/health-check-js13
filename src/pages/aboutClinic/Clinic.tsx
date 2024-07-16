import { FC } from 'react';
import { Box, styled } from '@mui/material';
import ImageDoctors from '../../assets/images/Doctors.png';
import Signed from '../../assets/icons/Signed.svg';
import Fon from '../../assets/images/Fon.png';

const Clinic: FC = () => (
  <ClinicClass>
    <Content>
      <ContentClass>
        <Box>
          <RouterContent>
            <MainTitle>Главная</MainTitle>
            <ClinicTitle>О клинике</ClinicTitle>
          </RouterContent>
          <HealthBox>
            <HealthSpan>Здоровье — самое</HealthSpan>
            <SpanGreen>ценное в жизни</SpanGreen>
          </HealthBox>
          <TextContent>
            <CardLorem>
              <Text>
                Добро пожаловать в нашу клинику! Мы предлагаем
                высококачественные медицинские услуги, ориентированные на ваше
                благополучие и заботу о вашем здоровье. Наша команда
                специалистов состоит из опытных врачей, медицинских сестер и
                персонала, готового обеспечить вас индивидуальным и
                профессиональным уходом. Мы стремимся создать доверительные
                отношения с каждым пациентом, предоставляя медицинское
                обслуживание на самом высоком уровне.
              </Text>
            </CardLorem>
            <CardLorems>
              <Text>
                Мы уделяем особое внимание вашему комфорту и безопасности,
                обеспечивая современное оборудование и следуя высоким стандартам
                качества. Наша цель - помочь вам достичь оптимального здоровья и
                благополучия. Мы готовы ответить на ваши вопросы, предоставить
                необходимую поддержку и обеспечить вас лучшими медицинскими
                решениями. (edited)
              </Text>
            </CardLorems>
          </TextContent>
          <SignedContent>
            <img src={Signed} alt="signed" />
          </SignedContent>
        </Box>
        <FonBox>
          <FonImg src={Fon} alt="fon" />
          <DoctorsCards>
            <ImgDoctors src={ImageDoctors} alt="imageDoctors" />
            <NameClinic>Руководитель клиники Medical Clinic</NameClinic>
            <Name>Аниса Михаилова</Name>
          </DoctorsCards>
        </FonBox>
      </ContentClass>
    </Content>
  </ClinicClass>
);

export default Clinic;

const ClinicClass = styled('div')(() => ({
  width: '100%',
  maxWidth: '1440px',
  minWidth: '1200px',
  margin: '0 auto',
}));

const Content = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const ContentClass = styled('div')(() => ({
  display: 'flex',
  gap: '200px',
  marginRight: '60px',
}));

const RouterContent = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '7px',
}));

const HealthBox = styled('div')(() => ({
  marginTop: '20px',
  display: 'flex',
  gap: '7px',
}));

const TextContent = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '40px',
}));

const CardLorem = styled('div')(() => ({
  width: '585px',
  height: '156px',
}));

const CardLorems = styled('div')(() => ({
  width: '585px',
  height: '156px',
  marginTop: '30px',
}));

const SignedContent = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '25px',
  marginLeft: '440px',
}));

const FonBox = styled('div')(() => ({
  position: 'relative',
}));

const DoctorsCards = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: '134px',
  position: 'relative',
  zIndex: 2,
}));

const ImgDoctors = styled('img')(() => ({
  position: 'relative',
  zIndex: 2,
  width: '359px',
  height: '438px',
}));

const NameClinic = styled('p')(() => ({
  paddingTop: '20px',
  fontSize: '18px',
  color: '#048741',
}));

const Name = styled('p')(() => ({
  marginTop: '4px',
  fontSize: '22px',
}));

const MainTitle = styled('p')(() => ({
  fontSize: '14px',
  cursor: 'pointer',
}));

const ClinicTitle = styled('p')(() => ({
  fontSize: '14px',
  color: '#048741',
}));

const HealthSpan = styled('span')(() => ({
  fontSize: '36px',
  fontFamily: 'Arial sans-serif',
  fontWeight: 'bold',
}));

const SpanGreen = styled('span')(() => ({
  fontSize: '36px',
  color: '#048741',
  fontFamily: 'Arial sans-serif',
  fontWeight: 'bold',
}));

const Text = styled('p')(() => ({
  color: '#4D4E51',
}));

const FonImg = styled('img')(() => ({
  position: 'absolute',
  width: '551px',
  height: '385.84px',
  top: '160px',
  left: '-45px',
  zIndex: 1,
}));
