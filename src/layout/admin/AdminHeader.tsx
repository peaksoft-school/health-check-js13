import { FC, useState, MouseEvent } from 'react';
import { MenuItem, Box, Button, Popover, styled } from '@mui/material';
import Medcheck from '../../assets/images/HEALTHCHECK.png';
import {
  StyledContainer,
  StyledIconsContainer,
  StyledMapContainer,
  StyledHealthCheck,
  HeaderButton,
  CustomArrowIcon,
} from './adminStyle';
import { links } from '../../utils/constants/adminLinks';
import { NavLink } from 'react-router-dom';

const AdminHeader: FC = () => {
  const [activeButton, setActiveButton] = useState<string>('Заявки');
  const [adminOption, setAdminOption] = useState<string>('Администратор');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleButtonClick = (text: string) => () => setActiveButton(text);

  const handlePopoverOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleAdminOptionClick = (option: string) => {
    setAdminOption(option);
    handlePopoverClose();
  };

  const open = Boolean(anchorEl);

  return (
    <StyledContainer>
      <StyledIconsContainer>
        <StyledHealthCheck src={Medcheck} alt="medcheck" />
      </StyledIconsContainer>
      <StyledMapContainer>
        {links.map(link => (
          <Box key={link.value}>
            <HeaderButton
              active={activeButton === link.value}
              onClick={handleButtonClick(link.value)}>
              <NavLinkStyled to={link.to} active={activeButton === link.value}>
                {link.value}
              </NavLinkStyled>
            </HeaderButton>
          </Box>
        ))}
      </StyledMapContainer>
      <Box>
        <Button
          onClick={handlePopoverOpen}
          endIcon={
            <CustomArrowIcon
              style={{
                transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
              }}>
              <path
                fill="currentColor"
                d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"
              />
            </CustomArrowIcon>
          }>
          {adminOption}
        </Button>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}>
          <Box>
            <MenuItem onClick={() => handleAdminOptionClick('Администратор')}>
              Администратор
            </MenuItem>
            <MenuItem onClick={() => handleAdminOptionClick('Выход')}>
              Выход
            </MenuItem>
          </Box>
        </Popover>
      </Box>
    </StyledContainer>
  );
};

export default AdminHeader;

const NavLinkStyled = styled(NavLink)<{ active?: boolean }>(({ active }) => ({
  textDecoration: 'none',
  color: active ? '#252525' : '#808080',
  transition: 'color 0.3s ease, font-weight 0.3s ease',
  position: 'relative',
  '&:after': active
    ? {
        content: '""',
        position: 'absolute',
        left: '0',
        bottom: '-2px',
        width: '100%',
        height: '2px',
        transition: 'width 0.3s ease, left 0.3s ease',
      }
    : {
        content: '""',
        position: 'absolute',
        left: '50%',
        bottom: '-2px',
        width: '0',
        height: '2px',
        transition: 'width 0.3s ease, left 0.3s ease',
      },
}));
