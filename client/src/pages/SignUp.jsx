import React, { useState } from 'react';
import { Button, Box, Input } from '@chakra-ui/core';
import { create } from '../utils/userService';

const SignUp = () => {
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
  };

  return (
    <>
      <div className="FormTitle">SIGN UP</div>
      <Box className="FormCenter">
        <form className="FormFields" onSubmit={handleSubmit}>
          <div className="FormField">
            <label className="FormFieldLabel" htmlFor="name">
              Name
            </label>
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
            <label className="FormFieldLabel" htmlFor="email">
              Email address
            </label>
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
            <label className="FormFieldLabel" htmlFor="password">
              Password
            </label>
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
            <Button className="FormFieldButton" onClick={createUser}>
              Sign Up
            </Button>
            <Button as="a" href="/signin" className="FormFieldLink">
              I already have a user
            </Button>
          </div>
        </form>
      </Box>
    </>
  );
};

export default SignUp;
