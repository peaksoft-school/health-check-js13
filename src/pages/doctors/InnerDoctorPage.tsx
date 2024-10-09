import { Box, styled, Typography } from '@mui/material';
import Button from '../../components/UI/Button';
import ArrowIcons from '../../assets/icons/ArrowIcons.svg';
import FeedbackSlider from '../../components/landingPage/FeedbackSlider';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/customHooks';
import { useEffect, useState } from 'react';
import { doctorGetId } from '../../store/slices/doctorSlice/doctorThunk';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import SidebarMenu from '../user/modalWindows/SidebarMenu';

const InnerDoctorPage = () => {
  const [open, setOpen] = useState(false);
  const [locationKey, setLocationKey] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const openSideBare = () => {
    setOpen(prev => !prev);
  };

  const { doctorsOne } = useAppSelector(state => state.doctor);

  const translateDepartment = {
    CARDIOLOGY: 'Кардиология',
    DERMATOLOGY: 'Дерматология',
    NEUROLOGY: 'Неврология',
    ORTHOPEDICS: 'Ортопедия',
    PEDIATRICS: 'Педиатрия',
    PSYCHIATRY: 'Психиатрия',
    UROLOGY: 'Урология',
    GYNECOLOGY: 'Гинекология',
    GASTROENTEROLOGY: 'Гастроэнтерология',
    ONCOLOGY: 'Онкология',
  };

  useEffect(() => {
    dispatch(doctorGetId(id));
  }, [id, dispatch]);

  const modules = {
    toolbar: [],
  };
  const description = doctorsOne?.description || '';

  const location = useLocation();

  // Обновление ключа при изменении маршрута
  useEffect(() => {
    setLocationKey(location.key);
    console.log('Маршрут изменен:', location.pathname);
  }, [location]);

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
              {doctorsOne.firstName} {doctorsOne.lastName}
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
              <Img src={doctorsOne?.image} />
            </ImageBlock>
            <TitleBlock>
              <Typography
                fontFamily={'Manrope,sans-serif'}
                color={'#009344'}
                fontSize={24}
                fontWeight={500}>
                {doctorsOne.firstName} {doctorsOne.lastName}
              </Typography>
              <div>
                <Typography fontSize={18} fontWeight={300}>
                  Отделение:{' '}
                  <span style={{ fontSize: '18px', fontWeight: '500' }}>
                    {translateDepartment[doctorsOne.departmentName]}
                  </span>
                </Typography>
                <Typography fontSize={18} fontWeight={300}>
                  Должность:{' '}
                  <span style={{ fontSize: '18px', fontWeight: '500' }}>
                    {doctorsOne.position}
                  </span>
                </Typography>
              </div>
              <Button onClick={openSideBare}>Записаться на прием</Button>
            </TitleBlock>
          </DoctorCard>
          <DoctorCards>
            <div>
              <StyledQuill
                modules={modules}
                theme="snow"
                value={description}
                readOnly={true}
              />
            </div>
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
      <SidebarMenu open={open} toggleDrawer={openSideBare} />
    </>
  );
};

export default InnerDoctorPage;

const Block = styled(Box)(() => ({
  width: '100%',
  maxWidth: '1200px',
  minWidth: '1200px',
  minHeight: '500px',
  margin: '50px auto',
  fontFamily: 'Manrope,sans-serif',
}));

const StyledQuill = styled(ReactQuill)(() => ({
  '& .ql-container': {
    minHeight: '150px',
    borderRadius: '8px',
    border: 'none',
  },
  '& .ql-editor': {
    fontFamily: 'Manrope, sans-serif',
    fontSize: '16px',
    color: '#333',
    padding: '10px',
    border: 'none',
    boxShadow: 'none',
  },
  '& .ql-toolbar': {
    display: 'none',
  },
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
  minHeight: '100px',
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

const TextStyled = styled(Typography)(() => ({
  color: '#048741',
  fontFamily: 'Manrope,sans-serif',
}));
