import { useState, useEffect } from 'react';
import { SearchResult } from '../landingPage/SearchNavigationModal';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

type MeatballsType = {
  data: SearchResult[];
  onClick?: (key: number, cardId: number) => number;
  inputValue?: string;
};

const ModalSearch = ({ data, inputValue }: MeatballsType) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const filteredData = data?.filter(({ search }) => search && search.trim());

  useEffect(() => {
    if (inputValue && filteredData.length > 0) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [inputValue, filteredData]);

  const handleClick = (status: string) => {
    if (status === 'position') {
      navigate('doctors');
    } else {
      navigate('services');
    }
  };

  return (
    <>
      <ModalBackground show={showModal}>
        <ModalContent>
          {filteredData.map(({ search, status }, index) => (
            <MyButton key={index} onClick={() => handleClick(status)}>
              {search}
            </MyButton>
          ))}
        </ModalContent>
      </ModalBackground>
    </>
  );
};

export default ModalSearch;

const ModalBackground = styled('div')<{ show: boolean }>(({ show }) => ({
  display: show ? 'block' : 'none',
  position: 'absolute',
  zIndex: 10,
  left: '50%',
  top: '60px',
  transform: 'translate(-50%)',
}));

const ModalContent = styled('div')({
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.4)',
  width: '300px',
  textAlign: 'center',
  padding: '10px 0px',
});

const MyButton = styled(Button)({
  width: '90%',
  backgroundColor: '#fff',
  borderRadius: '10px',
  padding: '5px',
  margin: '5px auto',
  color: 'black',
  textTransform: 'none',

  '&:hover': {
    backgroundColor: '#d7e2ea',
  },
});
