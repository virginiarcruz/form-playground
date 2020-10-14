import React from 'react';

import Input from '../Input';
import Select from '../Select';
import InputRadio from '../InputRadio';
import InputCheckBox from '../InputCheckBox';

import { FormGroup } from './styled';

interface FormFieldsProps {
  __typename?: string | any;
  id?: string;
  label?: string;
  options?: Array<string>;
}

interface ObjectLiteral {
  [key: string]: any;
}

const FormFields: React.FC<FormFieldsProps> = ({
  __typename,
  label,
  ...rest
}) => {
  const typesList: ObjectLiteral = {
    ShortTextField: <Input type="text" {...rest} />,
    LongTextField: <Input type="textarea" {...rest} />,
    SelectField: <Select {...rest} />,
    RadioVerticalField: <InputRadio {...rest} />,
    ChecklistVerticalField: <InputCheckBox {...rest} />,
    DateField: <Input type="date" />,
  };

  const getType = (type: string) => {
    return typesList[type] || null;
  };

  return (
    <FormGroup>
      {label}
      {getType(__typename)}
    </FormGroup>
  );
};

export default FormFields;
