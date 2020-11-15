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
import { list } from '../utils/pollService.js';

const Home = () => {
  const [polls, setPolls] = useState(null);
  const [error, setError] = useState(null);
  const [answer, setAnswer] = useState('');
  const [empty, setEmpty] = useState(false);

  const isEmpty = () => {
    if (answer === '') {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  };

  const updateAnswer = (event) => {
    console.log(event.target.value);
    setAnswer(event.target.value);
    isEmpty();
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await list();
      console.log(data);
      if (error) {
        setError(error);
      } else {
        setPolls(data);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <Heading mb={2} as="h1" size="md">
        Home
      </Heading>
      {error && <p>{error}</p>}
      <Flex>
        {polls &&
          polls.map((poll) => (
            <Box p="6" as="article" key={poll.id}>
              <Heading mb={2} as="h2" size="sm">
                {poll.question}
              </Heading>
              <Textarea
                placeholder="Your answer here"
                size="lg"
                name="answer"
                onChange={updateAnswer}
              />
              <Text fontSize="lg" mb={2}>
                <Icon name="iconTest" mr={2} />
                {new Date(poll.createdAt).toDateString()}
              </Text>
              <Text fontSize="lg">By: {poll.user.name} </Text>
              <Button colorscheme="blue" type="submit" onClick={isEmpty}>
                Save Answer
              </Button>
              <Text fontSize="lg">Answer: {poll.answer.answerText}</Text>
            </Box>
          ))}
        <Button colorscheme="red" type="button">
          Create new poll
        </Button>
        <Button colorscheme="red" type="button">
          View all polls
        </Button>
      </Flex>
    </section>
  );
};

export default Home;
