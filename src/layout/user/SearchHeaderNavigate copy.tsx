import { Autocomplete, InputAdornment, styled, TextField } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '../../assets/icons/SearchIcon.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/customHooks';
import { searchGlobalThunk } from '../../store/user/searchThunk';
import { useNavigate } from 'react-router-dom';

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
  const { searchAllData } = useAppSelector(state => state.userSlice) as {
    searchAllData: SearchItem[];
  };

  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(searchGlobalThunk(query));
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
          />
        )}
      />
    </ContentInput>
  );
};

export default Search;

const ContentInput = styled('form')(() => ({
  width: '100%',
}));

const Input = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '1.5rem',
    height: '2.5rem',
    backgroundColor: '#F3F1F1',
    padding: '20px',
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
