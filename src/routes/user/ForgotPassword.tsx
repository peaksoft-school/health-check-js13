import { Box, styled } from '@mui/material';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import CloseIcon from '../../assets/icons/CloseIcon.svg';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/customHooks';
import { forgotPasswordEmail } from '../../store/slices/auth/authThunk';
import { useSearchParams } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

type PropsTypes = {
  openForgotModal?: () => void;
  openChnageModal?: () => void;
};
type FormTypes = {
  email?: string;
  link?: string;
};

const ForgotPassword = ({ openForgotModal, openChnageModal }: PropsTypes) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormTypes>({ mode: 'onSubmit' });
  const [searchParams] = useSearchParams();
  console.log(searchParams);

  const query = searchParams.get('query');
  const page = searchParams.get('page');

  console.log(query, page);
  
  let link = 'http://localhost:5174/reset_password';

  const submitHandlerOn = (value: FormTypes) => {
    dispatch(
      forgotPasswordEmail({
        email: value.email,
        link,
        openChnageModal,
        openForgotModal,
      })
    );
    reset();
  };

  return (
    <StyledContainer>
      <div className="box" onClick={openForgotModal}>
        <CloseIcon />
      </div>
      <Block>
        <h1>ЗАБЫЛИ ПАРОЛЬ?</h1>
      </Block>
      <ContainerForm onSubmit={handleSubmit(submitHandlerOn)}>
        <div>
          <h2 className="h2">Вам будет отправлена ссылка для сброса пароля</h2>
          <Input
            size="small"
            {...register('email', {
              required: 'Заполните поле',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Введите действительный адрес электронной почты',
              },
            })}
            helperText={errors.email ? errors.email.message : ''}
            placeholder="Введите ваш Email"
            fullWidth
          />
        </div>
        <BoxStyled>
          <Button type="submit">ОТПРАВИТЬ</Button>
          <button type="button" onClick={openForgotModal}>
            ОТМЕНИТЬ
          </button>
        </BoxStyled>
      </ContainerForm>
    </StyledContainer>
  );
};

export default ForgotPassword;

const StyledContainer = styled(Box)(() => ({
  width: '490px',
  minHeight: '340px',
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  gap: '20px',
  alignItems: 'center',
  fontFamily: '"Manrope" , san-serif',
  padding: '30px 40px',
  backgroundColor: 'white',
  position: 'relative',
  borderRadius: '4px',
  '& .box': {
    position: 'absolute',
    top: '2px',
    right: '2px',
  },
}));

const Block = styled(Box)(() => ({
  '& > h1': {
    fontFamily: '"Manrope" , san-serif',
    fontWeight: '500',
    fontSize: '22px',
    textAlign: 'center',
  },
  margin: '30px 0 10px 0 ',
}));

const ContainerForm = styled('form')(() => ({
  width: '100%',
  minHeight: '100px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',

  '& .h2': {
    fontSize: '14px',
    color: '#959595',
    textAlign: 'start',
    marginBottom: '10px',
    fontWeight: '300',
  },
}));

const BoxStyled = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',

  '& > button': {
    padding: '10px 10px',
    backgroundColor: 'white',
    border: 'none',
    cursor: 'pointer',
    color: 'grey',
  },
}));
