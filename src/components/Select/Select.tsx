import React, { SelectHTMLAttributes } from 'react';

import { SelectForm } from './styled';

interface SelectProps extends SelectHTMLAttributes<HTMLInputElement> {
  defaultValue?: string;
  type?: string;
  options?: Array<string>;
}

const Select: React.FC<SelectProps> = ({ options }) => {
  return (
    <SelectForm name="select">
      {options?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </SelectForm>
  );
};

export default Select;
