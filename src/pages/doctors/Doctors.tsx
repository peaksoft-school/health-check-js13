import { Box, styled, Typography } from '@mui/material';
import Button from '../../components/UI/Button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { doctorGet } from '../../store/slices/doctorSlice/doctorThunk';
import { useAppDispatch, useAppSelector } from '../../hooks/customHooks';

const Doctor = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { doctors } = useAppSelector(state => state.doctor);
  const goInnerPage = (id: number) => {
    navigate(`${id}/infoDoctor`);
  };
  console.log(doctors);

  useEffect(() => {
    dispatch(doctorGet());
  }, []);
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

  return (
    <Container>
      <StyledBox>
        <Typography className="title" variant="h3">
          Наши <span className="span">врачи</span>
        </Typography>
        <TypographyStyled>
          Попасть в команду медицинской клиники «Medical Clinic» <br /> могут
          только лучшие специалисты с многолетней практикой и доказанным опытом.
        </TypographyStyled>
        <TypographyStyled>
          Мы развиваемся, учимся и оттачиваем мастерство, <br /> стажируемся в
          ведущих университетах Европы, чтобы еще на шаг стать ближе к
          совершенству.
        </TypographyStyled>
        {doctors.map(({ id, department, option }) => (
          <StyledBlock key={id}>
            <Typography className="titlebig">
              {translateDepartment[department]}
            </Typography>
            <Box className="inBlock">
              {option?.map((item: any) => (
                <StyledInBlock key={id}>
                  <img
                    className="imgOne"
                    src={item.image}
                    alt={item.lastName}
                  />
                  <Typography className="text">
                    {item.firstName} {item.lastName}
                  </Typography>
                  <Typography className="text">
                    Врач-{item.specialization}
                  </Typography>
                  <Button variant="outlined" onClick={() => goInnerPage(id)}>
                    Записаться на прием
                  </Button>
                </StyledInBlock>
              ))}
            </Box>
          </StyledBlock>
        ))}
        <Typography className="book">
          В нашей клинике работают:{' '}
          <span className="booch">более 30 специалистов</span>
          <span className="write">Показать больше</span>
        </Typography>
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
  width: '320px',
  height: '475px',
  border: '1px soli balck',

  '& > img': {
    width: '100%',
    height: '70%',
    objectFit: 'cover',
    borderRadius: '6px',
    marginBottom: '10px',
    cursor: 'pointer',
  },

  '& .text': {
    margin: '5px 0',
  },
}));

const TypographyStyled = styled(Box)(() => ({
  margin: '20px 0 10px 0',
  fontFamily: '"Poppins", sans-serif',
  color: '#4D4E51',
  fontWeight: '400',
  fontStyle: 'normal',
}));
