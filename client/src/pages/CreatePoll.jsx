import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Container,
  FormContainer,
  Heading,
  InOutForm,
  Button,
  ShowText,
  Input,
} from '../styles/Styled';
import { list } from '../utils/userService.js';
import { create } from '../utils/pollService.js';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 50%;
  margin: 0 auto;
`;

const CreateButton = styled(Button)`
  color: tomato;
  border-color: tomato;
  margin: 0 auto;
`;

const Text = styled(ShowText)`
  text-align: center;
  font-size: 2em;
`;

const CreateTitle = styled(Heading)`
  text-align: center;
  font-size: 3em;
`;

const CreatePoll = (props) => {
  const [save, setSave] = useState(null);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const savePollData = (e) => {
    setSave({ question: e.target.value, user: '5fb3f0609e554521884d1b57' });
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await list();
      if (error) {
        setError(error);
      } else {
        setUser(data);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const createPoll = () => {
    create(save);
    props.history.push('/');
    props.history.go(0);
  };

  return (
    <>
      <CreateTitle as="h1">Create poll</CreateTitle>
      {error && <p>{error}</p>}
      <Container>
        <FormContainer className="FormCenter">
          <Text>Please enter your question</Text>
          <InOutForm className="FormFields" onSubmit={handleSubmit}>
            <div className="FormField">
              <Input
                type="text"
                id="question"
                className="FormFieldInput"
                placeholder="Please enter your question"
                name="question"
                onChange={savePollData}
              />
            </div>
          </InOutForm>
        </FormContainer>
        <ButtonContainer>
          <CreateButton colorscheme="red" type="button" onClick={createPoll}>
            Create new poll
          </CreateButton>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default CreatePoll;
