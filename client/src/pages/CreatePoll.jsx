import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Flex,
  Text,
  Icon,
  Button,
  Textarea,
} from '@chakra-ui/core';

const CreatePoll = () => {
  const [question, setQuestion] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Heading mb={3} as="h1" size="xl">
        Create poll
      </Heading>
      <Flex>
        <div className="FormCenter">
          <form className="FormFields" onSubmit={handleSubmit}>
            <div className="FormField">
              <label className="FormFieldLabel" htmlFor="question">
                Question
              </label>
              <Textarea
                type="text"
                id="question"
                className="FormFieldInput"
                placeholder="Please enter your question"
                name="question"
                value={question}
                onChange={({ target }) => setQuestion(target.value)}
              />
            </div>
            <div />
          </form>
        </div>
        <Button colorscheme="red" type="button">
          Create new poll
        </Button>
      </Flex>
    </>
  );
};

export default CreatePoll;
