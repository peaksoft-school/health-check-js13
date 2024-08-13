import { Box, styled, Typography } from '@mui/material';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import Gogle from '../../assets/icons/gogle.svg';
import CloseIcon from '@mui/icons-material/Close';
type TypesProps = {
  onClose?: () => void;
  handleToggles?: () => void;
};
const SignIn = ({ onClose, handleToggles }: TypesProps) => {
  const openis = () => {
    onClose?.();
    handleToggles?.();
  };
  return (
    <Container>
      <BoxStyled>
        <CloseIcon onClick={onClose} />
      </BoxStyled>
      <h2>ВОЙТИ</h2>
      <ContainerForm>
        <Input size="small" />
        <Input type="password" size="small" />
        <Button>Войти</Button>
      </ContainerForm>
      <BlockTwo>
        <TypographyStyle>Забыли пароль?</TypographyStyle>
        <BoxHr>
          <One>
            <hr />
          </One>
          <Two>или</Two>
          <Three>
            <hr />
          </Three>
        </BoxHr>
        <BoxGoogle>
          <Gogle />
          Зарегистрироваться с Google
        </BoxGoogle>
        <TypographyStyled>
          Нет аккаунта? <span onClick={openis}>Зарегистрироваться</span>
        </TypographyStyled>
      </BlockTwo>
    </Container>
  );
};

export default SignIn;

const Container = styled(Box)(() => ({
  width: '550px',
  minHeight: '450px',
  borderRadius: '4px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: '"Manrope",san-serif',
  padding: '30px',
  '& h2': {
    margin: '20px 0 10px 0',
    textAlign: 'center',
    fontWeight: '400',
  },
}));

const ContainerForm = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
}));

const TypographyStyle = styled(Typography)(() => ({
  textAlign: 'center',
  marginTop: '30px',
  cursor: 'pointer',
  color: '#346EFB',
  transition: 'all 0.3s',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const BlockTwo = styled(Box)(() => ({
  // border: '1px solid black',
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
}));

const BoxHr = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  margin: '20px 0',
  '& hr': {
    backgroundColor: '#F3F1F1',
    width: '100%',
    height: '1px',
    border: 'none',
  },
}));

const One = styled(Box)(() => ({
  width: '39.5%',
}));

const Two = styled(Box)(() => ({
  width: '20%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: '"Manrope", san-serif',
}));

const Three = styled(Box)(() => ({
  width: '39.5%',
}));

const BoxGoogle = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  cursor: 'pointer',
  fontFamily: '"Manrope", san-serif',
  fontWeight: '600',
  backgroundColor: '#F5F5F5',
  padding: '13px 10px',
  borderRadius: '8px',
  '& > img': {
    width: '20px',
    height: '20px',
  },
}));

const TypographyStyled = styled(Typography)(() => ({
  textAlign: 'center',
  marginBottom: '30px',
  marginTop: '10px',
  '& > span': {
    color: '#346EFB',
    cursor: 'pointer',
    fontWeight: '300',
    marginLeft: '10px',
  },
}));

const BoxStyled = styled(Box)(() => ({
  position: 'absolute',
  top: '6px',
  right: '6px',
  cursor: 'pointer',
}));
