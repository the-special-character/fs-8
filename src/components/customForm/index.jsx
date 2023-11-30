import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../button';

function CustomForm({ onSubmit, fields }) {
  const {
    handleSubmit,
    formState: { isValid, isSubmitting },
    control,
  } = useForm({
    mode: 'all',
  });

  return (
    <form
      className="space-y-6"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
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
