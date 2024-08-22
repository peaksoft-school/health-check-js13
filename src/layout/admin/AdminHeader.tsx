import { FC, useState } from 'react';
import { MenuItem, Box, SelectChangeEvent, styled } from '@mui/material';
import Medcheck from '../../assets/images/HEALTHCHECK.png';
import {
  StyledContainer,
  StyledIconsContainer,
  StyledMapContainer,
  StyledHealthCheck,
  HeaderButton,
  CustomArrowIcon,
  AdminSelect,
} from './adminStyle';
import { links } from '../../utils/constants/adminLinks';
import { NavLink } from 'react-router-dom';

const AdminHeader: FC = () => {
  const [activeButton, setActiveButton] = useState<string>('Заявки');
  const [adminOption, setAdminOption] = useState<string>('Администратор');

  const handleAdminChange = (event: SelectChangeEvent<unknown>) => {
    setAdminOption(event.target.value as string);
  };

  const handleButtonClick = (text: string) => () => setActiveButton(text);

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
        <AdminSelect
          value={adminOption}
          onChange={handleAdminChange}
          displayEmpty
          IconComponent={({ className, open }) => (
            <CustomArrowIcon
              className={className}
              style={{
                transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
              }}>
              <path
                fill="currentColor"
                d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"
              />
            </CustomArrowIcon>
          )}
          MenuProps={{
            PaperProps: {
              style: {
                marginTop: '5px',
              },
            },
          }}>
          <MenuItem value="Администратор">Администратор</MenuItem>
          <MenuItem value="Выход">Выход</MenuItem>
        </AdminSelect>
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
