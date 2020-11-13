import React from 'react';

const SignUp = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  <>
    <div className="FormTitle">
      <a href="#" className="FormTitleLink">
        Sign Up
      </a>
    </div>
    <div className="FormCenter">
        <form className="FormFields" onSubmit={}>
            <div className="FormField">
                <label htmlFor="email" className="FormFieldLabel">Email address</label>
                <input type="email" className="FormFieldInput" id="email" placeholder="Please enter your email" name="email" />
            </div>
            <div className="FormField">
                <label htmlFor="password" className="FormFieldLabel">Password</label>
                <input type="password" id="password" placeholder="Please enter your password" name="password" className="FormFieldInput"/>
            </div>
            <div><button className="FormFieldButton">Sign In</button><a href="#" className="FormFieldLink">Create a user</a></div>
        </form>
    </div>
  </>
};
