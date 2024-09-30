import { Button, GlobalStyle, Title, Wrapper } from "../components/components";
import Head from "next/head";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="This is my dashboard description" />
      </Head>
      <GlobalStyle />
      <Wrapper>
        <Title>Dashboard</Title>
        <Button type="button" onClick={() => router.push("/login")}>
          Go to login
        </Button>
      </Wrapper>
    </>
  );
};

export default Index;
