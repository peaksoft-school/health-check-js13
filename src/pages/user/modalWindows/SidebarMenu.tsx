import React, { useState } from 'react';
import { Drawer, styled, SelectChangeEvent } from '@mui/material';
import MainMenu from './MainMenu';
import SelectSpesialist from './SelectSpesialist';
import SelectDate from './selectData/SelectDate';

interface SidebarMenuProps {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ open, toggleDrawer }) => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [activeComponent, setActiveComponent] = useState<string>('main');

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setSelectedValue(event.target.value);
  };

  const handleClose = () => {
    setActiveComponent('main');
    toggleDrawer(false);
  };

  const renderContent = () => {
    switch (activeComponent) {
      case 'specialist':
        return <SelectSpesialist setActiveComponent={setActiveComponent} />;
      case 'date':
        return (
          <SelectDate
            setActiveComponent={setActiveComponent}
            handleClose={handleClose}
          />
        );
      default:
        return (
          <MainMenu
            handleClose={handleClose}
            selectedValue={selectedValue}
            handleSelectChange={handleSelectChange}
            setActiveComponent={setActiveComponent}
          />
        );
    }
  };

  return (
    <CustomDrawer anchor="right" open={open} onClose={handleClose}>
      {renderContent()}
    </CustomDrawer>
  );
};

export default SidebarMenu;

const CustomDrawer = styled(Drawer)(() => ({
  '& .MuiDrawer-paper': {
    width: '380px',
    height: '100%',
    position: 'fixed',
    right: 0,
    backgroundColor: '#f3f1f1',
  },
}));
