import * as yup from 'yup';
export const ValidationSchema = yup.object().shape({
    // firstName: Yup.string()
    //   .min(2, 'Too Short!')
    //   .max(50, 'Too Long!')
    //   .required('Required'),
    // lastName: Yup.string()
    //   .min(2, 'Too Short!')
    //   .max(50, 'Too Long!')
    //   .required('Required'),
    // email: Yup.string().email('Invalid email').required('Required'),
names:
yup.string()
.min(3).max(50).required('name is required'),
age:
yup.number().min(1).max(150).required('age is required')
  });