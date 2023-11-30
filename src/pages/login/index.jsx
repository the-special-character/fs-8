import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import CustomForm from '../../components/customForm';
import { useAuth } from '../../context/authContext';

const wait = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const fields = [
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
    autoComplete: 'current-password',
    name: 'password',
    rules: {
      required: {
        value: true,
        message: 'Password is required...',
      },
    },
  },
];

export default function Example() {
  const { login } = useAuth();

  return (
    <>
      <CustomForm onSubmit={login} fields={fields} />
      <p className="mt-10 text-center text-sm text-gray-500">
        Not a member?{' '}
        <Link
          to="register"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Start a 14 day free trial
        </Link>
      </p>
    </>
  );
}
