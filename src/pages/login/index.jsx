import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input';
import Button from '../../components/button';

export default function Example() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all'
  });

  const onSubmit = data => console.log(data);
  


  return (
    <>
      <form
        className="space-y-6"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Input
          label="Email address"
          id="email"
          type="email"
          required
          autoComplete="email"
          {...register('email', {
            required: {
              value: true,
              message: 'Email is required...',
            },
          })}
          error={errors?.email?.message}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          required
          hasLink
          autoComplete="current-password"
          {...register('password', {
            required: {
              value: true,
              message: 'Password is required...',
            },
          })}
          error={errors?.password?.message}
        >
          <div className="text-sm">
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div>
        </Input>

        <Button>Sign In</Button>
      </form>

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
