import React from "react";

import {
  Flex,
  Text,
  Link,
  Box,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";
import MainContainer from "../MainContainer";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, sm: false });

  if (isMobile) return <MobileNavbar />;

  return (
    <Box
      as="header"
      w="full"
      p="0"
      m="0"
      position="absolute"
      bg="whiteAlpha.800"
      backdropFilter="auto"
      backdropBlur="sm"
      zIndex="sticky"
    >
      <MainContainer>
        <Flex justifyContent="space-between" alignItems="center">
          <Link href="/" _hover={{ textDecor: "none" }}>
            <Text
              as="span"
              fontSize="lg"
              fontWeight="semibold"
              userSelect="none"
            >
              AbrahamDN
            </Text>
          </Link>

          <Box as="nav">
            <Flex as="ul" alignItems="center" gap="6">
              <Stack as="li">
                <Link href="/">
                  <Text as="span">Home</Text>
                </Link>
              </Stack>
              <Stack as="li">
                <Link href="#skills">
                  <Text as="span">Skills</Text>
                </Link>
              </Stack>
              <Stack as="li">
                <Link href="#projects">
                  <Text as="span">Projects</Text>
                </Link>
              </Stack>
              <Stack as="li">
                <Link href="#contact" variant="primary" px="8">
                  Get In Touch
                </Link>
              </Stack>
            </Flex>
          </Box>
        </Flex>
      </MainContainer>
    </Box>
  );
};

export default Navbar;
