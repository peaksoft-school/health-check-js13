import { styled, Link, Breadcrumbs } from '@mui/material';
import { FC } from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Types {
  items: BreadcrumbItem[];
}

const BreadCrumbs: FC<Types> = ({ items }) => {
  return (
    <StyledBreadCrumbs separator="›" aria-label="breadcrumbs">
      {items.map(({ label, href }, i) => (
        <StyledLink
          key={label}
          islast={String(i === items.length - 1)}
          href={href || undefined}>
          {label}
        </StyledLink>
      ))}
    </StyledBreadCrumbs>
  );
};

export default BreadCrumbs;

const StyledBreadCrumbs = styled(Breadcrumbs)(() => ({
  marginTop: '30px',
}));

const StyledLink = styled(Link)<{ islast: string }>(({ islast }) => ({
  fontSize: '14px',
  color: islast === 'true' ? '#048741' : 'inherit',
  cursor: islast !== 'true' ? 'pointer' : 'default',
  textDecoration: 'none',
}));
