import * as yup from 'yup';

export const loginFormFields = {
  email: '',
  password: '',
};

export const registerFormFields = {
  name: '',
  email: '',
  number: '',
  password: '',
  confirmPassword: '',
};

export const carInfoFormFields = {
  brand: '',
  model: '',
  color: '',
  length: '',
  plateNumber: '',
};

export const sendMailFormFields = {
  email: '',
};

export const resetPassFormFields = {
  password: '',
  confirmPassword: '',
};

export const LoginVS = yup.object().shape({
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
});

export const sendMailVS = yup.object().shape({
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
});

export const resetPassVS = yup.object().shape({
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('New Password Required'),
  confirmPassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Confirm Password Required')
    .oneOf([yup.ref('password'), null], 'New Password does not match'),
});

export const registerVS = yup.object().shape({
  name: yup.string().required('Name Required').label('name'),
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
  number: yup
    .number()
    .typeError('Invalid contact number')
    .required('Contact Number Required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('New Password Required'),
  confirmPassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Confirm Password Required')
    .oneOf([yup.ref('password'), null], 'New Password does not match'),
});

export const carInfoVS = yup.object().shape({
  brand: yup.object().shape().required('Brand Required'),
  model: yup.object().shape().required('Model Required'),
  length: yup
    .number()
    .typeError('Invalid contact number')
    .required('Length Required'),
  color: yup.string().required('Color Required').label('color'),
  plateNumber: yup
    .string()
    .required('Plate Number Required')
    .label('plateNumber'),
});
