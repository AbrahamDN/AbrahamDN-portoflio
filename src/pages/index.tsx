import { Stack } from "@chakra-ui/react";
import { Container } from "../components/MainContainer";
import { Main } from "../components/Main";
import Navbar from "../components/Navbar";

const Index = () => (
  <Stack minH="100vh">
    <Navbar />
    <Main color="black" />
  </Stack>
);

export default Index;
