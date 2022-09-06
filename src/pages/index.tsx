import { Heading, Stack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";

const Index = () => (
  <Stack h="100vh" scrollSnapType="y mandatory" overflowY="scroll">
    <Navbar />

    <Section bgColor="gray.200">
      <Heading>Section 1</Heading>
    </Section>
    <Section id="projects" bgColor="gray.400">
      <Heading>Section 2</Heading>
    </Section>
    <Section id="contact" bgColor="gray.600">
      <Heading>Section 3</Heading>
    </Section>
  </Stack>
);

export default Index;
