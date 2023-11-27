import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/button';

function Register() {
  return (
    <form className="space-y-6" action="#" method="POST">
      <Input
        label="Name"
        id="name"
        type="text"
        required
        name="name"
      />
      <Input
        label="Email address"
        id="email"
        type="email"
        required
        name="email"
      />
      <Input
        label="Password"
        id="password"
        type="password"
        required
        name="password"
      />
      <Input
        label="Confirm Password"
        id="confirmPassword"
        type="password"
        required
        name="confirmPassword"
      />

      <Button>Sign Up</Button>
    </form>
  );
}

export default Register;
