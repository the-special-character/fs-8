import React from 'react';
import Input from '../../components/Input';
import CustomForm from '../../components/customForm';
import RadioButtons from '../../components/radioButtons';
import { useAuth } from '../../context/authContext';

const fields = [
  {
    field: Input,
    label: 'Name',
    id: 'name',
    type: 'text',
    autoComplete: 'name',
    name: 'name',
    rules: {
      required: {
        value: true,
        message: 'Name is required...',
      },
    },
  },
  {
    field: Input,
    label: 'Email address',
    id: 'email',
    type: 'email',
    autoComplete: 'email',
    name: 'email',
    rules: {
      required: {
        value: true,
        message: 'Email is required...',
      },
    },
  },
  {
    field: Input,
    label: 'Password',
    id: 'password',
    type: 'password',
    autoComplete: 'new-password',
    name: 'password',
    rules: {
      required: {
        value: true,
        message: 'Password is required...',
      },
    },
  },
  {
    field: Input,
    label: 'Confirm Password',
    id: 'confirm_password',
    type: 'password',
    autoComplete: 'new-password',
    name: 'confirmPassword',
    rules: {
      required: {
        value: true,
        message: 'Confirm Password is required...',
      },
    },
  },
  {
    field: RadioButtons,
    name: 'role',
    options: [
      {
        value: 'admin',
        text: "Admin"
      },
      {
        value: 'user',
        text: "User"
      },
    ],
    rules: {
      required: {
        value: true,
        message: 'disk is required...',
      },
    },
  },
];

function Register() {
  const { register } = useAuth()

  return (
    <CustomForm onSubmit={register} fields={fields} />
  );
}

export default Register;
