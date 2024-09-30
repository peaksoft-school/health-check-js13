import { Box, styled, Typography } from '@mui/material';
import BreadCrumbs from '../../../components/UI/BreadCrumbs';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const breadcrumbs = [
  { label: 'Личный кабинет', href: '/' },
  { label: 'Профиль' },
];
const Link = [
  { title: 'Личные данные', to: 'pesonalData' },
  { title: 'Сменить пароль', to: 'profileChangePassword' },
];

const ProfilePersonalData = () => {
  const location = useLocation();

  return (
    <StyleContainer>
      <Box>
        <BreadCrumbs items={breadcrumbs} />
      </Box>

      <StyleH1 variant="h1">Профиль</StyleH1>

      <Box>
        {Link.map((item, id) => {
          const isActive = location.pathname
            .split('/')
            .some(path => path === item.to.split('/').pop());

          return (
            <StyledNavLink
              key={id}
              to={item.to}
              className={isActive ? 'active' : ''}>
              {item.title}
            </StyledNavLink>
          );
        })}
      </Box>

      <StyleOutlet>
        <Outlet />
      </StyleOutlet>
    </StyleContainer>
  );
};

export default ProfilePersonalData;

const StyleContainer = styled(Box)(() => ({
  maxWidth: '1440px',
  margin: '0 auto',
  padding: '0 120px',
  fontFamily: 'sans-serif',
}));

const StyleH1 = styled(Typography)(() => ({
  fontSize: '32px',
  padding: '25px 0',
}));

const StyledNavLink = styled(NavLink)(() => ({
  color: 'grey',
  textDecoration: 'none',
  paddingRight: '40px',
  textTransform: 'lowercase',
  fontSize: '18px',

  '&.active': {
    color: 'green',
    textDecoration: 'underline',
  },
}));

const StyleOutlet = styled(Box)(() => ({
  padding: '15px 0 100px 0',
}));
