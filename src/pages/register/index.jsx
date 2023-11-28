import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/button';
import CustomForm from '../../components/customForm';
import RadioButtons from '../../components/radioButtons';

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
    type: 'password',
    autoComplete: 'new-password',
    name: 'subsription',
    options: [
      {
        name: 'Startup',
        ram: '12GB',
        cpus: '6 CPUs',
        disk: '160 GB SSD disk',
      },
      {
        name: 'Business',
        ram: '16GB',
        cpus: '8 CPUs',
        disk: '512 GB SSD disk',
      },
      {
        name: 'Enterprise',
        ram: '32GB',
        cpus: '12 CPUs',
        disk: '1024 GB SSD disk',
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
  const onSubmit = data => {
    console.log(data);
    
  };
  return (
    <CustomForm onSubmit={onSubmit} fields={fields} />
  );
}

export default Register;
