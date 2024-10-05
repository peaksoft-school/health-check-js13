import { Box, Typography, styled } from '@mui/material';
import Button from '../UI/Button';
import index from '../../utils/constants/index.json';
import { useNavigate } from 'react-router-dom';

const OurService = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Box className="box">
        <Box className="textBox">
          <Typography variant="h3">
            Наши <span className="service">услуги</span>
          </Typography>
          <Typography>
            За все время работы клиника приняла более 1 млн. пациентов.
          </Typography>
        </Box>
        <Box className="serviceBox">
          {index.splice(0, 9).map(({ img, id, name }) => (
            <Box key={id}>
              <Box className="content" onClick={() => navigate('services')}>
                <img className="img" src={img} alt="img" />
              </Box>
              <Typography className="text" variant="body1">
                {name}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box className="float">
          <Button variant="outlined" onClick={() => navigate('services')}>
            Смотреть все
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default OurService;

const Container = styled(Box)(() => ({
  width: '100%',
  padding: '20px',
  margin: '20px auto',
  minWidth: '1200px',
  maxWidth: '1440px',

  '.box': {
    width: '75rem',
    minHeight: '6.25rem',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center'
  },
  '.textBox': {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: '20px',
    gap: '20px',
  },
  '.float': {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    width:"20%"
  },
  '.service': {
    color: 'green',
  },
  '.serviceBox': {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '200px',
  },
  '.content': {
    width: '100px',
    display: 'flex',
    flexDirection: 'column',
    height: '100px',
    border: '1px solid #DEDEDE',
    borderRadius: '10px',
    marginBottom: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.2s',
    ':hover': {
      cursor: 'pointer',
      backgroundColor: '#027B44',
      '.img': {
        filter: 'brightness(0) invert(1)',
      },
    },
  },
  '.img': {
    width: '70px',
    height: '70px',
    transition: 'filter 0.3s ',
  },
  '.text': {
    fontSize: '12px',
    textAlign: 'center',
  },
}));
