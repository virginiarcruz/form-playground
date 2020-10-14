import React, { useState, InputHTMLAttributes, useCallback } from 'react';

import Button from '../Button';
import FormFields from '../../components/FormFields';
import { Container, FormContainer, FormGroup } from './styled';

interface FormProps {
  formFields: Array<object>;
}

interface FieldsProps {
  __typename?: string;
  id?: string;
  label?: string | any;
  options?: Array<string> | undefined;
}

const Form: React.FC<FormProps> = ({ formFields }) => {
  const [name, setName] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName('');
    setContent('');
  };

  const handleClick = useCallback(() => {
    console.log('click');
  }, []);

  console.log('formfield', formFields);

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        {formFields.map(({ __typename, id, label, options }: FieldsProps) => (
          <FormFields
            __typename={__typename}
            id={id}
            label={label}
            options={options}
          />
        ))}
        <Button onClick={handleClick}>Submit</Button>
      </FormContainer>
    </Container>
  );
};
export default Form;
