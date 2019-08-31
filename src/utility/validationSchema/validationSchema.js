import * as Yup from 'yup';

import userRegistrationForm from './schemas/userRegistrationForm';
import userPreferences from './schemas/userPreferences';

const setYupValidationSchema = (schemaName, t) => {
  let schema;

  switch (schemaName) {
    case 'userRegistrationForm':
      schema = userRegistrationForm(t);
      break;
    case 'userPreferences':
      schema = userPreferences(t);
      break;
    default:
      schema = {};
      break;
  }

  return Yup.object().shape(schema);
};

export default setYupValidationSchema;
