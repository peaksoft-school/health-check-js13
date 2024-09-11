import { FC, useState } from 'react';
import Button from '../../../components/UI/Button';
import Input from '../../../components/UI/Input';
import {
  Box,
  InputAdornment,
  styled,
  Select as MuiSelect,
} from '@mui/material';
import SearchIcon from '../../../assets/icons/SearchIcon.svg';
import Icon from '../../../assets/icons/Pluse.svg';
import Table from '../../../components/UI/Table';
import { TableOne } from '../../../utils/constants/Column';
import tableOne from '../../../utils/constants/tableOne.json';
import Schedule from '../schedule/Schedule';
import Modal from '../../../components/UI/Modal';
import CustomDatePicker from '../../../components/UI/DatePicker';
import { useForm } from 'react-hook-form';
import Select from '../../../components/UI/Select';
import RepeatDaysButtons from '../../../components/UI/RepeatDaysButtons';
import TimeInput from '../../../components/UI/TimeInput';
// import SearchInput from '../../../components/UI/SearchInput';
// import SmallDatePicker from '../../../components/UI/SmallDatePicker';
// import { MySelect } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../../store/store';
// import { postOnlineRecording } from '../../../store/slices/adminApplication/adminOnlineRecordingThunk';
// import { useDispatch, useSelector } from 'react-redux';

// !!!!!!!
// const dispatch = useDispatch();
// const { loading, error, successMessage } = useSelector(
//   (state: RootState) => state.onlineRecording
// );

// const handleSubmit = () => {
//   dispatch(postOnlineRecording());
// };

// const OnlineRecordingComponent = () => {
//   const dispatch = useDispatch();
//   const onlineRecordingData = useSelector((state: RootState) => state.onlineRecording);

//   const handlePost = () => {
//     dispatch(postOnlineRecording());
//   }}
//

const OnlineRecording: FC = () => {
  const [activeOption, setActiveOption] = useState('Онлайн-запись');
  const [open, setOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleOptionClick = (option: string) => {
    setActiveOption(option);
  };

  const handleModal = () => {
    setOpen(prev => !prev);
  };

  const { control } = useForm();

  const isOnlineRecordingActive = activeOption === 'Онлайн-запись';

  const handleSelectChange = event => {
    setSelectedValue(event.target.value);
  };

  const [timeValue, setTimeValue] = useState<string>('00:00');

  const handleTimeChange = (newTime: string) => {
    setTimeValue(newTime);
    console.log(newTime);
  };

  // const optionss = [
  //   { value: 'option1', label: 'Option 1' },
  //   { value: 'option2', label: 'Option 2' },
  //   { value: 'option3', label: 'Option 3' },
  // ];

  const options = [
    { id: 1, value: 'specialist1', label: 'Анестезиология' },
    { id: 2, value: 'specialist2', label: 'Вакцинация' },
    { id: 3, value: 'specialist3', label: 'Гинекология' },
    { id: 4, value: 'specialist4', label: 'Дерматология' },
    { id: 5, value: 'specialist5', label: 'Кардиология' },
    { id: 6, value: 'specialist6', label: 'Неврология' },
    { id: 7, value: 'specialist7', label: 'Нейрохирургия' },
  ];
  console.log(options.values);

  const optionsDoctors = [
    { id: 1, value: 'specialist1', label: 'Манак Елена' },
    { id: 2, value: 'specialist2', label: 'Манак Елена' },
    { id: 3, value: 'specialist3', label: 'Манак Елена' },
    { id: 4, value: 'specialist4', label: 'Манак Елена' },
    { id: 5, value: 'specialist5', label: 'Манак Елена' },
    { id: 6, value: 'specialist6', label: 'Манак Елена' },
    { id: 7, value: 'specialist7', label: 'Манак Елена' },
  ];

  const optionsDoctorsChase = [
    { id: 1, value: 'specialist1', label: '15 минут' },
    { id: 2, value: 'specialist2', label: '30 минут' },
    { id: 3, value: 'specialist3', label: '45 минут' },
    { id: 4, value: 'specialist3', label: '1 час' },
    { id: 5, value: 'specialist3', label: '1,5 часа' },
  ];

  return (
    <BackgroundContainer>
      <OnlineRecordingContainer>
        <Box>
          <Content>
            <ContentOption>
              <OnlineRecordingSpan>Онлайн-запись</OnlineRecordingSpan>
              <StyledButton onClick={handleModal}>
                <Icon />
                Добавить запись
              </StyledButton>
            </ContentOption>
            <Box>
              <ContentOptions>
                <Option
                  isActive={isOnlineRecordingActive}
                  onClick={() => handleOptionClick('Онлайн-запись')}>
                  Онлайн-запись
                </Option>
                <Option
                  isActive={!isOnlineRecordingActive}
                  onClick={() => handleOptionClick('Расписание')}>
                  Расписание
                </Option>
              </ContentOptions>
              <Input
                border="none"
                size="small"
                placeholder="Поиск"
                className="inputAdmin"
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      style={{ cursor: 'pointer' }}
                      position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            {isOnlineRecordingActive ? (
              <div className="tableContent">
                <Modal open={open} onClose={handleModal}>
                  <ModalStyled>
                    <ModalContent>
                      <div className="contentRecords">
                        <TextRecords>Добавление записей</TextRecords>
                      </div>
                      <CardsContainer>
                        <div className="contentSelect">
                          <Select
                            placeholder="Выберите услугу"
                            options={options}
                            label="Услуга"
                          />
                          <Select
                            placeholder="Выберите специалиста"
                            options={optionsDoctors}
                            label="Специалист"
                          />
                        </div>
                        <div className="contentDate">
                          <div>
                            <p>Дата начала</p>
                            <StyledDate>
                              <CustomDatePicker
                                control={control}
                                name="datePicker"
                                disabled={false}
                              />
                            </StyledDate>
                          </div>
                          <p className="skin">-</p>
                          <div>
                            <p>Дата окончания</p>
                            <StyledDate>
                              <CustomDatePicker
                                control={control}
                                name="datePicker"
                                disabled={false}
                              />
                            </StyledDate>
                          </div>
                        </div>
                        <div className="contentTime">
                          <div>
                            <span>Время от</span>
                            <TimeInput
                              value={timeValue}
                              onChange={handleTimeChange}
                            />
                          </div>
                          <Skin>-</Skin>
                          <div>
                            <span>Время до</span>
                            <TimeInput
                              value={timeValue}
                              onChange={handleTimeChange}
                            />
                          </div>
                          {/* <Select
                            options={optionsDoctorsChase}
                            label="Интервал часов"
                          /> */}
                          {/* <MuiSelect
                            options={optionsDoctorsChase}
                            value={selectedValue}
                            onChange={handleSelectChange}
                            style={{ marginTop: '20px' }}
                          /> */}
                          <SelectStyled
                            options={optionsDoctorsChase}
                            value={selectedValue}
                            onChange={handleSelectChange}
                          />
                        </div>
                        <div className="cardTime">
                          <div>
                            <p>Время от</p>
                            <TimeInput
                              value={timeValue}
                              onChange={handleTimeChange}
                            />
                          </div>
                          <Skin>-</Skin>
                          <div>
                            <p>Время до</p>
                            <TimeInput
                              value={timeValue}
                              onChange={handleTimeChange}
                            />
                          </div>
                          <p className="classText">
                            Выберите время для перерыва
                          </p>
                        </div>
                        <div className="week">
                          <Repetitions>Дни повторения</Repetitions>
                          <RepeatDaysButtons />
                        </div>
                        <div className="cardsButton">
                          <ButtonStyled onClick={handleModal} variant="text">
                            Отменить
                          </ButtonStyled>
                          <ButtonStyled>опубликовать</ButtonStyled>
                          {/* <Button onClick={handleSubmit} disabled={loading}>
                            {loading ? 'Отправка...' : 'Отправить'}
                          </Button>
                          {error && <p style={{ color: 'red' }}>{error}</p>}
                          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>} */}
                        </div>
                      </CardsContainer>
                    </ModalContent>
                  </ModalStyled>
                </Modal>
                <Table columns={TableOne} data={tableOne} />
              </div>
            ) : (
              <Schedule />
            )}
          </Content>
        </Box>
      </OnlineRecordingContainer>
    </BackgroundContainer>
  );
};

export default OnlineRecording;

const BackgroundContainer = styled('div')({
  background: '#f5f5f5',
});

const OnlineRecordingContainer = styled('div')({
  width: '100%',
  maxWidth: '1440px',
  minWidth: '1200px',
  margin: '0 auto',
  fontFamily: '"Poppins", sans-serif',
});

const Content = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  '& .inputAdmin': {
    width: '600px',
    height: '100%',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: 'white',
    marginTop: '34px',
  },
  '.tableContent': {
    marginTop: '20px',
  },
});

const ContentOption = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '40px 0 0 0',
});

const OnlineRecordingSpan = styled('span')({
  fontSize: '22px',
  fontFamily: '"Poppins", sans-serif',
});

const StyledButton = styled(Button)(() => ({
  '&.MuiButtonBase-root': {
    width: '209px',
    height: '44px',
    borderRadius: '10px',
    padding: '0 10px 0 1px',
    fontSize: '14px',
    display: 'flex',
    gap: '10px',
  },
}));

const ContentOptions = styled('div')({
  display: 'flex',
  gap: '30px',
  margin: '34px 0 0 0',
});

const Option = styled('p')<any>(({ isActive }) => ({
  color: isActive ? '#048741' : '#959595',
  fontSize: '12px',
  fontFamily: '"Poppins", sans-serif',
  cursor: 'pointer',
  borderBottom: isActive ? '2px solid #048741' : '2px solid transparent',
  transition: 'border-color 0.3s ease, color 0.3s ease',
  opacity: isActive ? 1 : 0.8,
}));

const ModalStyled = styled('div')({
  width: '100%',
  height: '100%',
  fontFamily: 'Manrope, sans-serif',
});

const ModalContent = styled('div')({
  width: '530px',
  height: '658px',
  margin: '32px 40px 32px 40px',
  marginTop: '10px',
  '.contentRecords': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const TextRecords = styled('span')({
  fontSize: '24px',
  fontWeight: '500',
});

const CardsContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '18px',
  fontSize: '15px',
  fontWeight: '400',
  '.contentSelect': {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    margin: '32px 0 0 0 ',
  },
  '.cardsButton': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    margin: '18px 0 0 0',
  },
  '.contentDate': {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    margin: '0 135px 0 0',
    '.skin': {
      margin: '20px 0 0 0',
    },
  },
  '.contentTime': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    margin: '0 250px 0 0',
    div: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  '.cardTime': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    margin: '0 60px 0 0',
    '.classText': {
      margin: '20px 0 0 18px',
      fontSize: '15px',
      fontWeight: '400',
    },
  },
  '.week': {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '18px',
  },
});

const Repetitions = styled('span')({
  fontSize: '15px',
  fontWeight: '400',
  margin: '0 360px 0 0',
});

const SelectStyled = styled(Select)({
  '& .MuiOutlinedInput-notchedOutline': {    
    // minWidth: '290px',
    // minHeight: '38px',
    width: '290px',
    height: '38px',
  }
});


const Skin = styled('p')({
  margin: '20px 0 0 0',
});

const ButtonStyled = styled(Button)({
  '&.MuiButtonBase-root': {
    width: '236px',
    height: '39px',
    // fontSize: '14px',
  },
});

const StyledDate = styled('div')({
  display: 'flex',
  alignItems: 'center',
  // padding: '0 0 10px 0 ',
  // margin: '0 0 0 ',
  '& .MuiInputBase-input': {
    width: '70px',
    height: '30px',
    margin: '0 10px 0 0',
    fontSize: '14px',
    textAlign: 'left',
  },
});

// const StyledSelect = styled(Select)({
//   width: '290px',
//   height: '30px',
// });
