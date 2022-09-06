import { Heading, Stack, StackProps } from "@chakra-ui/react";
import Section from "./Section";

export const Main = (props: StackProps) => (
  <Stack
    as="main"
    w="full"
    h="100vh"
    scrollSnapType="y mandatory"
    overflowY="scroll"
    {...props}
  >
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
