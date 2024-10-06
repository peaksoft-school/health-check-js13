import { InputAdornment, styled, TextField } from '@mui/material';
import SearchNavigationModal from '../../components/landingPage/SearchNavigationModal';
import { useAppDispatch } from '../../hooks/customHooks';
import { useState } from 'react';
import { searchGlobalThunk } from '../../store/user/searchThunk';
import Search from '../../assets/icons/SearchIcon.svg';
import { DataSearchHeader } from '../../utils/constants/searchHeaderDara';

const SearchHeaderNavigate = () => {
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  // const { searchAllData } = useAppSelector(state => state.userSlice);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const word = event.target.value;
    setSearchQuery(word);

    word.trim() && dispatch(searchGlobalThunk(word));
  };

  return (
    <ContentInput>
      <Input
        autoComplete="off"
        value={searchQuery}
        onChange={handleInputChange}
        fullWidth
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          ),
        }}
        type="text"
        placeholder="Поиск по сайту"
      />

      <SearchNavigationModal
        dataArr={DataSearchHeader}
        searchWord={searchQuery}
        inputValue={searchQuery}
      />
    </ContentInput>
  );
};

export default SearchHeaderNavigate;

const ContentInput = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '1.25rem',
  flex: '1',
  position: 'relative',

  '@media (max-width: 767px)': {
    marginLeft: '0',
    width: '100%',
    marginTop: '10px',
  },
}));

const Input = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '1.5rem',
    width: '100%',
    height: '2.5rem',
    backgroundColor: '#F3F1F1',
    padding: '0 20px 0 5px',
    '@media (max-width: 767px)': {
      width: '100%',
      height: 'auto',
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '1.5rem',
    border: 'none',
    outline: 'none',
  },
}));
