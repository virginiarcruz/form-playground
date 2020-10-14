import React, { InputHTMLAttributes } from 'react';
import Input from '../Input';

// import { Container } from './styled';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  options?: Array<string>;
}

const InputCheckBox: React.FC<CheckBoxProps> = ({ options }) => {
  return (
    <>
      {options?.map((option) => (
        <label key={option}>
          <Input type="checkbox" />
          {option}
        </label>
      ))}
    </>
  );
};

export default InputCheckBox;
