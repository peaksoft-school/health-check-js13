import { Box, Button, styled } from '@mui/material';
import Input from '../UI/Input';
import MaleFemaleIcon from '../../assets/icons/MaleFemaleIcon.svg';
import CallProgressIcon from '../../assets/icons/CallProgressIcon.svg';
import { SubmitHandler, useForm } from 'react-hook-form';
interface IAplicationProps {
  name?: string;
  number?: number;
}
type AplicationProps = {
  updateFunc: (data: IAplicationProps) => void;
};

const Aplication = ({ updateFunc }: AplicationProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAplicationProps>({ mode: 'onSubmit' });

  const onSubmit: SubmitHandler<IAplicationProps> = data => {
    console.log('Data:', data);
    updateFunc(data);
  };
  return (
    <Container>
      <AplicationBox>
        <p className="h1text">Оставьте заявку</p>
        <p className="h3text">
          Оставьте свой номер и наши специалисты свяжутся с Вами в ближайшее
          время
        </p>
        <BoxForm component={'form'}>
          <div className="inputBox">
            <Input
              fullWidth
              size="small"
              icon={MaleFemaleIcon}
              label="Как к Вам обратиться?"
              placeholder="Введите имя"
            />
            <Input
              fullWidth
              size="small"
              icon={CallProgressIcon}
              label="Номер мобильного телефона"
              placeholder="+996 (___) __-__-__"
            />
          </div>
          <div className="buttonBox">
            <MuiButton size="large" variant="contained">
              ОТПРАВИТЬ ЗАЯВКУ
            </MuiButton>
          </div>
        </BoxForm>
      </AplicationBox>
      <BoxMui></BoxMui>
    </Container>
  );
};

export default Aplication;

const Container = styled(Box)(() => ({
  width: '100%',
  minWidth: '75rem',
  maxWidth: '1440px',
  border: '1px solid black',
  minHeight: '500px',
  margin: '20px auto',
  display: 'flex',
  alignItems: 'center',
}));
const AplicationBox = styled(Box)(() => ({
  width: '42em',
  height: '28.75em',
  border: '1px solid black',
  backgroundColor: '#DBEBFF',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  gap: '30px',
  '.h1text': {
    textAlign: 'center',
    fontSize: '33px',
    fontWeight: '400',
  },
  '.h3text': {
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: '200',
  },
}));
const BoxMui = styled(Box)(() => ({
  width: '36.5rem',
  height: '33.1rem',
  border: '1px solid black',
}));

const BoxForm = styled(Box)(() => ({
  border: '1px solid black',
  display: 'flex',
  flexDirection: 'column',
  padding: '5px',
  '.inputBox': {
    margin: '10px',
    display: 'flex',
    alignItems: 'stretch',
    gap: '20px',
    width: '100%',
    border: '1px solid black',

  },
  '.buttonBox': {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
}));
const MuiButton = styled(Button)(() => ({
  '&.MuiButtonBase-root': {
    borderRadius: '50px',
    backgroundColor: '#0CBB6B',
    color: 'white',
    position: 'relative',
    height: '50px',
    fontSize: '12px',
    width:"250px",
    '&:after': {
      content: 'url(src/assets/icons/arrow.svg)',
      marginTop: '8px',
      marginLeft: '10px',
      marginRight: '-13px',
    },
  },
}));
