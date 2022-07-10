import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../../firebase.js";
import styled from "styled-components";
import Background from "../Assests/Background.gif";
const LogIn = () => {
  // var maxNumber = 99999;
  // var randomNumber = Math.floor(Math.random() * maxNumber + 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/account" />;
  }
  return (
    <Login>
      <SignIn>
        <Form onSubmit={handleSubmit}>
          <FormTitle>Log In</FormTitle>
          <label for="email">Sign-in ID(email address)</label>
          <input type="email" name="email" placeholder="Email" />
          <label for="password">Password</label>
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Submit</button>
        </Form>
      </SignIn>
    </Login>
  );
};

const Login = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${Background});
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-position: center;
  background-size: cover;
  color: white;
`;
const SignIn = styled.div`
  display: flex;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;

  > label {
    margin: 20px 0;
    align-self: start;
  }

  > input {
    color: white;
    height: 40px !important;
    width: 250px;
    border: 1px solid lightgrey;
    background: transparent;
    text-align: left;

    ::placeholder {
      padding: 20px;
    }
  }

  > button {
    background: transparent;
    color: white;
    padding: 15px;
    width: 100%;
    border: 1px solid lightgrey;
    border-radius: 2px;
    cursor: pointer;
    margin-top: 30px;
    :hover {
      background: white;
      color: black;
    }
  }
`;

const FormTitle = styled.h2`
  text-align: center;
  font-weight: 400;
`;



export default LogIn;
