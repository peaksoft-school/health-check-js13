import { Box, styled, Typography } from '@mui/material';
import Button from '../../components/UI/Button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { doctorGet } from '../../store/slices/doctorSlice/doctorThunk';
import { useAppDispatch, useAppSelector } from '../../hooks/customHooks';
import LoadingComponent from '../../utils/helpers/LoadingComponents';

const Doctor = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { doctors, isLoading } = useAppSelector(state => state.doctor);

  const goInnerPage = (id: number) => {
    navigate(`${id}/infoDoctor`);
  };

  const translateDepartment: Record<string, string> = {
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
    dispatch(doctorGet());
  }, [dispatch]);

  if (isLoading) return <LoadingComponent />;
  if (!doctors || doctors.length === 0)
    return <Typography>Нет врачей</Typography>;

  const groupedDoctors = doctors.reduce((acc, doctor) => {
    const { department } = doctor;
    if (!acc[department]) {
      acc[department] = [];
    }
    acc[department].push(doctor);
    return acc;
  }, {} as Record<string, any[]>);

  return (
    <Container>
      <StyledBox>
        <Typography className="title" variant="h3">
          Наши <span className="span">врачи</span>
        </Typography>
        <TypographyStyled>
          Попасть в команду медицинской клиники «Medical Clinic» <br /> могут
          только лучшие специалисты с многолетней практикой и доказанным опытом.
        </TypographyStyled>
        <TypographyStyled>
          Мы развиваемся, учимся и оттачиваем мастерство, <br /> стажируемся в
          ведущих университетах Европы, чтобы еще на шаг стать ближе к
          совершенству.
        </TypographyStyled>

        {Object.keys(groupedDoctors).map(department => (
          <StyledBlock key={department}>
            <Typography
              className="titlebig"
              id={translateDepartment[department]}>
              {translateDepartment[department]}
            </Typography>
            <Box className="inBlock">
              {groupedDoctors[department].map(({ id, option }: any) =>
                option?.map(
                  ({ image, lastName, firstName, specialization }: any) => (
                    <StyledInBlock key={lastName}>
                      <img className="img" src={image} alt={lastName} />
                      <Typography className="text">
                        {firstName} {lastName}
                      </Typography>
                      <Typography className="text">
                        Врач-{specialization}
                      </Typography>
                      <Button
                        variant="outlined"
                        onClick={() => goInnerPage(id)}>
                        Записаться на прием
                      </Button>
                    </StyledInBlock>
                  )
                )
              )}
            </Box>
          </StyledBlock>
        ))}
      </StyledBox>
    </Container>
  );
};

export default Doctor;

const Container = styled(Box)(() => ({
  width: '100%',
  minHeight: '400px',
  minWidth: '1200px',
  maxWidth: '1440px',
  margin: '0 auto',
}));

const StyledBox = styled(Box)(() => ({
  width: '1223px',
  padding: '10px 5px ',
  margin: '0 auto',

  '& .title': {
    fontWeight: '500',
    margin: '10px 0',
  },

  '& .span': {
    color: '#048741',
    fontWeight: '500',
  },

  '& .book': {
    textAlign: 'center',
    fontFamily: '"Poppins", sans-serif',
    fontWeight: '300',
    '& .booch': {
      fontWeight: '500',
    },

    '& .write': {
      color: '#048741',
      fontSize: '16px',
      cursor: 'pointer',
      marginLeft: '10px',
      textDecoration: 'underline',
    },
  },
}));

const StyledBlock = styled(Box)(() => ({
  width: '100%',
  minHeight: '475px',
  padding: '10px',
  display: 'flex',
  justifyContent: 'start',
  flexDirection: 'column',

  '& > .inBlock': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '25px',
  },

  '& .titlebig': {
    margin: '20px 0',
    fontSize: '32px',
  },
}));

const StyledInBlock = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  width: '350px',
  height: '500px',
  gap: '5px',
  '& .img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    aspectRatio: '4 / 3',
    borderRadius: '10px',
    backgroundColor: '#e8eaf0',
  },

  '& .text': {
    textAlign: 'center',
    fontSize: '16px',
  },
}));

const TypographyStyled = styled(Typography)(() => ({
  fontSize: '20px',
  margin: '15px 0',
}));
