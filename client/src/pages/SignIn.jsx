import React, { useEffect, useState } from 'react';
import { Button, Box, Input } from '@chakra-ui/core';
import { get } from '../utils/userService.js';

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
      <Box className="FormCenter">
        <form className="FormFields" onSubmit={handleSubmit}>
          <Box className="FormField">
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
          </Box>
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
            <Button className="FormFieldButton" onClick={signInUser}>
              Sign In
            </Button>
            <Button as="a" href="/signup" className="FormFieldLink">
              I don't have a user
            </Button>
          </div>
        </form>
      </Box>
    </>
  );
};

export default SignIn;
