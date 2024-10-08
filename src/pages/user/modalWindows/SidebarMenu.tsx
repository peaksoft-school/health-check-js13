import { FC, useState } from 'react';
import { Drawer, styled } from '@mui/material';
import MainMenu from './MainMenu';
import SelectSpesialist from './selectSpesialist/SelectSpesialist';
import SelectDate from './selectData/SelectDate';
import Entry from './continue/Entry';
import { useAppDispatch } from '../../../hooks/customHooks';
import {
  clearSelectChoose,
  clearSelectData,
  clearSelectSpesialist,
} from '../../../store/slices/siteBarMenu/sitBarMenu';

interface SidebarMenuProps {
  open: boolean;
  toggleDrawer: () => void;
}

const SidebarMenu: FC<SidebarMenuProps> = ({ open, toggleDrawer }) => {
  const dispatch = useAppDispatch();

  const [activeComponent, setActiveComponent] = useState<string>('main');

  const handleClose = () => {
    setActiveComponent('main');
    toggleDrawer();

    dispatch(clearSelectSpesialist());
    dispatch(clearSelectChoose());
    dispatch(clearSelectData());
  };

  const handleContinueClick = () => {
    setActiveComponent('main');
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
      case 'continue':
        return (
          <Entry
            handleContinueClick={handleContinueClick}
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
