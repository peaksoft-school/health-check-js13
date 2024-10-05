export const VALIDATION_RESULT = Yup.object().shape({
  date: Yup.date().required('Выберите дату начала!'),
  service: Yup.string().required('Выберите Услугу!'),

  file: Yup.mixed().test('file', 'Загрузите файл!', value => {
    return value instanceof File;
  }),
});
