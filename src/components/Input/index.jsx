import React from 'react';
import { useController } from 'react-hook-form';

function Input({ label, id, hasLink, children, name, control, rules, ...props }) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });


  const labelUI = () => (
    <label
      htmlFor={id}
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      {label}
    </label>
  );

  return (
    <div>
      {hasLink ? (
        <div className="flex items-center justify-between">
          {labelUI()}
          {children}
        </div>
      ) : (
        labelUI()
      )}

      <div className="mt-2">
        <input
          id={id}
          type="text"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...field}
          {...props}
        />
        {error && <p className='text-red-400 text-sm'>{error.message}</p>}
      </div>
    </div>
  );
}

export default Input;
