import { Container, Flex, Stack, StackProps } from "@chakra-ui/react";
import React from "react";

const Section = ({ children, ...otherProps }: StackProps) => {
  return (
    <Stack as="section" h="fit-content" scrollSnapAlign="start" {...otherProps}>
      <Container
        maxWidth={{ base: "container.lg", "2xl": "container.xl" }}
        minH="100vh"
        h="full"
        py="24"
        px={{ base: "6", md: "12", lg: "24" }}
      >
        {children}
      </Container>
    </Stack>
  );
};

export default Section;
