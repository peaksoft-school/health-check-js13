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
  const [activeButton, setActiveButton] = useState<string>('Заявки');
  const [adminOption, setAdminOption] = useState<string>('Администратор'); // состояние для Select
  const handleButtonClick = (text: string) => () => setActiveButton(text);
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
        <SelectTwo
          style={{ width: '180px', border: 'none' }}
          options={options}
          onChange={handlerChangeHome}
          value={adminOption} // Значение, которое будет отображаться
        />
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
