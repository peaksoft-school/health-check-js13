import { Autocomplete, InputAdornment, styled, TextField } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '../../assets/icons/SearchIcon.svg';
import { useNavigate } from 'react-router-dom';

interface SearchItem {
  doctorName: string;
  href: string;
}

const doctorsData: SearchItem[] = [
  { doctorName: 'Нурслам Абдумаликов', href: 'doctors/15/infoDoctor' },
  { doctorName: 'Ернис Койчуманов', href: 'doctors/2/infoDoctor' },
  { doctorName: 'Анна Сидорова', href: 'doctors/3/infoDoctor' },
  { doctorName: 'Кутман Кубанычбеков', href: 'doctors/19/infoDoctor' },
  { doctorName: 'Азият Абдумаликов', href: 'doctors/11/infoDoctor' },
  { doctorName: 'Сыргабек Акбаралиев', href: 'doctors/12/infoDoctor' },
  { doctorName: 'Сыймык Бейшекеев', href: 'doctors/14/infoDoctor' },
  { doctorName: 'Дмитрий Козлов', href: 'doctors/4/infoDoctor' },
  { doctorName: 'Ольга Михайлова', href: 'doctors/6/infoDoctor' },
  { doctorName: 'Игорь Васильев', href: 'doctors/7/infoDoctor' },
  { doctorName: 'Мария Павлова', href: 'doctors/8/infoDoctor' },
  { doctorName: 'Станислав Кузнецов', href: 'doctors/9/infoDoctor' },
  { doctorName: 'Бекмырза Абулвакиров', href: 'doctors/17/infoDoctor' },
  { doctorName: 'Кардиология', href: 'doctors' },
  { doctorName: 'Неврология', href: 'doctors' },
  { doctorName: 'Ортопедия', href: 'doctors' },
  { doctorName: 'Психиатрия', href: 'doctors' },
  { doctorName: 'Урология', href: 'doctors' },
  { doctorName: 'Гинекология', href: 'doctors' },
  { doctorName: 'Гастроэнтерология', href: 'doctors' },
];

const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (query.trim()) {
      const foundItem = doctorsData.find(item =>
        item.doctorName.toLowerCase().includes(query.toLowerCase())
      );

      if (foundItem) {
        setQuery(foundItem.doctorName);
        handleSelection(foundItem);
      } else {
        console.log('Совпадений не найдено');
      }
    }
  };

  const handleSelection = (selectedItem: SearchItem) => {
    navigate(selectedItem.href);
  };

  const newArray = doctorsData.map(item => ({
    title: item.doctorName,
  }));

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
          const foundItem = doctorsData.find(
            item => item.doctorName === selectedValue
          );
          if (foundItem) handleSelection(foundItem);
        }}
        onInputChange={(e, newValue) => setQuery(newValue)}
        renderInput={params => (
          <Input
            {...params}
            value={query}
            variant="outlined"
            placeholder="Поиск по врачам"
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
