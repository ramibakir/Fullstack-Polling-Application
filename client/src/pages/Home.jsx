import React, { useEffect, useState } from 'react';
import { Box, Heading, Flex, Text, Icon } from '@chakra-ui/core';
import { list } from '../utils/pollService.js';

const Home = () => {
  const [polls, setPolls] = useState(null);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

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
              <Text fontSize="lg" mb={2}>
                {poll.user.email}
              </Text>
              <Text fontSize="lg" mb={2}>
                <Icon name="iconTest" mr={2} />
                {new Date(poll.createdAt).toDateString()}
              </Text>
              <Text fontSize="lg">By: {poll.user.name}</Text>
            </Box>
          ))}
      </Flex>
    </section>
  );
};

export default Home;
