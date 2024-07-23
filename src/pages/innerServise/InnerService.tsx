import { Box, styled, Typography } from '@mui/material';
import Header from '../../layout/user/Header';
import {
  Dermatology,
  DermatologyLi,
  DermatologyText,
  DermatologyTextLi,
} from '../../utils/constants/Dermatology';
import doctors from "../../utils/constants/doctors.json"
import Button from '../../components/UI/Button';

const InnerService = () => {
  return (
    <StyledContainer>
      <Header />
      <StyledBox>
        <StyledContent>
          <Box></Box>
          <Box>
            {Dermatology.map(item => (
              <StyledMapContainer key={item.id}>
                <StyledDoctor>{item.doctor}</StyledDoctor>
                <StyledName>{item.name}</StyledName>
                <StyledTitle>{item.title}</StyledTitle>
                <StyledSubTitle>{item.subTitle}</StyledSubTitle>
              </StyledMapContainer>
            ))}
            {DermatologyLi.map(item => (
              <ul key={item.id}>
                <StyledLi>{item.titleLiText}</StyledLi>
              </ul>
            ))}
            {DermatologyText.map(item => (
              <>
                <StyledNameText>{item.titleText}</StyledNameText>
                <StyledTexttext>{item.textText}</StyledTexttext>
              </>
            ))}
            {DermatologyTextLi.map(item => (
              <>
                <StyledList>{item.title}</StyledList>
              </>
            ))}
          </Box>
          <StyledText>
            Цены на прием <span>врача-дерматолога</span>
          </StyledText>
          <StyledContainerDoctors>
            {doctors.slice(0, 9).map(({ id, img, name, doctor }) => (
              <Box key={id}>
                <StyledImg src={img} alt={name} />
                <h3>{name}</h3>
                <Typography>{doctor}</Typography>
                <br />
                <Button variant='outlined'>Записаться на прием</Button>
              </Box>
            ))}
          </StyledContainerDoctors>
        </StyledContent>
      </StyledBox>
    </StyledContainer>
  );
};

export default InnerService;

const StyledBox = styled(Box)(() => ({
  width: '100%',
  maxWidth: '1200px',
}));

const StyledContent = styled(Box)(() => ({
  width: '100%',
  minWidth: '1100px',
  fontFamily: 'Manrope, sans-serif',
}));

const StyledContainerDoctors = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '30px',
  margin: '0 auto',
  fontFamily: 'Manrope, sans-serif',
}));

const StyledContainer = styled(Box)(() => ({
  maxWidth: '90rem',
  width: '100%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  fontFamily: 'Manrope, sans-serif',
}));

const StyledText = styled('h1')(() => ({
  fontSize: '2.25rem',
  fontFamily: 'Manrope, sans-serif',
  span: {
    color: 'green',
    fontWeight: 'bold',
  },
}));

const StyledDoctor = styled('h1')(() => ({
  fontSize: '2.25rem',
  fontFamily: 'Manrope, sans-serif',
  color: 'green',
  fontWeight: 'bold',
}));

const StyledName = styled(Typography)(() => ({
  width: '48rem',

  fontFamily: 'Manrope, sans-serif',
  marginTop: '30px',
}));

const StyledMapContainer = styled(Typography)(() => ({
  width: '48rem',
}));

const StyledImg = styled("img")(() => ({
  width: '19.9rem',
}));

const StyledTitle = styled(Typography)(() => ({
  width: '48rem',
  fontSize: '24px',
  fontWeight: '600',
  fontFamily: 'Manrope, sans-serif',
  marginTop: '30px',
}));

const StyledNameText = styled(Typography)(() => ({
  width: '40rem',
  fontSize: '24px',
  fontWeight: '600',
  fontFamily: 'Manrope, sans-serif',
  marginTop: '30px',
}));

const StyledTexttext = styled(Typography)(() => ({
  width: '485px',
  fontSize: '16px',
  fontFamily: 'Manrope, sans-serif',
  marginTop: '30px',
}));

const StyledSubTitle = styled(Typography)(() => ({
  width: '48rem',
  fontSize: '1rem',
  fontWeight: '300',
  fontFamily: 'Manrope, sans-serif',
}));

const StyledLi = styled('li')(() => ({
  marginLeft: '18px',
  fontFamily: 'Manrope, sans-serif',

  '&::marker': {
    marginLeft: '5px',
    color: 'green',
  },
}));

const StyledList = styled('li')(() => ({
  // marginLeft: '25px',
  fontFamily: 'Manrope, sans-serif',

  '&::marker': {
    marginLeft: '5px',
    color: 'green',
  },
}));
