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
import { list, update } from '../utils/pollService.js';
import { create, listAnswer } from '../utils/answerService.js';

const Home = () => {
  const [polls, setPolls] = useState(null);
  const [tests, setTests] = useState(null);
  const [error, setError] = useState(null);
  const [answer, setAnswer] = useState('');

  const updateAnswer = (event) => {
    setAnswer({ answer, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await list();
      if (error) {
        setError(error);
      } else {
        setPolls(data);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await listAnswer();
      if (error) {
        setError(error);
      } else {
        setTests(data);
        console.log(`${data.answer}hei`);
      }
    };
    fetchData();
  }, []);

  const newAnswer = () => {
    create(answer);
  };

  return (
    <section>
      <Heading mb={2} as="h1" size="md">
        Home
      </Heading>
      {error && <p>{error}</p>}
      <Flex>
        {console.log(polls)}
        {polls &&
          polls.map((poll) => (
            <Box p="6" as="article" key={poll.id}>
              <Heading mb={2} as="h2" size="sm">
                {poll.question}
              </Heading>
              <Textarea
                placeholder="Your answer here"
                size="lg"
                name="answerText"
                onChange={updateAnswer}
              />
              <Text fontSize="lg" mb={2}>
                <Icon name="TimeIcon" mr={2} />
                {new Date(poll.createdAt).toDateString()}
              </Text>
              <Text fontSize="lg">By: {poll.user.name} </Text>
              <Button
                colorscheme="blue"
                type="submit"
                onClick={newAnswer}
                id={poll.id}
              >
                Save Answer
              </Button>
              <Text fontSize="lg">Answer: {poll.answer.answerText}</Text>
              {tests &&
                tests.map((test) => (
                  <Text fontSize="lg">
                    {test.id} {test.answerText}
                  </Text>
                ))}
            </Box>
          ))}
        <Button colorscheme="red" type="button" as="a" href="/createpoll">
          Create new poll
        </Button>
        <Button colorscheme="red" type="button" as="a" href="/polls">
          View all polls
        </Button>
      </Flex>
    </section>
  );
};

export default Home;
