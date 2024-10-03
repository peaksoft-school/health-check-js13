import React, { useState } from 'react';
import { Drawer, styled } from '@mui/material';
import MainMenu from './MainMenu';
import SelectSpesialist from './selectSpesialist/SelectSpesialist';
import SelectDate from './selectData/SelectDate';

interface SidebarMenuProps {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ open, toggleDrawer }) => {
  const [activeComponent, setActiveComponent] = useState<string>('main');

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
    backgroundColor: '#dbe4eb',
  },
}));
