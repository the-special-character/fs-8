import React from 'react';
import { RadioGroup } from '@headlessui/react';
import { useController } from 'react-hook-form';


function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle
        cx={12}
        cy={12}
        r={12}
        fill="#fff"
        opacity="0.2"
      />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RadioButtons({name, control, rules, options}) {
    const {
        field,
        fieldState: { error },
      } = useController({
        name,
        control,
        rules,
      });

  return (
    <>
    <RadioGroup {...field}>
      <RadioGroup.Label className="sr-only">
        Server size
      </RadioGroup.Label>
      <div className="space-y-2">
        {options.map(plan => (
          <RadioGroup.Option
            key={plan.value}
            value={plan.value}
            className={({ active, checked }) =>
              `${
                active
                  ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300'
                  : ''
              }
                  ${
                    checked
                      ? 'bg-sky-900/75 text-white'
                      : 'bg-white'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
            }
          >
            {({ active, checked }) => (
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center">
                  <div className="text-sm">
                    <RadioGroup.Label
                      as="p"
                      className={`font-medium  ${
                        checked
                          ? 'text-white'
                          : 'text-gray-900'
                      }`}
                    >
                      {plan.text}
                    </RadioGroup.Label>
                    
                  </div>
                </div>
                {checked && (
                  <div className="shrink-0 text-white">
                    <CheckIcon className="h-6 w-6" />
                  </div>
                )}
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
    {error && <p className='text-red-400 text-sm'>{error.message}</p>}
    </>
  );
}

export default RadioButtons;
