import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SearchResult } from '../landingPage/SearchNavigationModal';
import { useNavigate } from 'react-router-dom';

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
    console.log(status);
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

const ModalBackground = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: absolute;
  z-index: 10;
  left: 50%;
  top: 60px;
  transform: translate(-50%);
`;

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
  width: 300px;
  text-align: center;
  padding: 10px 0px;
`;

const MyButton = styled.button`
  width: 90%;
  border: none;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px;
  margin: 5px auto;

  &:hover {
    background-color: #d7e2ea;
  }
`;
