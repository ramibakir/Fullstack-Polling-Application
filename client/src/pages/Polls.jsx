import React, { useEffect, useState } from 'react';
import { Box, Heading, Flex, Text, Icon } from '@chakra-ui/core';
import { list } from '../utils/pollService.js';

const Polls = () => {
  const [polls, setPolls] = useState(null);
  const [error, setError] = useState(null);

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

  return (
    <section>
      <Heading mb={2} as="h1" size="md">
        Polls
      </Heading>
      {error && <p>{error}</p>}
      <Flex>
        {polls &&
          polls.map((poll) => (
            <Box p="6" as="article" key={poll.id}>
              <Heading mb={2} as="h2" size="sm">
                {poll.question}
              </Heading>
              <Text fontSize="lg" mb={2}>
                {poll.creator}
              </Text>
              <Text fontSize="lg" mb={2}>
                <Icon name="iconTest" mr={2} />
                {new Date(poll.createdAt).toDateString()}
              </Text>
              <Text fontSize="lg">By: {poll.user.email}</Text>
            </Box>
          ))}
      </Flex>
    </section>
  );
};

export default Polls;
