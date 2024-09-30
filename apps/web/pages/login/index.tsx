import React, { FormEvent, useState } from "react";
import {
  Form,
  GlobalStyle,
  Input,
  Title,
  Wrapper,
  Button,
} from "../../components/components";
import Head from "next/head";
import { signIn } from "next-auth/react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("email", email);
    console.log("password", password);
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="This is my login description" />
      </Head>
      <GlobalStyle />
      <Wrapper>
        <Title>Welcome to our NextJS turbo repo application</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>Login</Button>
        </Form>
        <div>Or</div>
        <Button type="button" onClick={() => signIn("google")}>
          Sign In using Google
        </Button>
      </Wrapper>
    </>
  );
};

export default Index;
