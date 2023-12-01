import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../button';

function CustomForm({ onSubmit, fields, defaultValues}) {
  const {
    handleSubmit,
    formState: { isValid, isSubmitting, errors },
    control,
    setError
  } = useForm({
    mode: 'all',
    defaultValues
  });

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => handleSubmit((value) => onSubmit(value, setError))(e)}
      noValidate
    >
      {errors.serverError && <p className='text-sm text-red-500 text-center'>{errors.serverError.message}</p>}
      {fields.map(({id, field: Field, ...props}) => (
        <Field key={id} {...props} control={control} />
      ))}
      <Button disabled={!isValid || isSubmitting}>
        Sign In
      </Button>
    </form>
  );
}

export default CustomForm;
