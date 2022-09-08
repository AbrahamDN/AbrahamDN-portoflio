import { Divider, Heading, HeadingProps, Text } from "@chakra-ui/react";
import React from "react";

const SectionHeading = (props: HeadingProps & { title: string }) => {
  return (
    <Heading flex={1} display="flex" alignItems="center" gap="8" {...props}>
      <Text as="span" fontSize={{ base: "2xl", md: "4xl" }}>
        {props.title}
      </Text>
      <Divider variant="gradient" w="30%" />
    </Heading>
  );
};

export default SectionHeading;
