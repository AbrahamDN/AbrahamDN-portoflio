import React, { useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import { Container, Stack, StackProps } from "@chakra-ui/react";

const Section = ({ children, ...otherProps }: StackProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const hasPastVisibility = entry?.boundingClientRect?.y < 0;

  return (
    <Stack
      as="section"
      h="fit-content"
      scrollSnapAlign={hasPastVisibility ? "end" : "start"}
      {...otherProps}
    >
      <Container
        ref={ref}
        maxWidth={{ base: "container.lg", "2xl": "container.xl" }}
        minH="100vh"
        h="full"
        py={{ base: "28", md: "32" }}
        px={{ base: "6", md: "12", lg: "24" }}
      >
        {children}
      </Container>
    </Stack>
  );
};

export default Section;
