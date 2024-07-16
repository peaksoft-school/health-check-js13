import { Box, styled } from '@mui/material';
import Input from '../UI/Input';
import Button from '../UI/Button';
import MaleFemaleIcon from '../../assets/icons/MaleFemaleIcon.svg';
import CallProgressIcon from '../../assets/icons/CallProgressIcon.svg';
import { SubmitHandler, useForm } from 'react-hook-form';
import GirlDoctor from '../../assets/images/GirlDoctor.png';

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

  const onSubmit: SubmitHandler<IAplicationProps> = data => updateFunc(data);

  return (
    <Container>
      <div className="boxs">
        <AplicationBox>
          <p className="h1text">Оставьте заявку</p>

          <p className="h3text">
            Оставьте свой номер и наши специалисты свяжутся с Вами
            <br />
            в ближайшее время
          </p>

          <BoxForm component={'form'} onSubmit={handleSubmit(onSubmit)}>
            <div className="inputBox">
              <div className="inBox">
                <Input
                  {...register('name', {
                    required: 'Обязательное поле',
                  })}
                  fullWidth
                  size="small"
                  icon={MaleFemaleIcon}
                  label="Как к Вам обратиться?"
                  placeholder="Введите имя"
                  error={!!errors.name}
                  helperText={errors.name?.message ? errors.name.message : ''}
                />
              </div>

              <div className="inBox">
                <Input
                  {...register('number', {
                    required: 'Ведите ваш действительный номер',
                    pattern: {
                      value: /^\+996\d{9}$/,
                      message: 'Введите корректный номер телефона',
                    },
                  })}
                  fullWidth
                  size="small"
                  icon={CallProgressIcon}
                  label="Номер мобильного телефона"
                  placeholder="+996 (___) __-__-__"
                  error={!!errors.number}
                  helperText={
                    errors.number?.message ? errors.number.message : ''
                  }
                />
              </div>
            </div>

            <div className="buttonBox">
              <Button
                className="myButton"
                size="large"
                type="submit"
                variant="contained">
                ОТПРАВИТЬ ЗАЯВКУ
              </Button>
            </div>
          </BoxForm>
        </AplicationBox>

        <BoxMui>
          <img className="imgGirl" src={GirlDoctor} alt="GirlDoctor" />
        </BoxMui>
      </div>
    </Container>
  );
};

export default Aplication;

const Container = styled(Box)(() => ({
  width: '100%',
  minHeight: '500px',
  margin: '20px auto',
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'center',
  fontFamily: 'Manrope, sans-serif',

  '.boxs': {
    width: '100%',
    maxWidth: '1440px',
    minWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'center',
  },
}));

const AplicationBox = styled(Box)(() => ({
  width: '42em',
  height: '28.75em',
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
    fontSize: '17px',
    fontWeight: '200',
  },
}));

const BoxMui = styled(Box)(() => ({
  width: '36.5rem',
  height: '33.1rem',
  position: 'relative',

  '.imgGirl': {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: '-10px',
  },
}));

const BoxForm = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px',

  '.inputBox': {
    margin: '10px',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    width: '90%',

    '.inBox': {
      width: '70%',
    },

    '.inputsCor': {
      backgroundColor: '#fff',
    },
  },

  '.buttonBox': {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',

    '.myButton': {
      borderRadius: '50px',
      backgroundColor: theme.palette.primary.linearGradient,
      color: 'white',

      '&:after': {
        content: 'url(src/assets/icons/arrow.svg)',
        marginTop: '8px',
        marginLeft: '20px',
        marginRight: '-20px',
      },
    },
  },
}));
