import { IconButton, styled } from '@mui/material';
import Button from '../../../../components/UI/Button';
import CloseIcon from '@mui/icons-material/Close';
import SuccessfullyIcon from '../../.././../assets/icons/SuccessfullyIcon.svg';
import { useAppDispatch, useAppSelector } from '../../../../hooks/customHooks';
import { FC, useState } from 'react';
import RejectedIcon from '../../../../assets/icons/RejectedIcon.svg';
import {
  clearSelectChoose,
  clearSelectData,
  clearSelectSpesialist,
} from '../../../../store/slices/siteBarMenu/sitBarMenu';

interface MainMenuProps {
  handleClose: () => void;
  enrollMore: () => void;
}

const OnlineEntry: FC<MainMenuProps> = ({ handleClose, enrollMore }) => {
  const dispatch = useAppDispatch();
  const { selectSpesialist, selectData } = useAppSelector(
    state => state.siteBarMenu
  );
  const [cancelModal, setCancelModal] = useState(false);
  const [finishCalcel, setFinishCalcel] = useState(false);
  const handleCancel = () => {
    setCancelModal(true);
  };
  const handleModalClose = () => {
    setCancelModal(false);
  };
  const handleFinishCalcel = () => {
    setCancelModal(false);
    setFinishCalcel(true);
  };
  const handleFinishCalcelClose = () => {
    setFinishCalcel(false);
    dispatch(clearSelectSpesialist());
    dispatch(clearSelectChoose());
    dispatch(clearSelectData());
  };

  return (
    <>
      <BoxHeaderStyle>
        <IconButton onClick={handleClose} aria-label="back">
          <CloseIcon />
        </IconButton>
        <H2>Online запись</H2>
      </BoxHeaderStyle>

      <SelectTime>
        <div
          style={{
            margin: '20px ',
          }}>
          <SuccessfullyIcon />
        </div>
        <h3>Вы записаны</h3>
        <p style={{ fontSize: '18px', margin: '10px' }}>
          {selectData?.week}, {selectData?.day} {selectData?.moon},
          {selectData?.hours}-{selectData?.hours}
        </p>

        <SpesialistContainer>
          <StyleImg src={selectSpesialist?.image} alt="" />

          <SpesialContainer>
            <p>{selectSpesialist?.name}</p>
            <div>{selectSpesialist?.position}</div>
            <div
              style={{
                fontSize: '14px',
              }}>
              <span
                style={{
                  color: '#FFD700',
                  marginRight: '5px',
                  fontSize: '18px',
                }}>
                {selectSpesialist?.reiting.star}
              </span>
              <span>{selectSpesialist?.reiting.num}</span>
            </div>
          </SpesialContainer>
        </SpesialistContainer>

        <MyButton onClick={handleCancel}>Отменить запись</MyButton>

        <Button onClick={enrollMore} sx={{ width: '100%', marginTop: '20px' }}>
          + Записаться еще
        </Button>
      </SelectTime>

      <CalcelModal style={{ display: cancelModal ? '' : 'none' }}>
        <CenterContainer>
          <ModalHeader>Отмена записи</ModalHeader>

          <ModalDescription>
            После отмены запись будет невозможно восстановить
          </ModalDescription>

          <ModalButton onClick={handleFinishCalcel} variant="outlined">
            Отменить запись
          </ModalButton>
          <ModalButton onClick={handleModalClose}>Закрыть</ModalButton>
        </CenterContainer>
      </CalcelModal>

      <CalcelModal style={{ display: finishCalcel ? '' : 'none' }}>
        <CenterContainer>
          <RecordCalcel onClick={handleFinishCalcelClose}>
            <RejectedIcon />
          </RecordCalcel>
          <RecordTitile>Запись отменена</RecordTitile>
          <ModalButton onClick={enrollMore}>Записаться еще</ModalButton>
        </CenterContainer>
      </CalcelModal>
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
  fontFamily: 'sans-serif',
  position: 'relative',
}));

const SpesialContainer = styled('div')(() => ({
  '& p ': { whiteSpace: 'nowrap', fontSize: '16px' },
  '& div': { whiteSpace: 'nowrap', color: 'gray', fontSize: '13px' },
}));

const StyleImg = styled('img')(() => ({
  width: '36px',
  borderRadius: '50%',
  margin: '0 15px',
}));

const SpesialistContainer = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  marginTop: '10px',
  backgroundColor: '#FFFFFF',
  borderRadius: '15px',
  fontFamily: 'sans-serif',
}));

const MyButton = styled('button')(() => ({
  border: 'none',
  backgroundColor: 'white',
  color: 'red',
  marginTop: '50px',
}));

const CalcelModal = styled('div')(() => ({
  position: 'absolute',
  backgroundColor: 'rgba(132, 132, 132, 0.5)',
  top: '0',
  bottom: '0',
  width: '100%',
}));

const CenterContainer = styled('div')(() => ({
  backgroundColor: 'white',
  width: '80%',
  borderRadius: '15px',
  position: 'absolute',
  bottom: '50%',
  left: '10%',
  fontSize: '16px',
  textAlign: 'center',
  fontFamily: 'sans-serif',
  padding: '0px 0 20px 0',
}));

const ModalHeader = styled('p')(() => ({
  borderBottom: '3px solid #e1dacc',
  padding: '20px',
  fontSize: '18px',
  fontWeight: '600',
}));

const ModalDescription = styled('p')(() => ({
  padding: '20px',
  color: 'gray',
}));

const ModalButton = styled(Button)(() => ({
  width: '85%',
  margin: '0px auto',
  marginTop: '10px',
}));

const RecordCalcel = styled('button')(() => ({
  border: 'none',
  backgroundColor: 'white',
  paddingTop: '30px',
}));

const RecordTitile = styled('p')(() => ({
  padding: '10px 0 20px 0',
  fontSize: '18px',
}));
