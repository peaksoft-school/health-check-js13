// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';

// const TimeInput = () => {
//   const [time, setTime] = useState('00:00');

//   const handleChange = (event) => {
//     const value = event.target.value;
//     const formattedValue = formatTime(value);
//     setTime(formattedValue);
//   };

//   const formatTime = (value) => {
//     // Ар кандай символдорду тазалайт жана 2 цифралуу форматка келтирет
//     const cleanedValue = value.replace(/\D/g, '').slice(0, 4); // 4 цифрадан ашык болбосун
//     const hours = cleanedValue.slice(0, 2);
//     const minutes = cleanedValue.slice(2, 4);

//     if (cleanedValue.length < 3) {
//       return cleanedValue; // 2 цифра болсо, жаңы форматка келтирбейт
//     }

//     return `${hours}:${minutes}`;
//   };

//   return (
//     <TextField
//       label="Саат"
//       value={time}
//       onChange={handleChange}
//       placeholder="HH:MM"
//       inputProps={{ maxLength: 5 }} // Максималдуу узундук 5 символ
//     />
//   );
// };

// export default TimeInput;

// !!!!!!!!!!!!!!! 101010101101010

// import React, { useState } from 'react';
// import { styled } from '@mui/material/styles';
// import TextField from '@mui/material/TextField';

// const TimeInput = () => {
//   // const TimeInput = ({ label, value, onChange }) => {
//   const [time, setTime] = useState('00:00');

//   const handleChange = event => {
//     const value = event.target.value;
//     const formattedValue = formatTime(value);
//     setTime(formattedValue);
//   };

//   const formatTime = value => {
//     const cleanedValue = value.replace(/\D/g, '').slice(0, 4);
//     const hours = cleanedValue.slice(0, 2);
//     const minutes = cleanedValue.slice(2, 4);

//     if (cleanedValue.length < 3) {
//       return cleanedValue;
//     }

//     return `${hours}:${minutes}`;
//   };

//   return (
//     <StyledTimeInput
//       label="Саат"
//       // label={label}
//       value={time}
//       // value={value}
//       onChange={handleChange}
//       // onChange={onChange}
//       // placeholder="HH:MM"
//       placeholder="00:00"
//       inputProps={{ maxLength: 5 }} // Максималдуу узундук 5 символ
//     />
//   );
// };

// export default TimeInput;

// // Стилизацияланган TextField компоненти
// const StyledTimeInput = styled(TextField)({
//   '&.Mui-focused': {
//     width: '80px',
//     height: '38px',
//     borderRadius: '20px',
//   },
// });
// !!!!!!!!! ю.юю.ю..ю.ю..ю..ю.....

// import React, { useState } from 'react';
// import { styled } from '@mui/material/styles';
// import TextField from '@mui/material/TextField';

// const TimeInput = () => {
//   const [time, setTime] = useState('00:00');

//   const handleChange = (event) => {
//     const value = event.target.value;
//     const formattedValue = formatTime(value);
//     setTime(formattedValue);
//   };

//   const formatTime = (value) => {
//     const cleanedValue = value.replace(/\D/g, '').slice(0, 4);
//     const hours = cleanedValue.slice(0, 2);
//     const minutes = cleanedValue.slice(2, 4);

//     if (cleanedValue.length < 3) {
//       return cleanedValue;
//     }

//     return `${hours}:${minutes}`;
//   };

//   return (
//     <StyledTimeInput
//       label="Саат"
//       value={time}
//       onChange={handleChange}
//       placeholder="00:00"
//       // inputProps={{ maxLength: 5 }} // Максималдуу узундук 5 символ
//     />
//   );
// };

// export default TimeInput;

// const StyledTimeInput = styled(TextField)(({ theme }) => ({
//   width: '80px',
//   height: '38px',
//   borderRadius: '10px',
//   '& .MuiInputBase-root': {
//     borderRadius: '10px',
//     height: '38px',
//     padding: '0 5.5px',
//     fontSize: '16px',
//   },
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderRadius: '10px',
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: theme.palette.primary.main,
//     },
//   },
// }));

// !!!!!!!!!!!!!!!!!1

import React, { useState, ChangeEvent } from 'react';
import { styled } from '@mui/material/styles';

interface TimeInputProps {
  value?: string;
  onChange: (newValue: string) => void;
}

const TimeInput: React.FC<TimeInputProps> = ({ value, onChange }) => {
  const [time, setTime] = useState<string>(value || '00:00');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const formattedValue = formatTime(inputValue);
    setTime(formattedValue);
    onChange(formattedValue);
  };

  const formatTime = (inputValue: string): string => {
    const cleanedValue = inputValue.replace(/\D/g, '').slice(0, 4);
    const hours = cleanedValue.slice(0, 2);
    const minutes = cleanedValue.slice(2, 4);

    if (cleanedValue.length < 3) {
      return cleanedValue;
    }

    return `${hours}:${minutes}`;
  };

  return (
    <StyledInput
      type="text"
      value={time}
      onChange={handleChange}
      placeholder="00:00"
    />
  );
};

export default TimeInput;

const StyledInput = styled('input')(({ theme }) => ({
  width: '80px',
  height: '38px',
  borderRadius: '10px',
  padding: '0 5.5px',
  fontSize: '16px',
  border: `1px solid ${theme.palette.grey[400]}`,
  textAlign: 'center',
  '&:focus': {
    outline: 'none',
    borderColor: theme.palette.primary.main,
  },
  '&::placeholder': {
    color: theme.palette.grey[600],
  },
}));
