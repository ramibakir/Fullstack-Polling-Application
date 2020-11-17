import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  Heading,
  Container,
  TextDiv,
  ShowText,
  Polls,
  CardSection,
  CardBox,
} from '../styles/Styled';
import { list } from '../utils/pollService.js';

const ViewPollsTitle = styled(Heading)`
  text-align: center;
  font-size: 3em;
`;

const DateCreatorContainer = styled(TextDiv)`
  margin: 1em auto;
`;

const HeadingH4 = styled.h4`
  text-align: center;
`;

const ViewAllPolls = () => {
  const [polls, setPolls] = useState(null);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);

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
    setCount((c) => c + 1);
  };

  return (
    <>
      <ViewPollsTitle>Polls</ViewPollsTitle>
      <CardSection>
        {error && <p>{error}</p>}
        <CardBox>
          {polls &&
            polls.map((poll) => (
              <Polls key={poll.id} onClick={testing}>
                <Container>
                  <HeadingH4>{poll.question}</HeadingH4>
                  <DateCreatorContainer>
                    <ShowText>
                      {new Date(poll.createdAt).toDateString()}
                    </ShowText>
                    <ShowText>By: {poll.user.name} </ShowText>
                  </DateCreatorContainer>
                </Container>
              </Polls>
            ))}
        </CardBox>
      </CardSection>
    </>
  );
};

export default ViewAllPolls;
