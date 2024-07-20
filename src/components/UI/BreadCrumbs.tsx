// import { FC } from 'react';
// import { Breadcrumbs, Link, Typography, styled } from '@mui/material';

// interface BreadCrumbsProps {
//   text: string;
//   to: string;
//   before?: string;
//   additionalText?: string;
// }

// const BreadCrumbs: FC<BreadCrumbsProps> = ({ text, to, before, additionalText }) => {
//   const breadcrumbsItems = [
//     { label: before, href: to },
//     { label: text },
//     additionalText && { label: additionalText, href: '' },
//   ].filter(Boolean);

//   return (
//     <StyledBreadcrumbs separator="›" aria-label="breadcrumb">
//       {breadcrumbsItems.map(({ label, href }, i) => (
//         <StyledLink
//           key={label}
//           islast={String(i === breadcrumbsItems.length - 1)}
//           href={href}
//         >
//           {label}
//         </StyledLink>
//       ))}
//     </StyledBreadcrumbs>
//   );
// };

// export default BreadCrumbs;

// const StyledBreadcrumbs = styled(Breadcrumbs)(() => ({
//   marginBottom: '30px',
// }));

// const StyledLink = styled(Link)(({ islast }) => ({
//   fontSize: '14px',
//   color: islast === 'true' ? '#048741' : 'inherit',
//   cursor: islast !== 'true' && 'pointer',
//   textDecoration: 'none',
// }));

// !!!

import React from 'react';
import { Breadcrumbs, Link, Typography, styled } from '@mui/material';

const BreadCrumbs = ({ text, to, before, additionalText }) => {
  const breadcrumbsItems = [
    { label: before, href: to },
    { label: text },
    additionalText && { label: additionalText, href: '' },
  ].filter(Boolean);

  return (
    <StyledBreadCrumbs separator="›" aria-label="breadcrumbs">
      {breadcrumbsItems?.map(({ label, href }, i) => (
        <StyledLink
          key={label}
          islast={String(i === breadcrumbsItems.length - 1)}
          href={href}>
          {label}
        </StyledLink>
      ))}
    </StyledBreadCrumbs>
  );
};

export default BreadCrumbs;

const StyledBreadCrumbs = styled(Breadcrumbs)(() => ({
  marginBottom: '30px',
}));

const StyledLink = styled(Link)(({ islast }) => ({
  fontSize: '14px',
  color: islast === 'true' ? '#048741' : 'inherit',
  cursor: islast !== 'true' && 'pointer',
  textDecoration: 'none',
}));
