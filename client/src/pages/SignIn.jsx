import React, { useEffect, useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { email, password };
    const response = await
  };

  if (user) {
    return <div>{user.name}</div>;
  }
  <>
    <div className="FormTitle">
      <a href="#" className="FormTitleLink">
        Sign Up
      </a>
    </div>
    <div className="FormCenter">
      <form className="FormFields" onSubmit={handleSubmit}>
        <div className="FormField">
          <label className="FormFieldLabel" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="FormFieldInput"
            placeholder="Please enter your email"
            name="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div className="FormField">
          <label className="FormFieldLabel" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="FormFieldInput"
            placeholder="Please enter your password"
            name="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <div>
          <button className="FormFieldButton">Sign In</button>{' '}
          <a href="#" className="FormFieldLink">
            Create a user
          </a>
        </div>
      </form>
    </div>
  </>;
};
