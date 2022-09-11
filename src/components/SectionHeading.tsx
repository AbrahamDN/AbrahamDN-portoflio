import { Box, Divider, HeadingProps, Text } from "@chakra-ui/react";
import React from "react";

const SectionHeading = (props: HeadingProps) => {
  return (
    <Box
      as="h2"
      textStyle="h2"
      display="flex"
      alignItems="center"
      gap="8"
      {...props}
    >
      <Text as="span">{props.children}</Text>
      <Divider flex={[1, "initial"]} variant="gradient" w="30%" />
    </Box>
  );
};

export default SectionHeading;
