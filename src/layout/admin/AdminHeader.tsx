import { FC, useState } from 'react';
import { Box, styled } from '@mui/material';
import Medcheck from '../../assets/images/HEALTHCHECK.png';
import {
  StyledContainer,
  StyledIconsContainer,
  StyledMapContainer,
  StyledHealthCheck,
  HeaderButton,
} from './adminStyle';
import { links } from '../../utils/constants/adminLinks';
import { NavLink, useNavigate } from 'react-router-dom';
import SelectTwo from '../../components/UI/SelectTwo';
import { useAppDispatch } from '../../hooks/customHooks';
import { logout } from '../../store/slices/auth/authSlice';

const AdminHeader: FC = () => {
  const [adminOption, setAdminOption] = useState<string>('Администратор'); // состояние для Select
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const options = [
    {
      label: 'Администратор',
      value: 'Администратор',
    },
    {
      label: 'Выйти',
      value: 'Выйти',
    },
  ];

  const handlerChangeHome = (event: any) => {
    const selectedOption = event.target.value;
    setAdminOption(selectedOption);
    switch (selectedOption) {
      case 'Выйти':
        dispatch(logout({ navigate }));
        break;

      default:
        return;
    }
  };

  return (
    <StyledContainer>
      <StyledIconsContainer>
        <StyledHealthCheck src={Medcheck} alt="medcheck" />
      </StyledIconsContainer>
      <StyledMapContainer>
        {links.map(link => (
          <Box key={link.value}>
            <HeaderButton>
              <NavLinkStyled to={link.to} end>
                {link.value}
              </NavLinkStyled>
            </HeaderButton>
          </Box>
        ))}
      </StyledMapContainer>
      <Box>
        <SelectTwo
          style={{ width: '180px', border: 'none' }}
          options={options}
          onChange={handlerChangeHome}
          value={adminOption}
        />
      </Box>
    </StyledContainer>
  );
};

export default AdminHeader;

const NavLinkStyled = styled(NavLink)(() => ({
  textDecoration: 'none',
  color: '#808080',
  transition: 'color 0.3s ease, font-weight 0.3s ease',
  position: 'relative',
  '&.active': {
    color: '#252525',
    '&:after': {
      content: '""',
      position: 'absolute',
      left: '0',
      bottom: '-33px',
      width: '100%',
      height: '2px',
      backgroundColor: '#048741',
      transition: 'width 0.3s ease, left 0.3s ease',
    },
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    left: '50%',
    bottom: '-33px',
    width: '0',
    height: '2px',
    backgroundColor: '#252525',
    transition: 'width 0.3s ease, left 0.3s ease',
  },
}));
