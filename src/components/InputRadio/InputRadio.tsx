import React, { InputHTMLAttributes } from 'react';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  options?: Array<string>;
}

const InputRadio: React.FC<RadioProps> = ({ options, value, onChange }) => (
  <>
    {options?.map((option) => (
      <label key={option}>
        <input type="radio" onChange={onChange} checked={value === option} />
        {option}
      </label>
    ))}
  </>
);

export default InputRadio;
