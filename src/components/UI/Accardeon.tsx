import { useState, ReactNode } from 'react';
import { styled, Box } from '@mui/material';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { ExpandMore } from '@mui/icons-material';

interface IProps {
  children?: ReactNode;
  title?: string;
  style?: any;
}

const Accordeon = ({ title, children, style }: IProps) => {
  const [expanded, setExpanded] = useState<string | boolean>(false);

  const handleChange = (panel: string) => (_: any, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <StyledAccordion
      expanded={expanded === 'panel1'}
      onChange={handleChange('panel1')}
      style={style}>
      <StyledAccordionSummary
        aria-controls="panel1d-content"
        id="panel1d-header">
        <Box>{title}</Box>
      </StyledAccordionSummary>

      <MuiAccordionDetails>
        <Box>{children}</Box>
      </MuiAccordionDetails>
    </StyledAccordion>
  );
};

export default Accordeon;

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
    expandIcon={<ExpandMore sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  fontFamily: '"Manrope", sans-serif',
  borderRadius: '6px',
  boxShadow: '1px 1px 5px 0px rgba(0, 0, 0, 0.15)',
  fontWeight: '500',
  borderLeft: '10px solid #048741',
  backgroundColor: 'rgb(219, 240, 229)',
  transition: 'background-color 0.3s linear',

  '&:hover': {
    backgroundColor: '#048741',
    borderRadius: '6px',
    color: 'white',
  },

  '& svg': {
    boxSizing: 'content-box',
    padding: '4px',
    backgroundColor: 'white',
    borderRadius: '50%',
    border: '1px solid green',
    transform: 'rotate(-90deg)',

    '& > path': {
      fill: 'green',
    },
  },

  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    width: 'auto',
    backgroundColor: 'white',
    transform: 'rotate(90deg)',
    borderRadius: '50%',
    fill: '#048741',
    fontFamily: '"Manrope", sans-serif',

    '&:hover': {
      borderRadius: '50%',
      backgroundColor: 'white',
      stroke: 'white',
    },
  },

  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(2),
  },

  '&.Mui-expanded': {
    backgroundColor: '#048741 ',
    color: '#FFF',
    borderRadius: '6px',
  },
}));
