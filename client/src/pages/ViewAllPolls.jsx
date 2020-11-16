import React, { useEffect, useState } from 'react';
import { Box, Heading, Icon, Flex, Text } from '@chakra-ui/core';
import { list } from '../utils/pollService.js';

const ViewAllPolls = () => {
  const [polls, setPolls] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await list();
      console.log(data, error);
      if (error) {
        setError(error);
      } else {
        setPolls(data);
      }
    };
    fetchData();
  }, []);

  const testing = () => {
    console.log('hei');
  };

  return (
    <section>
      <Heading mb={2} as="h1" size="md">
        Polls
      </Heading>
      {error && <p>{error}</p>}
      <Flex>
        {polls &&
          polls.map((poll) => (
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              key={poll.id}
              onClick={testing}
            >
              <Box p="6">
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  ml="2"
                >
                  <Icon name="iconDate" mr={2} />
                  {new Date(poll.createdAt).toLocaleString()}
                </Box>
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {poll.question}
                </Box>
                <Box d="flex" mt="2" alignItems="center">
                  By: {poll.user.name}
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {poll.user.email}
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
      </Flex>
    </section>
  );
};

export default ViewAllPolls;
