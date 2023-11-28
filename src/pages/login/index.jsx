import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input';
import Button from '../../components/button';
import CustomForm from '../../components/customForm';

const wait = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const fields = [
  {
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
  

  const onSubmit = async data => {
    await wait(3000);
    console.log(data);
    
  };

  return (
    <>
      <CustomForm onSubmit={onSubmit} fields={fields} />

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
