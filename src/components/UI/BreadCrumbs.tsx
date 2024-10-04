import { styled } from '@mui/material';
import { useLocation, Link } from 'react-router-dom';

const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split('/').filter(x => x);

  const breadcrumbNameMap: { [key: string]: string } = {
    '/about': 'О клинике',
    '/services': 'Услуги',
    '/doctors': 'Врачи',
    '/price': 'Прайс',
    '/contacts': 'Контакты',
  };

  return (
    <BreadcrumbNav>
      <BreadcrumbList>
        {pathname !== '/' && (
          <BreadcrumbItem>
            <BreadcrumbLink to="/">Главная</BreadcrumbLink>
          </BreadcrumbItem>
        )}
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const breadcrumbLabel = breadcrumbNameMap[to] || value;

          return (
            <BreadcrumbItem key={to}>
              <BreadcrumbLinkPage to={to}>{breadcrumbLabel}</BreadcrumbLinkPage>
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbNav>
  );
};

export default BreadCrumbs;

const BreadcrumbNav = styled('nav')({
  paddingTop: '16px',
});

const BreadcrumbList = styled('ul')({
  display: 'flex',
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

const BreadcrumbItem = styled('li')({
  marginRight: '6px',
  fontFamily: '"Poppins", sans-serif',
  '&:not(:last-child)::after': {
    content: '">"',
    marginLeft: '6px',
    verticalAlign: 'middle',
    color: '#959595',
  },
});

const BreadcrumbLink = styled(Link)({
  textDecoration: 'none',
  color: '#959595',
  fontWeight: 500,
});

const BreadcrumbLinkPage = styled(Link)({
  textDecoration: 'none',
  color: '#048741',
  fontWeight: 500,
  fontStyle: '14px',
});
