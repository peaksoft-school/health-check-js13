import { FC, useRef, useState } from 'react';
import resultImage from '../../assets/images/GetResultImage.png';
import healthcheck from '../../assets/images/HEALTHCHECK.png';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import { AppDispatch, useAppSelector } from '../../hooks/customHooks';
import { useDispatch } from 'react-redux';
import { fetchResult } from '../../store/results/resultThunk';
import jsPDF from 'jspdf';
import LoadingComponent from '../../utils/helpers/LoadingComponents';

export interface Result {
  departmentEnum: string;
  urlPDF: string;
}

const GetResults: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { results = [], loading } = useAppSelector(state => state.results);
  const [resultNumber, setOrderNumber] = useState<number | null>(null);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [opens, setOpenButton] = useState<boolean>(false);

  const openButton = () => setShowResults(prev => !prev);
  const showButton = () => setOpenButton(prev => !prev);

  const handleSearch = async () => {
    if (resultNumber) {
      const resultAction = await dispatch(
        fetchResult({ resultNumber, showButton })
      );

      if (fetchResult.fulfilled.match(resultAction)) {
        const fetchedResult = resultAction.payload;
        if (!fetchedResult) {
          alert('Результат с таким номером не найден');
          setShowResults(false);
        } else {
          setShowResults(true);
        }
      } else {
        alert('Ошибка при получении результата');
      }
    } else {
      alert('Введите номер');
    }
  };

  return (
    <BoxGroup>
      <BoxI>
        <BoxA>
          {loading && <LoadingComponent />}
          <ImgHealthcheck src={healthcheck} alt="healthcheck" />
          <BoxAb>
            <InputResult
              placeholder="Введите номер заказа..."
              onChange={e => setOrderNumber(Number(e.target.value))}
            />
            <ButtonResult variant="text" onClick={handleSearch}>
              найти
            </ButtonResult>
          </BoxAb>
        </BoxA>
        <BoxB></BoxB>
        <BoxC>
          <StyledTypography variant="h5" textAlign={'center'}>
            Выдача результатов
          </StyledTypography>
          {opens && (
            <Button
              sx={{ width: '50%', margin: '20px 0' }}
              onClick={openButton}>
              {showResults ? 'Закрыть результаты' : 'Открыть результаты '}
            </Button>
          )}

          <StyledTypographyTitle>Вы можете:</StyledTypographyTitle>
          <StyledList>
            <ListItem>
              <StyledListItemText primary="Просмотреть свои результаты анализов онлайн, введя в поле слева индивидуальный цифровой код, который указан в верхней части Вашей квитанции под штрих-кодом." />
            </ListItem>
            <ListItem>
              <StyledListItemText primary="Распечатать результат можно непосредственно с этой страницы или сохранить в PDF формате с помощью кнопок, расположенных в верхней части сайта." />
            </ListItem>
            {!showResults && (
              <ListItem>
                <StyledListItemTextRed primary="При возникновении проблем с отображением результатов, Вы можете оставить заявку на получение результатов по электронной почте, позвонив в Службу поддержки клиентов по номеру 909 090." />
              </ListItem>
            )}
          </StyledList>

          {showResults && (
            <div
              style={{
                position: 'absolute',
                bottom: '-450px',
                left: '0',
              }}>
              <object
                data={results.urlPDF}
                type="application/pdf"
                width="600"
                height="400"></object>
            </div>
          )}
        </BoxC>
      </BoxI>
    </BoxGroup>
  );
};

const BoxGroup = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  minWidth: '1200px',
}));
const BoxI = styled(Box)(() => ({
  border: '1px solid silver',
  borderRadius: '5px',
  backgroundImage: `url(${resultImage})`,
  width: '1200px',
  height: '950px',
  display: 'flex',
  justifyContent: 'center',
  margin: '30px 0',
}));
const BoxA = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  width: '514px',
  height: '207px',
  marginTop: '30px',
  marginRight: '15px',
  borderRadius: '5px',
}));

const BoxAb = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const InputResult = styled(Input)(() => ({
  '& .MuiOutlinedInput-input': {
    width: '300px',
    height: '46px',
    marginRight: '10px',
    padding: '0',
    paddingLeft: '10px',
  },
}));
const ButtonResult = styled(Button)(() => ({
  '&.MuiButtonBase-root': {
    width: '125px',
    height: '48px',
    backgroundColor: 'rgba(12, 187, 107, 1)',
    color: 'rgba(255, 255, 255, 1)',
    marginLeft: '10px',
    '&:hover': {
      backgroundColor: 'rgba(2, 123, 68, 1)',
      color: 'rgba(255, 255, 255, 1)',
    },
  },
}));
const ImgHealthcheck = styled('img')(() => ({
  width: '230px',
  height: '65px',
  margin: '20px 0',
}));

const BoxB = styled(Box)(() => ({
  backgroundColor: 'rgba(57, 119, 192, 1)',
  width: '8px',
}));
const BoxC = styled(Box)(() => ({
  padding: '20px',
  backgroundColor: 'rgba(254, 251, 251, 0.5)',
  width: '600px',
  height: '450px',
  marginTop: '30px',
  marginLeft: '15px',
  position: 'relative',
}));

const StyledTypography = styled(Typography)(() => ({
  color: 'rgba(52, 110, 251, 1)',
}));
const StyledTypographyTitle = styled(Typography)(() => ({
  // margin: '20px 0',
  color: 'rgba(52, 110, 251, 1)',
}));
const StyledList = styled(List)(() => ({
  listStyleType: 'disc',
}));
const StyledListItemText = styled(ListItemText)(() => ({
  color: 'rgba(52, 110, 251, 1)',
  display: 'list-item',
}));
const StyledListItemTextRed = styled(ListItemText)(() => ({
  color: 'rgba(249, 21, 21, 1)',
  display: 'list-item',
}));
const ButtonContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10px',
}));

const StyledButtonClose = styled(Button)(() => ({
  '&.MuiButtonBase-root': {
    backgroundColor: 'rgba(249, 21, 21, 1)',
    borderRadius: '10px',
    width: '240px',
    height: '40px',
    color: 'rgba(255, 255, 255, 1)',
  },
  '&:hover': {
    backgroundColor: '#f35959 !important',
    color: 'rgba(255, 255, 255, 1) !important',
  },
}));
const StyledButtonPdf = styled(Button)(() => ({
  '&.MuiButtonBase-root': {
    backgroundColor: 'rgba(57, 119, 192, 1)',
    width: '87px',
    height: '40px',
    color: 'rgba(255, 255, 255, 1)',

    '&:hover': {
      backgroundColor: '#4e8cd3 !important',
      color: 'rgba(255, 255, 255, 1)',
    },
  },
}));
const ButtonIcon = styled('img')(() => ({
  marginRight: '8px',
  width: '20px',
  height: '15px',
}));
const StyledButtonPrint = styled(Button)(() => ({
  '&.MuiButtonBase-root': {
    backgroundColor: 'rgba(57, 119, 192, 1)',
    width: '158px',
    height: '40px',
    color: 'rgba(255, 255, 255, 1)',

    '&:hover': {
      backgroundColor: '#467ab6 !important',
      color: 'rgba(255, 255, 255, 1)',
    },
  },
}));

export default GetResults;
