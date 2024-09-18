import { useEffect, useRef, useState } from 'react';
import { Box, styled, Typography } from '@mui/material';
import 'react-quill/dist/quill.snow.css';
import { useForm } from 'react-hook-form';
import Input from '../../../components/UI/Input';
import MyEditor from '../../../utils/helpers/Quil';
import Button from '../../../components/UI/Button';
import { useAppDispatch, useAppSelector } from '../../../hooks/customHooks';
import { getDoctorById } from '../../../store/slices/adminSpecialist/adminSpecialistThunk';
import Select from '../../../components/UI/Select';
import { department } from '../../../utils/helpers';
import LoadingComponent from '../../../utils/helpers/LoadingComponents';
import { useNavigate, useParams } from 'react-router-dom';
import { TFormTypes } from './AddSpecialist';

export type GetDoctorTypes = {
  id: number;
  isActive: boolean;
  image: string;
  firstName: string;
  lastName: string;
  position: string;
  department: string;
  scheduleUntil: string;
};

const SpecInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<GetDoctorTypes>({
    defaultValues: {
      image: '',
      firstName: '',
      lastName: '',
      department: '',
      position: '',
      scheduleUntil: '',
    },
  });

  const dispatch = useAppDispatch();
  const { file, isLoading, infoSpec } = useAppSelector(state => state.spec);
  const [quillValue, setQuillValue] = useState(infoSpec?.description || '');
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(getDoctorById(Number(id)));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (infoSpec) {
      reset(infoSpec);
      setQuillValue(infoSpec?.description || '');
    }
  }, [infoSpec, reset]);

  const handlerChangeSelectValue = (event: any) => {
    setValue('department', event.target.value);
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      console.log('handleImageClick called');
      fileInputRef.current.click();
    }
  };

  const handlerQuillChange = (content: string) => {
    setValue('description', content);
  };

  return (
    <>
      {isLoading && <LoadingComponent />}
      <Container>
        <HeaderContainer>
          <Typography variant="h4">{infoSpec.firstName}</Typography>
        </HeaderContainer>
        <Main>
          <MainBlock>
            <BlockOne>
              <MiniBlock>
                {file ? (
                  <>
                    <span onClick={handleImageClick}>
                      <img
                        className="imga"
                        src={file}
                        alt="file"
                        style={{ cursor: 'pointer' }}
                      />
                    </span>
                  </>
                ) : (
                  <div
                    className="file-upload-container"
                    onClick={handleImageClick}>
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="file-upload-input"
                      style={{ display: 'none' }}
                    />
                    <Typography
                      sx={{
                        fontSize: '14px',
                        color: '#346EFB',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                      }}>
                      Загрузить фото
                    </Typography>
                  </div>
                )}
              </MiniBlock>
            </BlockOne>
            <BlockTwo>
              <Typography variant="h5">Личные данные</Typography>
              <BlockSection>
                <div>
                  <Input
                    {...register('firstName', { required: true })}
                    size="small"
                    className="inputs one"
                    label="Имя"
                    placeholder="Напишите имя"
                  />
                  <Input
                    {...register('lastName', { required: true })}
                    size="small"
                    className="inputs"
                    label="Фамилия"
                    placeholder="Напишите фамилию"
                  />
                </div>
                <div
                  style={{
                    marginTop: '2px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                  }}>
                  <label style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Отделение
                    <Select
                      placeholder="Выберите отделение"
                      fullWidth
                      onChange={handlerChangeSelectValue}
                      options={department}
                      value={
                        department.find(
                          dept => dept.value === infoSpec?.departmentName
                        )?.value || ''
                      }
                      style={{ width: '545px', height: '40px' }}
                    />
                  </label>
                  <Input
                    {...register('position', { required: true })}
                    size="small"
                    className="inputs"
                    label="Должность"
                    placeholder="Напишите должность"
                  />
                </div>
              </BlockSection>
              <MyEditor values={quillValue} setValue={handlerQuillChange} />
              <BlockThree>
                <div
                  style={{
                    width: '600px',
                    display: 'flex',
                    gap: '10px',
                    float: 'right',
                  }}>
                  <Button
                    fullWidth
                    type="button"
                    variant="text"
                    style={{ height: '40px' }}>
                    Добавить
                  </Button>
                  <Button fullWidth type="submit" style={{ height: '40px' }}>
                    Добавить
                  </Button>
                </div>
              </BlockThree>
            </BlockTwo>
          </MainBlock>
        </Main>
      </Container>
    </>
  );
};

export default SpecInfo;

const HeaderContainer = styled(Box)(() => ({
  width: '100%',
  minWidth: '1200px',
  maxWidth: '1440px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px 0',
  margin: '0 0 20px 0',
}));

const Container = styled(Box)(() => ({
  width: '100%',
  maxWidth: '1440px',
  minWidth: '1200px',
  margin: '0 auto',
  minHeight: '100vh',
  paddingTop: '20px',
}));

const Main = styled(Box)(() => ({
  width: '100%',
  maxWidth: '1440px',
  minWidth: '1200px',
  backgroundColor: '#ffff',
  margin: '0 auto',
  minHeight: '100vh',
  borderRadius: '4px',
  display: 'flex',
  padding: '0 50px 0 0',
  flexDirection: 'column',
}));

const MainBlock = styled(Box)(() => ({
  display: 'flex',
}));

const BlockOne = styled(Box)(() => ({
  width: '20%',
  minHeight: '400px',
  display: 'flex',
  justifyContent: 'center',
}));

const BlockTwo = styled('form')(() => ({
  width: '80%',
  minHeight: '400px',
  padding: '50px 0 0 0',
}));

const MiniBlock = styled(Box)(() => ({
  width: '200px',
  height: '200px',
  margin: '50px 0 0 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  '& .imga': {
    width: '100%',
    borderRadius: '50%',
    height: '100%',
  },
  '& span': {
    width: '100%',
    borderRadius: '50%',
    height: '100%',
    border: '4px solid black',
  },
}));

const BlockSection = styled(Box)(() => ({
  width: '100%',
  minHeight: '120px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  margin: '10px 0 20px 0',
  '& .inputs': {
    backgroundColor: 'transparent',
    width: '545px',
  },
  '& .one': {
    marginBottom: '15px',
  },
  '& .two': {
    marginBottom: '15px',
  },
}));

const BlockThree = styled(Box)(() => ({
  width: '100%',
  height: '250px',
  display: 'flex',
  alignItems: 'end',
  border: '1px solid black',
  flexDirection: 'column',
  marginTop: '20px',
}));
