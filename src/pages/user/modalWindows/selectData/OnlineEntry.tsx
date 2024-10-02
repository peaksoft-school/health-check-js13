import { IconButton, Modal, styled } from '@mui/material';
import Button from '../../../../components/UI/Button';
import CloseIcon from '@mui/icons-material/Close';
import SuccessfullyIcon from '../../.././../assets/icons/SuccessfullyIcon.svg';

const OnlineEntry = ({ continueOnline, handleClose }) => {
  return (
    <>
      <BoxHeaderStyle>
        <Modal open={false}>
          <MyModal>sfre</MyModal>
        </Modal>
        <IconButton onClick={handleClose} aria-label="back">
          <CloseIcon />
        </IconButton>
        <H2>Online запись</H2>
      </BoxHeaderStyle>
      <SelectTime>
        <SuccessfullyIcon />
        <h3>Вы записаны</h3>
        <p>Среда, 15-января, 14:30-15:00</p>

        <div>
          <img src="" alt="foto" />
          <p>Манак Елена</p>
          <p>Окулист</p>

          <div>
            <img src="" alt="" />
            <span>166</span>
          </div>
        </div>

        <button>Отменить запись</button>

        <Button
          sx={{ width: '100%', marginTop: '20px' }}
          onClick={continueOnline}>
          + Записаться еще
        </Button>
      </SelectTime>
    </>
  );
};

export default OnlineEntry;

const BoxHeaderStyle = styled('div')(() => ({
  backgroundColor: 'white',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  height: '56px',
  position: 'relative',
}));

const H2 = styled('h2')(() => ({
  fontSize: '18px',
  fontWeight: '700',
  color: '#048741',
  margin: '0 auto',
  paddingRight: '50px',
}));

const SelectTime = styled('div')(() => ({
  width: '95%',
  backgroundColor: 'white',
  margin: '10px',
  borderRadius: '16px',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const MyModal = styled('div')(() => ({
  position: 'relative',
  right: '0',
}));
