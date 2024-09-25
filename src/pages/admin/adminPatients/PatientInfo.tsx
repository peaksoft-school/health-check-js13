import { Box, styled, Typography } from '@mui/material';
import { useAppSelector } from '../../../hooks/customHooks';
import Button from '../../../components/UI/Button';
import XXX from '../../../assets/icons/XXX.svg';

const PatientInfo = () => {
  const { getUser } = useAppSelector(state => state.patients);

  if (!getUser) return <p>No user info available</p>;

  return (
    <>
      <HeaderContainer>
        <Typography variant="h4">
          {getUser.firstName} {getUser.lastName}
        </Typography>
        <Button variant="contained" type="button" startIcon={<XXX />}>
          ДОБАВИТЬ РЕЗУЛЬТАТЫ
        </Button>
      </HeaderContainer>

      <MainContainer>
        <InfoBlock>
          <Typography variant="h5">
            {getUser.firstName} <span>{getUser.lastName}</span>
          </Typography>

          <StyledRow>
            Имя: <StyledText>{getUser.firstName}</StyledText>
          </StyledRow>
          <StyledRow>
            Фамилия: <StyledText>{getUser.lastName}</StyledText>
          </StyledRow>
          <StyledRow>
            Email: <StyledText>{getUser.email}</StyledText>
          </StyledRow>
          <StyledRow>
            Номер телефона: <StyledText>{getUser.phoneNumber}</StyledText>
          </StyledRow>
        </InfoBlock>
      </MainContainer>
    </>
  );
};

export default PatientInfo;

const HeaderContainer = styled(Box)(() => ({
  width: '100%',
  minWidth: '1200px',
  maxWidth: '1440px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px 0',
  margin: '20px auto',
}));

const MainContainer = styled(Box)(() => ({
  width: '100%',
  maxWidth: '1440px',
  minHeight: '100vh',
  backgroundColor: '#FFFFFF',
  margin: '0 auto',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
}));

const InfoBlock = styled(Box)(() => ({
  width: '100%',
  maxWidth: '400px',
  border: '1px solid #E0E0E0',
  borderRadius: '8px',
  padding: '20px',
  backgroundColor: '#F9F9F9',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
}));

const StyledRow = styled(Typography)(() => ({
  fontSize: '18px',
  color: '#4A4A4A',
  marginBottom: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '8px 12px',
  borderBottom: '1px solid #E0E0E0',
}));

const StyledText = styled('span')(() => ({
  fontWeight: 500,
  color: '#222',
}));
