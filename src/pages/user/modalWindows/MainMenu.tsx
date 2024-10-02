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
import { useAppDispatch, useAppSelector } from '../../../hooks/customHooks';
import {
  clearSelectChoose,
  clearSelectSpesialist,
  setSelectChoose,
} from '../../../store/slices/siteBarMenu/sitBarMenu';
import { useState } from 'react';

const MainMenu = ({ handleClose, setActiveComponent }) => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setSelectedValue(event.target.value);
  };

  const { selectSpesialist, selectChoose } = useAppSelector(
    state => state.siteBarMenu
  );
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(clearSelectSpesialist());
  };

  const handleDeleteChoose = () => {
    setSelectedValue('');
    dispatch(clearSelectChoose());
  };

  dispatch(setSelectChoose(selectedValue));
  console.log(selectChoose);

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
        {selectChoose ? (
          <div>
            {' '}
            add
            <button onClick={handleDeleteChoose}>delete</button>
          </div>
        ) : (
          <MySelect
            value={selectedValue}
            onChange={e => handleSelectChange(e)}
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
            <MenuItem value="Анестезиология">Анестезиология</MenuItem>
            <MenuItem value="Вакцинация">Вакцинация</MenuItem>
            <MenuItem value="Гинекология">Гинекология</MenuItem>
            <MenuItem value="Дерматология">Дерматология</MenuItem>
            <MenuItem value="Кардиология">Кардиология</MenuItem>
            <MenuItem value="Неврология">Неврология</MenuItem>
            <MenuItem value="Нейрохирургия">Нейрохирургия</MenuItem>
          </MySelect>
        )}
      </SelectContainer>

      <SpesialistContainer>
        {selectSpesialist ? (
          <div>
            <img src={selectSpesialist?.img} alt="" />
            <p>{selectSpesialist?.name}</p>
            <p>{selectSpesialist?.position}</p>
            <button onClick={handleDelete}>delete</button>
          </div>
        ) : (
          <ButtonContainer onClick={() => setActiveComponent('specialist')}>
            <IconContainer>
              <GroupPeopleIcon />
            </IconContainer>
            <p>Выбрать специалиста</p>
          </ButtonContainer>
        )}
      </SpesialistContainer>

      <ButtonContainer onClick={() => setActiveComponent('date')}>
        <IconContainer>
          <IconDate />
        </IconContainer>
        <p>Выбрать дату и время</p>
      </ButtonContainer>
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
  padding: '15px',
  width: '95%',
  borderRadius: '15px',
}));

const IconContainer = styled(Box)(() => ({
  backgroundColor: '#f3f1f1',
  padding: '7px',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
}));

const MySelect = styled(Select)(() => ({
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}));

const ButtonContainer = styled('button')(() => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: '10px',
  backgroundColor: '#FFFFFF',
  height: '72px',
  padding: '15px',
  width: '95%',
  borderRadius: '15px',
  border: 'none',

  '& p': {
    marginLeft: '12px',
    fontSize: '20px',
  },
}));

const SpesialistContainer = styled('div')(() => ({
  width: '95%',
}));
