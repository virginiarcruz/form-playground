import React, { InputHTMLAttributes } from 'react';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  options?: Array<string>;
}

const InputRadio: React.FC<RadioProps> = ({ options, value }) => (
  <>
    {options?.map((option) => (
      <label key={option}>
        <input type="radio" checked={value === option} />
        {option}
      </label>
    ))}
  </>
);

export default InputRadio;
