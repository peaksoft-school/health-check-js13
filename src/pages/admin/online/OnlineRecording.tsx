import { FC, useState } from 'react';
import Button from '../../../components/UI/Button';
import Input from '../../../components/UI/Input';
import { styled } from '@mui/material';
import SearchIcon from '../../../assets/icons/SearchIcon.svg';
import Icon from '../../../assets/icons/Pluse.svg';
import Table from '../../../components/UI/Table';
import { TableOne } from '../../../utils/constants/Column';
import tableOne from '../../../utils/constants/tableOne.json';

const OnlineRecording: FC = () => {
  const [activeOption, setActiveOption] = useState('Онлайн-запись');

  const handleOptionClick = (option: string) => {
    setActiveOption(option);
  };

  return (
    <div style={{ background: '#f5f5f5' }}>
      <OnlineRecordingContainer>
        <div className="container">
          <Content>
            <ContentOption>
              <OnlineRecordingSpan>Онлайн-запись</OnlineRecordingSpan>
              <ButtonClass>
                <Icon />
                Добавить запись
              </ButtonClass>
            </ContentOption>
            <div>
              <ContentOptions>
                <Option
                  isActive={activeOption === 'Онлайн-запись'}
                  onClick={() => handleOptionClick('Онлайн-запись')}>
                  Онлайн-запись
                </Option>
                <Option
                  isActive={activeOption === 'Расписание'}
                  onClick={() => handleOptionClick('Расписание')}>
                  Расписание
                </Option>
              </ContentOptions>
              <Input
                border="none"
                size="small"
                placeholder="Поиск"
                className="InputAdmin"
                IconEnd={<SearchIcon />}
              />
            </div>
            <div style={{ marginTop: '20px' }}>
              <Table columns={TableOne} data={tableOne} />
            </div>
          </Content>
        </div>
      </OnlineRecordingContainer>
    </div>
  );
};

export default OnlineRecording;


const OnlineRecordingContainer = styled('div')({
  width: '100%',
  maxWidth: '1440px',
  minWidth: '1200px',
  margin: '0 auto',
});

const Content = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  paddingInline: '70px',
  minHeight: '100vh',
  '.ContentOptions': {
    display: 'flex',
    gap: '30px',
  },
  '& .InputAdmin': {
    width: '600px',
    height: '100%',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: 'white',
    marginTop: '34px',
  },
});

const ContentOption = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '40px 0 0 0',
});

const OnlineRecordingSpan = styled('span')({
  fontSize: '22px',
  fontFamily: '"Poppins", sans-serif',
  // marginLeft: '70px',
  // margin: '40px 0 0 0',
});

const ButtonClass = styled(Button)(() => ({
  '&.MuiButtonBase-root': {
    width: '209px',
    height: '44px',
    borderRadius: '10px',
    padding: '0 10px 0 1px',
    fontSize: '14px',
    // marginRight: '70px',
    display: 'flex',
    gap: '10px',
    // justifyContent: 'flex-end',
  },
}));

const ContentOptions = styled('div')({
  display: 'flex',
  gap: '30px',
  margin: '34px 0 0 0',
});

interface OptionProps {
  isActive: boolean;
}

// const Option = styled('p')<OptionProps>(({ isActive }) => ({
//   color: isActive ? '#048741' : '#959595',
//   fontSize: '12px',
//   fontFamily: '"Poppins", sans-serif',
//   cursor: 'pointer',
//   borderBottom: isActive ? '2px solid #048741' : '2px solid transparent',
//   transition: 'opacity 0.15s, transform 0.3s ease',
//   transform: isActive ? 'scale(1.1)' : 'scale(1)',
//   // opacity: isActive ? 1 : 0.8,
// }));
// ?????????

const Option = styled('p')<OptionProps>(({ isActive }) => ({
  color: isActive ? '#048741' : '#959595',
  fontSize: '12px',
  fontFamily: '"Poppins", sans-serif',
  cursor: 'pointer',
  borderBottom: isActive ? '2px solid #048741' : '2px solid transparent',
  transition: 'border-color 0.3s ease, color 0.3s ease',
  opacity: isActive ? 1 : 0.8,
}));

// !!!!!!!
