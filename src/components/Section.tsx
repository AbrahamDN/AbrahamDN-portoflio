import { Flex, FlexProps } from "@chakra-ui/react";
import React from "react";

const Section = (props: FlexProps) => {
  return (
    <Flex
      as="section"
      minH="100vh"
      direction="column"
      alignItems="center"
      justifyContent="center"
      scrollSnapAlign="start"
      {...props}
    />
  );
};

export default Section;
