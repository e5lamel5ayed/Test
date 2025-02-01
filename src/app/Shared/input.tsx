/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from 'clsx';
import { ErrorMessage } from '@hookform/error-message';
import { UseFormRegister } from 'react-hook-form';
import { ReactNode } from 'react';

type Props = {
  field: InputCreateModel;
  errors: any;
  register: UseFormRegister<any>;
};
export interface InputCreateModel {
  inputName: string;
  title: ReactNode;
  value?: any;
  isRequired?: boolean;
  minLength?: number;
  maxLength?: number;
  isPassword?: boolean;
  isNumber?: boolean;
  disabled?: boolean;
}


export default function Input({ field, errors, register }: Props) {
  return (
    <div className="col-12 w-100">
      <label
        htmlFor={field.inputName}
        className="text-end w-100 form-label text-capitalize mb-1 text-dairection"
        style={{ color: '#4b5563' }}
      >
        {field.title}
        {field.disabled}
        {field.isRequired && <span className="text-danger">*</span>}
      </label>
      {field.isNumber ? (
        <input
          id={field.inputName}
          style={{direction:'rtl'}}
          // placeholder={field.title as string} // إذا كنت بحاجة إلى placeholder نصي
          {...register(field.inputName, {
            required: field.isRequired ? `${field.title}` : false,
            max: field.maxLength && {
              value: field.maxLength,
              message: `${field.title} can't be more than ${field.maxLength} `,
            },
            min: field.minLength && {
              value: field.minLength,
              message: `${field.title} can't be less than ${field.minLength} `,
            },
            valueAsNumber: true,
          })}
          className={clsx('form-control bg-transparent', {
            'is-invalid': errors[field.inputName],
          })}
          name={field.inputName}
          autoComplete="off"
          type="number"
          min={field.minLength}
          max={field.maxLength}
          disabled={field.disabled}
        />
      ) : (
        <input
          id={field.inputName}
          // placeholder={field.title as string} // إذا كنت بحاجة إلى placeholder نصي
          {...register(field.inputName, {
            required: field.isRequired ? `${field.title}` : false,
            maxLength: field.maxLength && {
              value: field.maxLength,
              message: `${field.title} exceeds max length`,
            },
            minLength: field.minLength && {
              value: field.minLength,
              message: `${field.title} does not meet min length`,
            },
          })}
          className={clsx('form-control bg-transparent', {
            'is-invalid': errors[field.inputName],
          })}
          name={field.inputName}
          autoComplete="off"
          type={field.isPassword ? 'password' : 'text'}
          disabled={field.disabled}
          style={{height:'50px',direction:'rtl'}}
        />
      )}

      <ErrorMessage
        errors={errors}
        name={field.inputName}
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p className="text-danger fs-6 pt-2" key={type}>
              {message}
            </p>
          ))
        }
      />
    </div>
  );
}
