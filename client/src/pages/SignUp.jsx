import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Input,
  LoginButton,
  InOutForm,
  FormContainer,
  Heading,
} from '../styles/Styled';
import { create } from '../utils/userService';

const FormTitle = styled(Heading)`
  text-align: center;
  font-size: 3em;
`;

const SignUp = (props) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const createUser = () => {
    create(user);
    props.history.push('/');
  };

  return (
    <>
      <FormTitle className="FormTitle">SIGN UP</FormTitle>
      <FormContainer className="FormCenter">
        <InOutForm className="FormFields" onSubmit={handleSubmit}>
          <div className="FormField">
            <Input
              type="text"
              id="name"
              className="FormFieldInput"
              placeholder="Please enter your name"
              name="name"
              value={user.name}
              onChange={handleSubmit}
            />
          </div>
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
            <LoginButton className="FormFieldButton" onClick={createUser}>
              Sign Up
            </LoginButton>
            <LoginButton as="a" href="/signin" className="FormFieldLink">
              I already have a user
            </LoginButton>
          </div>
        </InOutForm>
      </FormContainer>
    </>
  );
};

export default SignUp;
