import React, { useState, InputHTMLAttributes, useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_COMMENT, GET_COMMENTS } from '../../graphql';
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

const Form: React.FC = ({ ...rest }) => {
  const [name, setName] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const [saveComment] = useMutation(SAVE_COMMENT, {
    variables: {
      input: {
        name,
        content,
      },
    },
    refetchQueries: [
      {
        query: GET_COMMENTS,
      },
    ],
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await saveComment();
    setName('');
    setContent('');
  }

  return (
    <Container {...rest}>
      <FormContainer onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Your name</Label>
          <Input
            placeholder="enter your name"
            value={name}
            required
            onChange={(event) => setName(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Your bio</Label>
          <TextArea
            name="message"
            value={content}
            rows={8}
            required
            onChange={(event) => setContent(event.target.value)}
          />
        </FormGroup>
        {/* <FormGroup>
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
        </FormGroup> */}
        <Button>Submit</Button>
      </FormContainer>
    </Container>
  );
};

export default Form;
