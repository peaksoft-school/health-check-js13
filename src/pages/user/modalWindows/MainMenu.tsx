import {
  IconButton,
  Box,
  styled,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Icons from '../../../assets/icons/TodoListIcon.svg';
import IconDate from '../../../assets/icons/CalendarDays.svg';
import GroupPeopleIcon from '../../../assets/icons/GroupPeopleIconsvg.svg';
import CorzinkaIcon from '../../../assets/icons/Korzina.svg';
import { useAppDispatch, useAppSelector } from '../../../hooks/customHooks';
import {
  clearSelectChoose,
  clearSelectData,
  clearSelectSpesialist,
  setSelectChoose,
} from '../../../store/slices/siteBarMenu/sitBarMenu';
import { FC, useEffect, useState } from 'react';
import Button from '../../../components/UI/Button';
import { getDoctorByDepart } from '../../../store/slices/siteBarMenu/siteBarThunk';

interface MainMenuProps {
  handleClose: () => void;
  setActiveComponent: (component: string) => void;
}

const options = [
  // { value: 'ANESTHESIOLOGY', label: 'Анестезиология' },
  // { value: 'VACCINATION', label: 'Вакцинация' },
  { value: '8', label: 'Гинекология' },
  { value: '2', label: 'Дерматология' },
  { value: '1', label: 'Кардиология' },
  { value: '3', label: 'Неврология' },
  // { value: 'NEUROSURGERY', label: 'Нейрохирургия' },
  { value: '4', label: 'Ортопедия' },
  { value: '5', label: 'Педиатрия' },
  { value: '6', label: 'Психиатрия' },
  { value: '7', label: 'Урология' },
  { value: '9', label: 'Гастроэнтерология' },
  // { value: 'ONCOLOGY', label: 'Онкология' },
];

const MainMenu: FC<MainMenuProps> = ({ handleClose, setActiveComponent }) => {
  const dispatch = useAppDispatch();
  const { selectSpesialist, selectChoose, selectData, doctor } = useAppSelector(
    state => state.siteBarMenu
  );
  const displayContinue = selectSpesialist && selectChoose && selectData;

  const [selectedValue, setSelectedValue] = useState<{
    value: string;
    label: string;
  } | null>(null);

  const handleSelectChange = (event: SelectChangeEvent<string | number>) => {
    const selectedOption = options.find(
      option => option.value === event.target.value
    );
    if (selectedOption) {
      setSelectedValue(selectedOption);
      dispatch(setSelectChoose(selectedOption.value));
    }
  };

  const handleDelete = () => {
    ~dispatch(clearSelectSpesialist());
  };

  const handleDeleteChoose = () => {
    dispatch(clearSelectChoose());
    setSelectedValue('');
  };

  const handleDeletedata = () => {
    dispatch(clearSelectData());
  };

  useEffect(() => {
    if (selectedValue) {
      dispatch(getDoctorByDepart(selectedValue?.value));
    }
  }, [dispatch, selectedValue, selectedValue?.value]);

  console.log(selectSpesialist);

  return (
    <MenuContainer>
      <BoxHeaderStyle>
        <IconButton onClick={handleClose} aria-label="close">
          <CloseIcon />
        </IconButton>
        <H2>Online запись</H2>
      </BoxHeaderStyle>

      <SelectContainer>
        <IconContainer>
          <Icons />
        </IconContainer>
        {selectedValue ? (
          <>
            <p style={{ fontSize: '18px' }}>{selectedValue.label}</p>
            <KorzinkaStyle onClick={handleDeleteChoose}>
              <CorzinkaIcon />
            </KorzinkaStyle>
          </>
        ) : (
          <MySelect
            value={selectedValue?.value || ''}
            onChange={handleSelectChange}
            displayEmpty
            fullWidth
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 218,
                  overflowY: 'auto',
                },
              },
            }}>
            <MenuItem value="" disabled style={{ display: 'none' }}>
              Выбрать услуги
            </MenuItem>
            {options.map(item => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </MySelect>
        )}
      </SelectContainer>

      <SpesialistContainer>
        {selectSpesialist ? (
          <>
            <StyleImg src={selectSpesialist?.image} alt="" />

            <SpesialContainer>
              <p>{selectSpesialist?.name}</p>
              <div>{selectSpesialist?.position}</div>
              <div
                style={{
                  fontSize: '14px',
                }}>
                <span
                  style={{
                    color: '#FFD700',
                    marginRight: '5px',
                    fontSize: '18px',
                  }}>
                  {selectSpesialist.reiting.star}
                </span>
                <span>{selectSpesialist.reiting.num}</span>
              </div>
            </SpesialContainer>

            <KorzinkaStyle onClick={handleDelete}>
              <CorzinkaIcon />
            </KorzinkaStyle>
          </>
        ) : (
          <ButtonContainer onClick={() => setActiveComponent('specialist')}>
            <IconContainer>
              <GroupPeopleIcon />
            </IconContainer>
            <p>Выбрать специалиста</p>
          </ButtonContainer>
        )}
      </SpesialistContainer>

      <SpesialistContainer>
        <IconContainer>
          <IconDate />
        </IconContainer>
        {selectData ? (
          <>
            <DataContainer>
              <p>
                {selectData.week}, {selectData.day} {selectData.moon}
              </p>
              <div>{selectData.hours}</div>
            </DataContainer>

            <KorzinkaStyle onClick={handleDeletedata}>
              <CorzinkaIcon />
            </KorzinkaStyle>
          </>
        ) : (
          <ButtonContainer onClick={() => setActiveComponent('date')}>
            <p>Выбрать дату и время</p>
          </ButtonContainer>
        )}
      </SpesialistContainer>

      <Button
        onClick={() => setActiveComponent('continue')}
        sx={{
          width: '96%',
          marginTop: '30px',
          display: !displayContinue ? 'none' : '',
        }}>
        Продолжить
      </Button>
    </MenuContainer>
  );
};

export default MainMenu;

const MenuContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  position: 'relative',
}));

const BoxHeaderStyle = styled('div')(() => ({
  backgroundColor: 'white',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  height: '56px',
}));

const H2 = styled('h2')(() => ({
  fontSize: '18px',
  fontWeight: '700',
  color: '#048741',
  margin: '0 auto',
  paddingRight: '50px',
}));

const SelectContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: '10px',
  backgroundColor: '#FFFFFF',
  height: '72px',
  width: '95%',
  borderRadius: '15px',
  fontFamily: 'sans-serif',
}));

const IconContainer = styled(Box)(() => ({
  backgroundColor: '#f3f1f1',
  padding: '7px',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  margin: '0 15px',
}));

const MySelect = styled(Select)(() => ({
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}));

const ButtonContainer = styled('div')(() => ({
  height: '72px',
  width: '95%',
  border: 'none',
  display: 'flex',
  alignItems: 'center',

  '& p': {
    marginLeft: '12px',
    fontSize: '20px',
  },
}));

const SpesialistContainer = styled('div')(() => ({
  width: '95%',
  display: 'flex',
  alignItems: 'center',
  marginTop: '10px',
  backgroundColor: '#FFFFFF',
  borderRadius: '15px',
  height: '72px',
  fontFamily: 'sans-serif',
}));

const StyleImg = styled('img')(() => ({
  width: '36px',
  borderRadius: '50%',
  margin: '0 15px',
}));

const KorzinkaStyle = styled('button')(() => ({
  position: 'absolute',
  border: 'none',
  backgroundColor: 'white',
  right: '20px',
  width: '36px',
}));

const DataContainer = styled('div')(() => ({
  '& p ': { whiteSpace: 'nowrap', color: 'gray', fontSize: '14px' },
  '& div': {
    fontSize: '18px',
  },
}));

const SpesialContainer = styled('div')(() => ({
  '& p ': { whiteSpace: 'nowrap', fontSize: '16px' },
  '& div': { whiteSpace: 'nowrap', color: 'gray', fontSize: '13px' },
}));
