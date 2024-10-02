import { Box, styled, Typography } from '@mui/material';
import Doctors from '../../assets/images/Doctors.png';
import Button from '../../components/UI/Button';
import ArrowIcons from '../../assets/icons/ArrowIcons.svg';
import FeedbackSlider from '../../components/landingPage/FeedbackSlider';
import { useNavigate } from 'react-router-dom';
const InnerDoctorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Block>
        <Main>
          <Box>
            <Typography
              fontFamily={'Manrope,sans-serif'}
              fontSize={36}
              fontWeight={600}
              margin={'15px 0'}>
              Гаталуский Артур
            </Typography>
            <Typography
              fontFamily={'Manrope,sans-serif'}
              margin={'10px 0'}
              fontWeight={400}>
              Попасть в команду медицинской клиники «Medical Clinic» могут{' '}
              <br /> только лучшие специалисты с многолетней практикой
              и доказанным опытом.
            </Typography>
            <Typography fontFamily={'Manrope,sans-serif'} fontWeight={400}>
              Мы развиваемся, учимся и оттачиваем мастерство, стажируемся в
              ведущих университетах <br /> Европы, чтобы еще на шаг стать ближе
              к совершенству.
            </Typography>
          </Box>
          <DoctorCard>
            <ImageBlock>
              <Img src={Doctors} />
            </ImageBlock>
            <TitleBlock>
              <Typography
                fontFamily={'Manrope,sans-serif'}
                color={'#009344'}
                fontSize={24}
                fontWeight={500}>
                Гаталуский Артур
              </Typography>
              <div>
                <Typography fontSize={18} fontWeight={300}>
                  Отделение:{' '}
                  <span style={{ fontSize: '18px', fontWeight: '500' }}>
                    Хирургия
                  </span>
                </Typography>
                <Typography fontSize={18} fontWeight={300}>
                  Должность:{' '}
                  <span style={{ fontSize: '18px', fontWeight: '500' }}>
                    Главный врач
                  </span>
                </Typography>
              </div>
              <Button>Записаться на прием</Button>
            </TitleBlock>
          </DoctorCard>
          <DoctorCards>
            <Typography fontSize={17} fontWeight={600} margin={'10px 0'}>
              Преимущественно эстетическая хирургия лица:
            </Typography>
            <ul>
              <li>
                эндоскопический лифтинг лица ( лоб, височные зоны, брови,
                верхние 2/3 лица )
              </li>
              <li>
                SMAS-лифтинг лица с перемещением комков Биша, боковой или
                медиальной платизмопластикой
              </li>
              <li>
                блефаропластика ( трансконъюнктивальная; расширенная с
                перераспределением тканей ,ревизионная )
              </li>
              <li>повторные и ревизионные лифтинги лица</li>
              <li>кантопексия</li>
              <li>миопексия</li>
              <li>липофилинг</li>
              <li>отопластика</li>
              <li>хейлопластика</li>
            </ul>
            <Typography fontSize={17} fontWeight={600} margin={'20px 0 0 0 '}>
              Специализация доктора:
            </Typography>
            <Text>
              Сложное перелечивание корневых каналов зубов с применением
              операционного микроскопа. Художественная реставрация зубов с
              использованием самых современных пломбировочных материалов.
              Восстановление разрушенных зубов керамическими вкладками,
              коронками.
            </Text>
            <Typography fontSize={17} fontWeight={600} margin={'20px 0 0 0 '}>
              Основное образование:
            </Typography>
            <Text>1988 г.г. Минский государственный медицинский институт</Text>
            <Text>1988-1989 г.г. интернатура по хирургии</Text>
            <Typography fontSize={17} fontWeight={600} margin={'20px 0 0 0 '}>
              Участие в конференциях:
            </Typography>
            <Text>
              Активно принимаю участие в конгрессах, форумах. Например,
              последние годы:
            </Text>
            <Text>
              2016- « Сочетание PRP и лазерных технологий. Инновационные методы
              липосакции и фэтграфтинга», международная конференция
            </Text>
            <Text>
              2016-«Инновационные методы отложения лица» . Курс Брайана
              Мендельсона
            </Text>
            <Text>
              2017- 2-й Международный Интенсивный Обучающий Курс по эстетической
              пластической хирургии , проф. Оскар М. Рамирез
            </Text>
            <Text>
              2017- «5-й курс «живой» хирургии. Продвинутая эстетическая
              блефаропластика, хирургия средних зон и контуров лица»
            </Text>
            <Text>
              2017- «Композитный SMAS-лифтинг, подтяжка лица и шеи. Ответы на
              все вопросы.» Проф. Сэм Хамра
            </Text>
            <Text>
              2018 г.- докладчик на 1- м национальном конгрессе « Пластическая
              хирургия и косметология» доклад «Параорбитальная зона. Как
              добиться успеха?»
            </Text>
            <Text>
              2019 г. октябрь - участник 1- го конгресса Европейского общества
              пластических эстетических хирургов , г. Брюгге, Бельгия.
            </Text>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                margin: '40px 0',
                cursor: 'pointer',
              }}
              onClick={() => navigate(-1)}>
              <ArrowIcons />
              <TextStyled>Список сотрудников</TextStyled>
            </div>
          </DoctorCards>
        </Main>
      </Block>
      <FeedbackSlider />
    </>
  );
};

export default InnerDoctorPage;

const Block = styled(Box)(() => ({
  width: '100%',
  maxWidth: '1440px',
  minWidth: '1200px',
  minHeight: '500px',
  margin: '50px auto',
  fontFamily: 'Manrope,sans-serif',
}));

const Main = styled('main')(() => ({
  width: '80%',
  minHeight: '250px',
  fontFamily: 'Manrope,sans-serif',
}));

const DoctorCard = styled(Box)(() => ({
  width: '80%',
  minHeight: '400px',
  margin: '50px 0',
  display: 'flex',
  alignItems: 'center',
  gap: '50px',
  fontFamily: 'Manrope,sans-serif',
}));

const DoctorCards = styled(Box)(() => ({
  width: '80%',
  minHeight: '400px',
  margin: '10px 0',
  fontFamily: 'Manrope,sans-serif',
  '& ul': {
    marginLeft: '20px',
    fontFamily: 'Manrope,sans-serif',
    '& li': {
      marginTop: '10px',
    },
  },
}));

const TitleBlock = styled(Box)(() => ({
  width: '300px',
  height: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '20px',
  fontFamily: 'Manrope,sans-serif',
}));

const ImageBlock = styled(Box)(() => ({
  width: '350px',
  height: '400px',
  fontFamily: 'Manrope,sans-serif',
}));

const Img = styled('img')(() => ({
  width: '100%',
  height: '100%',
}));

const Text = styled('p')(() => ({
  margin: '0 0 10px 0',
  fontFamily: 'Manrope,sans-serif',
}));

const TextStyled = styled(Typography)(() => ({
  color: '#048741',
  fontFamily: 'Manrope,sans-serif',
}));
