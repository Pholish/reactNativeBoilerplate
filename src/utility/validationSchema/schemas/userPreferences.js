import * as Yup from 'yup';

export default (/* t */) => {
  return {
    search: Yup.string('Недопустимые символы'),
    preferences: Yup.array()
      .of(Yup.number())
      .min(1)
      .required('Укажите пол'),
  };
};
