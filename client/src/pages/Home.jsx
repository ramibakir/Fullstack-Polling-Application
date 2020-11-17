import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import {
  Section,
  Heading,
  ButtonContainer,
  CreateButton,
  Button,
  ViewPollsButton,
  Input,
  ShowText,
  TextDiv,
  Polls,
  CardSection,
  CardBox,
} from '../styles/Styled';
import { list } from '../utils/pollService.js';
import { create } from '../utils/answerService.js';

const HeadingH2 = styled.h2`
  text-align: center;
`;

const AnswerInput = styled(Input)`
  color: black;
`;

const InputButtonContainer = styled(Section)`
  display: flex;
  align-items: center;
`;

const DateCreatorContainer = styled(TextDiv)`
  margin: 1em auto;
`;

const SaveButton = styled(Button)`
  padding: 2px;
  height: 3em;
  width: 8em;
`;

const CreateViewButtonContainer = styled(ButtonContainer)`
  justify-content: center;
  margin: 0 auto;
`;

const MainTitle = styled(Heading)`
  text-align: center;
  font-size: 3em;
`;

const Home = () => {
  const [polls, setPolls] = useState(null);
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

  const newAnswer = () => {
    create(answer);
    setAnswer({});
  };

  return (
    <>
      <MainTitle as="h1">Home</MainTitle>
      <CardSection>
        {error && <p>{error}</p>}
        <CardBox>
          {polls &&
            polls.map((poll) => (
              <Polls key={poll.id}>
                <HeadingH2 as="h4">{poll.question}</HeadingH2>
                <DateCreatorContainer>
                  <ShowText>{new Date(poll.createdAt).toDateString()}</ShowText>
                  <ShowText>By: {poll.user.name} </ShowText>
                </DateCreatorContainer>
                <InputButtonContainer>
                  <AnswerInput
                    placeholder="Your answer here"
                    name="answerText"
                    onChange={updateAnswer}
                  />
                  <SaveButton type="submit" onClick={newAnswer} id={poll.id}>
                    Save Answer
                  </SaveButton>
                </InputButtonContainer>
              </Polls>
            ))}
        </CardBox>
      </CardSection>
      <CreateViewButtonContainer>
        <CreateButton type="button" as="a" href="/createpoll">
          Create new poll
        </CreateButton>
        <ViewPollsButton type="button" as="a" href="/polls">
          View all polls
        </ViewPollsButton>
      </CreateViewButtonContainer>
    </>
  );
};

export default Home;
