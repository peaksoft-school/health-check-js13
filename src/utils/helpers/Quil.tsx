import { Box, styled, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const MyEditor = ({
  setValue,
  values,
}: {
  setValue: (name: string) => void;
  values?: string;
}) => {
  const [editorValue, setEditorValue] = useState(values);


  useEffect(() => {
    setEditorValue(values);
  }, [values]);

  const handleChange = (content: string) => {
    setEditorValue(content);
    setValue(content);
  };

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
    ],
  };

  return (
    <Block>
      <Typography sx={{ color: '#959595' }}>Описание</Typography>
      <ReactQuill
        value={editorValue}
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
