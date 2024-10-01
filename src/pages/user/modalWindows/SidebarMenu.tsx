import React, { useState } from 'react';
import {
  Drawer,
  IconButton,
  Box,
  styled,
  MenuItem,
  Input,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Icons from '../../../assets/icons/TodoListIcon.svg';
import IconDate from '../../../assets/icons/CalendarDays.svg';

const CustomDrawer = styled(Drawer)(() => ({
  '& .MuiDrawer-paper': {
    width: '380px',
    height: '100%',
    padding: '16px',
    position: 'fixed',
    right: 0,
  },
}));

interface SidebarMenuProps {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ open, toggleDrawer }) => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setSelectedValue(event.target.value);
  };
  

  return (
    <CustomDrawer
      anchor="right"
      open={open}
      onClose={() => toggleDrawer(false)}>
      <MenuContainer>
        <div className="theFirstContent">
          <IconButton
            onClick={() => toggleDrawer(false)}
            sx={{ position: 'absolute', left: 0 }}
            aria-label="close">
            <CloseIcon />
          </IconButton>
          <H2>Online запись</H2>
        </div>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '16px',
            backgroundColor: '#FFFFFF',
            width: '368px',
            height: '72px',
          }}>
          {/* Icons outside the Select component */}
          <Icons />
          <MySelect
            value={selectedValue}
            // onChange={handleSelectChange}
            onChange={(e) => handleSelectChange(e)}
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
            <MenuItem value="" disabled>
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
        </Box>
        <div>
          <IconDate />
          <p>Выбрать дату и время</p>
          <Input type="date" />
        </div>
      </MenuContainer>
    </CustomDrawer>
  );
};

export default SidebarMenu;

const MenuContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  position: 'relative',
}));

const H2 = styled('h2')(() => ({
  fontSize: '16px',
  fontWeight: '700',
  color: '#048741',
}));

const MySelect = styled(Select)(() => ({
  marginLeft: '8px',
}));
