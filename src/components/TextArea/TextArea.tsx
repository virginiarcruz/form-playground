import React, { useState, useRef, InputHTMLAttributes } from 'react';

import { InputContainer } from './styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  defaultValue?: string;
}

const Input: React.FC<InputProps> = ({ defaultValue, children, ...rest }) => {
  // const [inputText, setInputText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  console.log('input ref', inputRef);

  return (
    <>
      <InputContainer value={defaultValue} ref={inputRef} {...rest} />
      {children}
    </>
  );
};

export default Input;
