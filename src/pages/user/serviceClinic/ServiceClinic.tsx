import { Box, styled, Typography } from '@mui/material';
import index from '../../../utils/constants/index.json';
import Accordeon from '../../../components/UI/Accardeon';
import accardeonData from '../../../utils/constants/accardeonData.json';

const ServiceClinic = () => (
  <StyledContainer>
    <StyledContainerMain>
      <StyledTypography>
        Наши <StyledSpan>услуги</StyledSpan>
      </StyledTypography>
      <StyledBoxService>
        {index?.map(item => (
          <StyledServiceBlock key={item.id}>
            <ImgBox>
              <img className="img" src={item.img} alt="img" />
            </ImgBox>
            <TypographyStyled>{item.name}</TypographyStyled>
          </StyledServiceBlock>
        ))}
      </StyledBoxService>
      <StyledFAQService>
        <BoxTextStyled>
          <BoxText>
            <StyledTypographyFaq>Часто задаваемые вопросы</StyledTypographyFaq>
            <Typography className="Typography">
              Специалисты нашей клиники с удовольствием ответят на все ваши
              вопросы. Ниже представленны наиболее популярные.
            </Typography>
          </BoxText>
          <StyledBoxAccaredon>
            {accardeonData?.map(({ id, good, name, inside }) => (
              <Accordeon key={id} title={name}>
                <Typography className="good">{good}</Typography>
                <Ul>
                  {inside.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                  ))}
                </Ul>
              </Accordeon>
            ))}
          </StyledBoxAccaredon>
        </BoxTextStyled>
      </StyledFAQService>
    </StyledContainerMain>
  </StyledContainer>
);

export default ServiceClinic;

const StyledContainer = styled(Box)(() => ({
  width: '100%',
  maxWidth: '1440px',
  minWidth: '1200px',
  margin: '30px  auto',
}));

const BoxText = styled(Box)(() => ({
  margin: '10px 0 40px 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
}));

const StyledBoxAccaredon = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  fontFamily: '"Manrope", sans-serif',
  ' .good': {
    margin: '5px 0 20px 0',
    fontFamily: '"Manrope", sans-serif',
    fontSize: '15px',
  },
}));

const Ul = styled('ul')(() => ({
  '& > li': {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    paddingLeft: '10px',
    fontFamily: '"Manrope", sans-serif',
    fontSize: '14px',
  },
  '& li::before': {
    content: '"•"',
    color: 'green',
    fontSize: '30px',
    fontWeight: '900',
    marginRight: '10px',
  },
}));

const BoxTextStyled = styled(Box)(() => ({
  width: '100%',
  minHeight: '150px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  fontFamily: '"Manrope", sans-serif',
  '& > .Typography': {
    fontSize: '18px',
    fontWeight: '400',
    fontFamily: '"Manrope", sans-serif',
  },
}));

const StyledContainerMain = styled(Box)(() => ({
  width: '85.5%',
  minHeight: '500px',
  margin: '10px auto',
}));

const StyledTypography = styled(Typography)(() => ({
  fontSize: '36px',
  margin: '30px 0 40px 10px',
  fontFamily: '"Manrope", sans-serif',
}));

const StyledSpan = styled('span')(({ theme }) => ({
  color: theme.palette.primary.darkGreen,
}));

const StyledBoxService = styled(Box)(() => ({
  width: '900px',
  minHeight: '200px',
  display: 'flex',
  flexWrap: 'wrap',
  padding: '10px',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
}));

const StyledServiceBlock = styled(Box)(() => ({
  width: '49.5%',
  height: '90px',
  border: '1px solid #D9D9D9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '10px',
  transition: 'all 0.3s',
  borderRadius: '4px',
  '&:hover': {
    background: 'radial-gradient(circle, #FDFDFD 0%, #E4E7EE 100%)',
    cursor: 'pointer',
    transform: 'translateY(-3px)',
  },
}));

const ImgBox = styled(Box)(() => ({
  width: '100px',
  height: '100%',
  margin: '1px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& > .img': {
    width: '65px',
    height: '65px',
  },
}));

const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: '500',
  fontFamily: '"Manrope", sans-serif',
  color: theme.palette.primary.lightBlack,
}));

/!/;

const StyledFAQService = styled(Box)(() => ({
  width: '890px',
  minHeight: '300px',
  padding: '10px',
  marginTop: '50px ',
}));
const StyledTypographyFaq = styled(Typography)(() => ({
  fontSize: '36px',
  fontFamily: '"Manrope", sans-serif',
}));
