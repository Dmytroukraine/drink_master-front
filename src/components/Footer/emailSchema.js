import * as yup from 'yup';

export const emailSchema = yup
  .string()
  .email('Please enter correct email')
  .required('Field  "Email" must be filled');
