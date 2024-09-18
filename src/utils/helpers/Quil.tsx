import { Box, styled, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { TFormTypes } from '../../pages/admin/adminSpecialist/AddSpecialist';

const MyEditor = ({
  setValue,
  values,
}: {
  setValue: (name: keyof TFormTypes, value: any) => void;
  values: string;
}) => {
  const [value, setEditorValue] = useState(values || '');
  useEffect(() => {
    setEditorValue(values);
  }, [values]);

  const handleChange = (content: string) => {
    setEditorValue(content);
    setValue('description', content);
  };

  const modules = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
      ],
    },
  };

  return (
    <Block>
      <Typography sx={{ color: '#959595' }}>Описание</Typography>
      <ReactQuill
        value={value}
        onChange={handleChange}
        placeholder="Введите описание специалиста"
        theme="snow"
        modules={modules}
      />
    </Block>
  );
};

export default MyEditor;

const Block = styled(Box)(() => ({
  fontFamily: 'sans-serif',
  fontSize: '17px',
}));
