import React, { useState } from 'react';
import { FormInput } from './FormInput';
export const RegistrationPage = () => {
  const [formValues, setFormValues] = useState({});

  const handleChange = e => {
    const key = e.target.name;
    const { value } = e.target;
    setFormValues({ ...formValues, [key]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Mock password fields matching
    if (formValues.password !== formValues.passwordVerify) {
      alert('Passwords must match');
    } else {
      alert('Form submitted');
      //   Handle api call, redirect, and or clearing the form here
    }
  };

  return (
    <>
      <h1>Registration Page</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          isRequired
          handleChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          isRequired
          handleChange={handleChange}
        />

        <FormInput
          label="Password Verify"
          type="password"
          name="passwordVerify"
          isRequired
          handleChange={handleChange}
        />
        <input className="btn btn-success" type="submit" value="Submit" />
      </form>
    </>
  );
};
