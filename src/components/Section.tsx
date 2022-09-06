import { Container, Flex, Stack, StackProps } from "@chakra-ui/react";
import React from "react";

const Section = ({ children, ...otherProps }: StackProps) => {
  return (
    <Stack as="section" minH="100vh" scrollSnapAlign="start" {...otherProps}>
      <Container maxWidth={{ base: "container.lg", "2xl": "container.xl" }}>
        {children}
      </Container>
    </Stack>
  );
};

export default Section;
