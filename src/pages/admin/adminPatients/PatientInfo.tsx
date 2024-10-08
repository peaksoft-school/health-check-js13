import { Box, MenuItem, Select, styled, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../hooks/customHooks';
import Button from '../../../components/UI/Button';
import XXX from '../../../assets/icons/XXX.svg';
import Modal from '../../../components/UI/Modal';
import { Key, useState } from 'react';
import CustomDatePicker from '../../../components/UI/DatePicker';
import { useForm } from 'react-hook-form';
import Downlaod from '../../../assets/icons/Downlaod.svg';
import { useDropzone } from 'react-dropzone';
import PdfRenderer from '../../../components/UI/PdfViewer';
import { addFile } from '../../../store/slices/adminSpecialist/adminSpecialistThunk';
import LoadingComponent from '../../../utils/helpers/LoadingComponents';
import { addResult } from '../../../store/slices/patients/patientsThunk';
import PdfIcon from '../../../assets/icons/PdfIcon.svg';
import { addPdfFile } from '../../../store/slices/patients/patientsSlice';
import CloseIcon from '../../../assets/icons/CloseIcon.svg';
const PatientInfo = () => {
  const { getUser, isLoading, pdfFile, result } = useAppSelector(
    state => state.patients
  );
  const [selectedValue, setSelectedValue] = useState('');
  const [open, setOpen] = useState(false);
  const [openPdf, setOpenPdf] = useState(false);
  const [openResultBlock, setOpenResultBlock] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const dispatch = useAppDispatch();
  const { control, setValue, handleSubmit } = useForm();

  const openModal = () => {
    setOpen(prev => !prev);
    setFiles([]);
  };

  const openModalPdf = () => {
    setOpenPdf(prev => !prev);
  };

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

  if (!getUser) return <p>No user info available</p>;

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
    setValue('departmentEnum', event.target.value);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'application/pdf': [] },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles);
      dispatch(addPdfFile(acceptedFiles));
      dispatch(addFile(acceptedFiles[0]))
        .unwrap()
        .then(uploadedFile => {
          const { link } = uploadedFile;
          setValue('urlPDF', link);
        });
    },
  });
  const id = getUser.id;
  console.log(result);
  const submitHandlers = (data: any) => {
    const formattedDate = data.date.format('YYYY-MM-DD');

    const payload = {
      ...data,
      date: formattedDate,
    };
    dispatch(addResult({ data: payload, id, openModal, setOpenResultBlock }));
  };

  return (
    <>
      {isLoading && <LoadingComponent />}
      <HeaderContainer>
        <Typography variant="h4" fontFamily={'Manrope,sans-serif'}>
          {getUser.firstName} {getUser.lastName}
        </Typography>
        <Button
          onClick={openModal}
          style={{ width: '30%' }}
          variant="contained"
          type="button"
          startIcon={<XXX />}>
          ДОБАВИТЬ РЕЗУЛЬТАТЫ
        </Button>
      </HeaderContainer>

      <Modal open={open} onClose={openModal}>
        <BoxStyled onSubmit={handleSubmit(submitHandlers)}>
          <Typography
            textAlign={'center'}
            fontSize={24}
            margin={'0 0 20px 0'}
            fontFamily={'Manrope,sans-serif'}>
            Добавление результата
          </Typography>
          <MainBlock>
            <label htmlFor="">
              Услуга
              <SelectStyled
                value={selectedValue}
                onChange={handleChange}
                displayEmpty
                sx={{ width: '300px', margin: '2px 0' }}>
                <MenuItem value="" sx={{ color: '#959595' }} disabled>
                  Выберите услугу
                </MenuItem>
                <MenuItem value="ANESTHESIOLOGY">Анестезиология</MenuItem>
                <MenuItem value="VACCINATION">Вакцинация</MenuItem>
                <MenuItem value="GYNECOLOGY">Гинекология</MenuItem>
                <MenuItem value="DERMATOLOGY">Дерматология</MenuItem>
                <MenuItem value="CARDIOLOGY">Кардиология</MenuItem>
                <MenuItem value="NEUROLOGY">Неврология</MenuItem>
                <MenuItem value="Нейрохирургия">Нейрохирургия</MenuItem>
                <MenuItem value="ORTHOPEDICS">Ортопедия</MenuItem>
                <MenuItem value="PEDIATRICS">Педиатрия</MenuItem>
                <MenuItem value="PSYCHIATRY">Психиатрия</MenuItem>
                <MenuItem value="UROLOGY">Урология</MenuItem>
                <MenuItem value="GASTROENTEROLOGY">Гастроэнтерология</MenuItem>
                <MenuItem value="ONCOLOGY">Онкология</MenuItem>
              </SelectStyled>
            </label>
            <label htmlFor="">
              Дата сдачи
              <CustomDatePicker
                sx={{ margin: '2px 0' }}
                name="date"
                control={control}
              />
            </label>
          </MainBlock>
          <TwentyBlock>
            <label htmlFor="">
              Файл
              <Boxing>
                <Boxx {...getRootProps()} style={{ textAlign: 'center' }}>
                  <input {...getInputProps()} style={{ display: 'none' }} />
                  {files.length ? (
                    files.map((item, index) => (
                      <PdfRenderer
                        key={index}
                        pdfUrl={URL.createObjectURL(item)}
                      />
                    ))
                  ) : (
                    <Downlaod />
                  )}
                </Boxx>
                {files.length ? (
                  <Box sx={{ marginTop: '10px' }}>
                    {files.map((file, index) => (
                      <Typography key={index} variant="body2">
                        {file.name}
                      </Typography>
                    ))}
                  </Box>
                ) : (
                  <TextBox>
                    <Typography
                      color={'#4D4E51'}
                      fontSize={14}
                      fontWeight={400}
                      fontFamily={'Manrope,sans-serif'}>
                      Нажмите или перетащите файл
                    </Typography>
                    <Typography
                      color={'#959595'}
                      fontSize={12}
                      fontWeight={400}
                      fontFamily={'Manrope,sans-serif'}
                      margin={'7px 0'}>
                      Минимальное <br /> разрешение 450x600
                    </Typography>
                  </TextBox>
                )}
              </Boxing>
            </label>
          </TwentyBlock>
          <ButtonBlock>
            <Button variant="outlined" onClick={openModal}>
              Отменить
            </Button>
            <Button>Добавить</Button>
          </ButtonBlock>
        </BoxStyled>
      </Modal>

      <MainContainer openResultBlock={openResultBlock}>
        <InfoBlock>
          <Typography variant="h5" fontFamily={'Manrope,sans-serif'}>
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

        {openResultBlock && (
          <ResultInfo>
            <Blocks>
              <TypographyStyled>Услуга</TypographyStyled>
              <Typography>
                {translateDepartment[result?.departmentEnum]}
              </Typography>
              {/* <Typography>Белок общий (R)</Typography>
              <Typography>Глюкоза</Typography>
              <Typography>Инсулин</Typography>
              <Typography>Калций общий</Typography> */}
            </Blocks>
            <Blocks>
              <TypographyStyled>Дата и время:</TypographyStyled>
              <Typography>{result.dateOfUpResult}</Typography>
              <Typography>{result.timeOfUpResult.split('.')[0]}</Typography>
            </Blocks>
            <Blocks>
              <TypographyStyled>Номер заказа:</TypographyStyled>
              <Typography>{result?.resultNumber}</Typography>
            </Blocks>
            <Blocks>
              <TypographyStyled>Загруженный файл</TypographyStyled>
              <BoxStyle onClick={openModalPdf}>
                <PdfIcon />
              </BoxStyle>
            </Blocks>
          </ResultInfo>
        )}
      </MainContainer>
      {openPdf && (
        <ReviewPdf>
          <div style={{ position: 'relative', width: '100%' }}>
            <div
              style={{
                position: 'absolute',
                top: '0',
                right: 5,
                cursor: 'pointer',
              }}
              onClick={openModalPdf}>
              <CloseIcon />
            </div>
            {pdfFile.length ? (
              pdfFile.map(
                (item: Blob | MediaSource, index: Key | null | undefined) =>
                  item instanceof File ? (
                    <div>
                      <PdfRenderer
                        key={index}
                        pdfUrl={URL.createObjectURL(item)}
                      />
                    </div>
                  ) : (
                    <Typography
                      fontSize={20}
                      textAlign={'center'}
                      m={'10px 0'}
                      fontFamily={'Manrope,sans-serif'}>
                      Invalid file type
                    </Typography>
                  )
              )
            ) : (
              <Downlaod />
            )}
          </div>
        </ReviewPdf>
      )}
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
  fontFamily: 'Manrope,sans-serif',
}));

const MainContainer = styled(Box)<{ openResultBlock: boolean }>(
  ({ openResultBlock }) => ({
    width: '100%',
    maxWidth: '1440px',
    minHeight: '100vh',
    backgroundColor: '#FFFFFF',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Manrope,sans-serif',
    display: openResultBlock ? 'flex' : 'block',
    alignItems: openResultBlock ? 'start' : 'start',
    justifyContent: openResultBlock ? 'center' : 'center',

    gap: '20px',
  })
);

const InfoBlock = styled(Box)(() => ({
  width: '100%',
  maxWidth: '400px',
  border: '1px solid #E0E0E0',
  borderRadius: '8px',
  padding: '20px',
  backgroundColor: '#F9F9F9',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  fontFamily: 'Manrope,sans-serif',
}));

const StyledRow = styled(Typography)(() => ({
  fontSize: '18px',
  color: '#4A4A4A',
  marginBottom: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '8px 12px',
  borderBottom: '1px solid #E0E0E0',
  fontFamily: 'Manrope,sans-serif',
}));

const StyledText = styled('span')(() => ({
  fontWeight: 500,
  color: '#222',
  fontFamily: 'Manrope,sans-serif',
}));

const BoxStyled = styled('form')(() => ({
  width: '550px',
  height: '350px',
  backgroundColor: 'white',
  borderRadius: '8px',
  padding: '35px',
  fontFamily: 'Manrope,sans-serif',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

const MainBlock = styled(Box)(() => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  fontFamily: 'Manrope,sans-serif',
}));

const SelectStyled = styled(Select)(({ theme }) => ({
  fontFamily: 'Manrope,sans-serif',
  width: '100%',
  height: '38px',
  borderRadius: '6px',
  borderColor: theme.palette.secondary.lightGrey,
  backgroundColor: theme.palette.secondary.daisy,
  transition: 'all 0.3s',

  '&:hover': {
    borderColor: theme.palette.secondary.darkGrey,
  },

  '&.Mui-focused': {
    borderColor: theme.palette.primary.darkGreen,
    boxShadow: `0 0 0 1px ${theme.palette.primary.darkGreen}`,
  },

  '&.Mui-disabled': {
    backgroundColor: theme.palette.action.disabledBackground,
    color: theme.palette.text.disabled,

    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.action.disabled,
    },
  },
}));

const TwentyBlock = styled(Box)(() => ({
  width: '100%',
  height: '150px',
  margin: '15px 0 0 0',
}));

const Boxx = styled(Box)(() => ({
  width: '100px',
  height: '100px',
  backgroundColor: '#E0E2E7',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px',
  marginTop: '5px',
}));

const TextBox = styled(Box)(() => ({
  width: '70%',
  height: '100px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

const Boxing = styled(Box)(() => ({
  width: '100%',
  height: '120px',
  display: 'flex',
  gap: '20px',
}));

const ButtonBlock = styled(Box)(() => ({
  width: '100%',
  height: '100px',
  display: 'flex',
  gap: '10px',
}));

const ResultInfo = styled(Box)(() => ({
  width: '80%',
  height: '290px',
  backgroundColor: '#DBEBFF',
  borderRadius: '10px',
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Manrope,sans-serif',
}));

const Blocks = styled(Box)(() => ({
  width: '24%',
  height: '250px',
  fontFamily: 'Manrope,sans-serif',
  padding: '10px',
}));

const TypographyStyled = styled(Typography)(() => ({
  fontSize: '20px',
  color: '#333',
  margin: '5px 0 15px 0',
  fontWeight: 400,
  fontFamily: 'Manrope,sans-serif',
}));

const BoxStyle = styled(Box)(() => ({
  width: '80px',
  height: '80px',
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
}));

const ReviewPdf = styled(Box)(() => ({
  width: '600px',
  height: '750px',
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '9999',
  backgroundColor: 'white',
  borderRadius: '10px',
}));
