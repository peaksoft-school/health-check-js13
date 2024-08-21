/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, ReactNode } from 'react';
import { styled, Box, Typography } from '@mui/material';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { ExpandMore } from '@mui/icons-material';

interface IProps {
  children?: ReactNode;
  title?: string;
  price?: string;
}

const Accordionst = ({ title, price, children }: IProps) => {
  const [expanded, setExpanded] = useState<string | boolean>(false);

  const handleChange = (panel: string) => (_: any, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <StyledAccordion
      expanded={expanded === 'panel1'}
      onChange={handleChange('panel1')}>
      <StyledAccordionSummary
        aria-controls="panel1d-content"
        id="panel1d-header">
        <Box display="flex" justifyContent="space-between" width="100%" >
          <Typography>{title}</Typography>
          <Typography>{price}</Typography>
        </Box>
      </StyledAccordionSummary>

      <MuiAccordionDetails>
        <Box>{children}</Box>
      </MuiAccordionDetails>
    </StyledAccordion>
  );
};

export default Accordionst;

const StyledAccordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({

  '&:not(:last-child)': {
    borderBottom: 0,
    
  },
  '&:before': {
    display: 'none',
  
     
  },
}));

const StyledAccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMore sx={{ fontSize: '1.5rem', }} />}
    {...props}
  />
))(({ theme }) => ({
  height: '4rem',
  fontFamily: '"Manrope", sans-serif',
  borderBottom:"1px solid #60626333",
  fontWeight: '500',
  backgroundColor: 'white',
  transition: 'background-color 0.3s linear',

  '&:hover': {
    backgroundColor: '#f5f5f5',
  },

  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },

  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(2),
  },

  '&.Mui-expanded': {
    backgroundColor: '#f5f5f5',
  },
}));
