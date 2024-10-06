import { Breadcrumbs as MuiBreadcrumbs, Typography } from '@mui/material';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbsProps {
  data: { label: string; href: string }[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ data }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  let breadcrumbsToRender = [];

  if (pathnames.length === 0) {
    breadcrumbsToRender = [null];
  } else if (pathnames.length === 1) {
    breadcrumbsToRender = ['', pathnames[0]];
  } else {
    breadcrumbsToRender = ['', ...pathnames.slice(-4)];
  }

  const filteredBreadcrumbs = breadcrumbsToRender.map(
    value =>
      data.find(item => item.href === value) || { label: value, href: value }
  );

  const findLabel = (href: string) => {
    const match = filteredBreadcrumbs.find(item => item.href === href);
    return match ? match.label : href;
  };

  return (
    <MuiBreadcrumbs aria-label="breadcrumb" separator="›">
      {breadcrumbsToRender.map((value, index) => {
        const to = `/${breadcrumbsToRender.slice(0, index + 1).join('/')}`;
        const isLast = index === breadcrumbsToRender.length - 1;

        return isLast ? (
          <Typography
            color="text.primary"
            key={to}
            style={{ color: '#048741', fontSize: '16px' }}>
            {value === '' ? 'Главная' : findLabel(value)}
          </Typography>
        ) : (
          <Link
            to={to}
            key={to}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              fontSize: '16px',
            }}>
            {value === '' ? 'Главная' : findLabel(value)}
          </Link>
        );
      })}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
