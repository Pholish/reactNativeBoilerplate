import * as Yup from 'yup';

export default (/* t */) => {
  return {
    name: Yup.string()
      .matches(/^[a-zA-Z]/, {
        message: 'Недопустимые символы',
        excludeEmptyString: true,
      })
      .min(2)
      .required('Введите имя'),
    date: Yup.string().required('Выберите дату'),
    gender: Yup.number()
      .min(0)
      .required('Укажите пол'),
    email: Yup.string('Некоректный адресс').email('Некоректный адрес'),
  };
};
