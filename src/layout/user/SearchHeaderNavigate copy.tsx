import { Autocomplete, InputAdornment, styled, TextField } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '../../assets/icons/SearchIcon.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/customHooks';
import { useNavigate } from 'react-router-dom';
import { searchGlobalThunk } from '../../store/globalSeach/searchThunk';

interface SearchItem {
  id: number;
  patientFullName: string;
  phoneNumber: string;
  email: string;
  position: string;
  doctorFullName: string;
  dateAndTime: string;
  status: string;
}

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { searchAllData } = useAppSelector(state => state.globalSearchAll) as {
    searchAllData: SearchItem[];
  };

  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (query.trim()) {
      dispatch(searchGlobalThunk(query));
      const foundItem = searchAllData.find(
        item =>
          item.doctorFullName.toLowerCase().includes(query.toLowerCase()) ||
          item.position.toLowerCase().includes(query.toLowerCase())
      );

      if (foundItem) {
        const completedQuery = foundItem.doctorFullName
          .toLowerCase()
          .includes(query.toLowerCase())
          ? foundItem.doctorFullName
          : foundItem.position;

        setQuery(completedQuery); // Дополняем введённое значение
        handleSelection(completedQuery); // Переходим по результату
      } else {
        console.log('No match found');
      }
    }
  };

  const handleSelection = (value: string) => {
    const foundItem = searchAllData.find(
      item => item.doctorFullName === value || item.position === value
    );

    if (foundItem) {
      if (foundItem.position === value) {
        navigate('doctors');
      } else if (foundItem.doctorFullName === value) {
        navigate('doctors');
      }
    } else {
      console.log('No match found');
    }
  };

  const newArray = searchAllData.flatMap(item => [
    { title: item.doctorFullName },
    { title: item.position },
  ]);

  return (
    <ContentInput onSubmit={handleSearch}>
      <Autocomplete
        freeSolo
        options={newArray}
        getOptionLabel={option =>
          typeof option === 'string' ? option : option.title
        }
        onChange={(e, value) => {
          const selectedValue =
            typeof value === 'string' ? value : value?.title || '';
          setQuery(selectedValue);
          handleSelection(selectedValue);
        }}
        onInputChange={(e, newValue) => setQuery(newValue)}
        renderInput={params => (
          <Input
            {...params}
            value={query}
            variant="outlined"
            placeholder="Поиск в Google или введите URL"
            fullWidth
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSearch(e);
              }
            }}
          />
        )}
      />
    </ContentInput>
  );
};

export default Search;

const ContentInput = styled('form')(() => ({
  width: '100%',
  zIndex: '10000',
}));

const Input = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '1.5rem',
    height: '2.5rem',
    backgroundColor: '#F3F1F1',
    // padding: '20px',
    padding: '0 20px 0 11px',
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
