/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Input } from 'antd';
import type { GetProps } from 'antd';

type OTPProps = GetProps<typeof Input.OTP>;

const MyFormOTP = ({
  name,
  label,
  className,
  rules,
}: {
  name: string;
  label?: string;
  className?: string;
  rules?: any; // Validation rules
}) => {
  const { control } = useFormContext(); // Use react-hook-form context to access methods

  // Handle onChange event for OTP input
  const onChange: OTPProps['onChange'] = (text) => {
    console.log('onChange:', text);
  };

  // Handle onInput event for OTP input
  const onInput: OTPProps['onInput'] = (value) => {
    console.log('onInput:', value);
  };

  // Shared properties for the OTP input component
  const sharedProps: OTPProps = {
    onChange,
    onInput,
  };

  return (
    <div className="flex flex-col justify-center gap-1">
      {/* Label */}
      {label && <p className="ps-1 mb-2">{label}</p>}

      {/* Controller for OTP input */}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <div className="w-fit flex flex-col">
            {/* OTP Input */}
            <Input.OTP
              {...field}
              {...sharedProps} // Spread shared props
              size="large"
              className={className}
              formatter={(str) => str.toUpperCase()} // Format OTP to uppercase
            />

            {/* Display error message if validation fails */}
            {error && <small style={{ color: 'red' }}>{error.message}</small>}
          </div>
        )}
      />
    </div>
  );
};

export default MyFormOTP;
