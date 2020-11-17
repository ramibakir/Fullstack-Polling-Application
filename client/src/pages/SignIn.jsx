import React, { useState } from 'react';
import styled from 'styled-components';
import { get } from '../utils/userService.js';
import {
  Input,
  LoginButton,
  InOutForm,
  FormContainer,
  Heading,
} from '../styles/Styled';

const FormTitle = styled(Heading)`
  text-align: center;
  font-size: 3em;
`;

const SignIn = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const signInUser = () => {
    console.log(user);
    get(user);
  };

  return (
    <>
      <FormTitle className="FormTitle">Log In</FormTitle>
      <FormContainer className="FormCenter">
        <InOutForm className="FormFields" onSubmit={handleSubmit}>
          <div className="FormField">
            <Input
              type="email"
              id="email"
              className="FormFieldInput"
              placeholder="Please enter your email"
              name="email"
              value={user.email}
              onChange={handleSubmit}
            />
          </div>
          <div className="FormField">
            <Input
              type="password"
              id="password"
              className="FormFieldInput"
              placeholder="Please enter your password"
              name="password"
              value={user.password}
              onChange={handleSubmit}
            />
          </div>
          <div>
            <LoginButton className="FormFieldButton" onClick={signInUser}>
              Sign In
            </LoginButton>
            <LoginButton as="a" href="/signup" className="FormFieldLink">
              I don't have a user
            </LoginButton>
          </div>
        </InOutForm>
      </FormContainer>
    </>
  );
};

export default SignIn;
