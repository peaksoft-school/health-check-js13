import React, { useRef } from 'react';
import { Box, styled, Typography } from '@mui/material';
import 'react-quill/dist/quill.snow.css';
import { useForm } from 'react-hook-form';
import Input from '../../../components/UI/Input';
import MyEditor from '../../../utils/helpers/Quil';
import Button from '../../../components/UI/Button';
import { useAppDispatch, useAppSelector } from '../../../hooks/customHooks';
import {
  addFile,
  addSpec,
} from '../../../store/slices/adminSpecialist/adminSpecialistThunk';
import Select from '../../../components/UI/Select';
import { department } from '../../../utils/helpers';
import LoadingComponent from '../../../utils/helpers/LoadingComponents';
import { useNavigate } from 'react-router-dom';

export type TFormTypes = {
  imageURL: string | undefined;
  firstName: string;
  lastName: string;
  department: string;
  position: string;
  description: string;
};

const AddSpecialist = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<TFormTypes>();
  const dispatch = useAppDispatch();

  const { file, isLoading } = useAppSelector(state => state.spec);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;

    if (selectedFile) {
      dispatch(addFile(selectedFile))
        .unwrap()
        .then(uploadedFile => {
          const { link } = uploadedFile;
          setValue('imageURL', link);
        })
        .catch(error => {
          console.error('Ошибка загрузки файла:', error);
        });
    } else {
      console.error('Файл не выбран');
    }
  };

  const handlerChangeSelectValue = (event: any) => {
    setValue('department', event.target.value);
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handlerSubmitForm = (formData: TFormTypes) => {
    dispatch(addSpec({ formData, navigate }));
    reset();
  };

  const handleGoBack = () => navigate(-1);

  return (
    <>
      {isLoading && <LoadingComponent />}
      <Container>
        <HeaderContainer>
          <Typography variant="h4">Специалисты</Typography>
        </HeaderContainer>
        <Main>
          <MainBlock>
            <BlockOne>
              <MiniBlock>
                {file ? (
                  <>
                    <img
                      className="imga"
                      src={file}
                      alt="file"
                      onClick={handleImageClick}
                    />
                  </>
                ) : (
                  <div className="file-upload-container">
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="file-upload-input"
                      onChange={onFileChange}
                    />
                  </div>
                )}

                <div>
                  <Typography
                    sx={{
                      fontSize: '12px',
                      marginLeft: '30px',
                      color: '#909CB5',
                    }}>
                    Нажмите для
                  </Typography>
                  <Typography sx={{ fontSize: '12px', color: '#909CB5' }}>
                    добавления фотографии
                  </Typography>
                </div>
              </MiniBlock>
            </BlockOne>
            <BlockTwo onSubmit={handleSubmit(handlerSubmitForm)}>
              <Typography variant="h5">Добавление специалиста</Typography>
              <BlockSection>
                <div>
                  <Input
                    {...register('firstName', {
                      required: true,
                    })}
                    error={!!errors.firstName}
                    helperText={
                      errors.firstName?.message ? errors.firstName.message : ''
                    }
                    size="small"
                    className="inputs one"
                    label="Имя"
                    placeholder="Напишите имя"
                  />
                  <Input
                    {...register('lastName', {
                      required: true,
                    })}
                    error={!!errors.lastName}
                    helperText={
                      errors.lastName?.message ? errors.lastName.message : ''
                    }
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
                      style={{ width: '545px', height: '40px' }}
                    />
                  </label>
                  <Input
                    {...register('position', {
                      required: true,
                    })}
                    error={!!errors.position}
                    helperText={
                      errors.position?.message ? errors.position.message : ''
                    }
                    size="small"
                    className="inputs"
                    label="Должность"
                    placeholder="Напишите должность"
                  />
                </div>
              </BlockSection>
              <MyEditor setValue={setValue} />
              <BlockThree>
                <div
                  style={{
                    width: '600px',
                    display: 'flex',
                    gap: '10px',
                    float: 'right',
                  }}>
                  <Button
                    onClick={handleGoBack}
                    fullWidth
                    type="button"
                    variant="text"
                    style={{ height: '40px' }}>
                    Назад
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

export default AddSpecialist;

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
    cursor: 'pointer',
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
  flexDirection: 'column',
  marginTop: '20px',
}));
