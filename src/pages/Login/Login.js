import React, { useRef } from "react";
import {
  Wrapper,
  Content,
  InputWrapper,
  Button,
  Input,
  Label,
  Title,
} from "./Login.styles";

const Login = () => {
  const email = useRef("");
  const password = useRef("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.table(email.current.value, password.current.value);
  };
  return (
    <Wrapper>
      <Content>
        <Title>Login</Title>
        <form action="submit" onSubmit={onSubmitHandler}>
          <InputWrapper>
            <Label htmlFor="email">Email</Label>
            <Input type="email" ref={email} required />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">Password</Label>
            <Input type="password" ref={password} required />
          </InputWrapper>
          <Button type="submit">Sign In</Button>
        </form>
        <div className="formFooter">
          New Here?
          <a href="/register">Create an Account</a>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Login;
