import React, { useState } from 'react';
import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';

import Button from '../Button';
import {
  Container,
  FormContainer,
  FormGroup,
  Label,
  Input,
  TextArea,
} from './styled';

const Form: React.FC = () => {
  return (
    <Container>
      <FormContainer>
        <FormGroup>
          <Label>Your name</Label>
          <Input />
        </FormGroup>
        <FormGroup>
          <Label>Your bio</Label>
          <TextArea name="message" rows={8} />
        </FormGroup>
        <FormGroup>
          <Label>Primary skill</Label>
          <select name="select">
            <option value="valor1">Valor 1</option>
            <option value="valor2" selected>
              Valor 2
            </option>
            <option value="valor3">Valor 3</option>
          </select>
        </FormGroup>
        <FormGroup>
          <Label>Your best javascript lib</Label>
          <Input type="radio" />
          <span>React</span>
          <Input type="radio" />
          <span>Vue</span>
          <Input type="radio" />
          <span>Svelte</span>
        </FormGroup>
        <FormGroup>
          <Label>Addicional skill ++</Label>
          <Input type="checkbox" />
          <span>TDD</span>
          <Input type="checkbox" />
          <span>Storybook</span>
          <Input type="checkbox" />
          <span>Github</span>
        </FormGroup>
        <FormGroup>
          <Label> Start Date</Label>
          <DayPickerInput
            dayPickerProps={{
              month: new Date(),
              showWeekNumbers: true,
              todayButton: 'Today',
            }}
          />
        </FormGroup>
      </FormContainer>

      <Button>Submit</Button>
    </Container>
  );
};

export default Form;
