/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, FieldErrors, Controller } from 'react-hook-form';
import { Dropdown } from 'primereact/dropdown';

interface DropDownInputProps {
  id?: string;
  control: Control<any>;
  options: Array<{ id: string | number | boolean; name: string }> | any[];
  errors: FieldErrors;
  field: {
    inputName: string;
    title: string;
    isRequired?: boolean;
  };
}

const DropDownInput: React.FC<DropDownInputProps> = ({
  control,
  options,
  id,
  errors,
  field,
}: DropDownInputProps) => {
  return (
    <div className="col-12 w-100">
      <label
        className="w-100 form-label text-capitalize mb-1"
        style={{ color: '#4b5563' }}
        htmlFor={field.inputName}
      >
        {field.title}
        {field.isRequired && <span className="text-danger">*</span>}
      </label>
      <Controller
        name={field.inputName}
        control={control}
        rules={{
          required: field.isRequired ? `${field.title} is required` : false,
        }}
        render={({ field: { value, onChange } }) => (
          <Dropdown
            value={value}
            // style={{direction:'rtl'}}
            options={options}
            onChange={(e) => {
              if (e && e.target) {
                onChange(e.target.value);
              } else {
                onChange(undefined);
              }
            }}
            // placeholder={`${intl.formatMessage({ id: 'اختر' })} ${field.title}`}
            className="w-100"
            optionValue={id || 'id'}
            optionLabel="name"
            showClear
            filter
            filterBy="name"
            invalid={Boolean(errors[field.inputName])}
          />
        )}
      />
      {errors[field.inputName]?.message && (
        <span className="text-danger">
          {String(errors[field.inputName]?.message)}
        </span>
      )}
    </div>
  );
};

export default DropDownInput;
