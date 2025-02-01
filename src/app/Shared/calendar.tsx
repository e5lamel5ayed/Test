/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorMessage } from '@hookform/error-message';
import clsx from 'clsx';
import { Calendar } from 'primereact/calendar';
import { Control, Controller } from 'react-hook-form';
import { InputCreateModel } from '../interfaces/_authModels';

type Props = {
  field: InputCreateModel;
  errors: any;
  control: Control<any>;
  showTime?: boolean;
  min?: Date;
  max?: Date;
};

export default function CalendarInput({
  field,
  errors,
  control,
  showTime,
  min,
  max,
}: Props) {
  return (
    <div className="col-12 w-100">
      <label
        htmlFor={field.inputName}
        className="w-100 form-label  text-capitalize  mb-1 text-dairection"
        style={{ color: '#4b5563' }}
      >
        {field.title}{' '}
        {field.isRequired && <span className="text-danger">*</span>}{' '}
      </label>

      <Controller
        control={control}
        name={field.inputName}
        rules={{
          required: field.isRequired ? `${field.title} is required` : false,
        }}
        render={({ field: { onChange, value } }) => (
          <Calendar
            name={field.inputName}
            onChange={onChange}
            value={value}
            placeholder="Select a Date"
            showTime={showTime}
            minDate={min}
            maxDate={max}
            className={clsx('d-flex w-100 bg-transparent p-0', {
              'is-invalid': errors[field.inputName] && errors[field.inputName],
            })}
          />
        )}
      />
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
