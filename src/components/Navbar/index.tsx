import React from "react";

import {
  useDisclosure,
  Button,
  Flex,
  Text,
  Link,
  Box,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";
import { CloseIcon, ExternalLinkIcon, HamburgerIcon } from "@chakra-ui/icons";
import MainContainer from "../MainContainer";
import { GithubIcon, LinkedInIcon } from "../Icons";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const btnRef = React.useRef();

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
    >
      <MainContainer>
        <Flex justifyContent="space-between" alignItems="center">
          <Link href="/" _hover={{ textDecor: "none" }}>
            <Text as="span" fontSize="lg" fontWeight="semibold">
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

              <Link href="#contact" variant="primary" px="8">
                Get In Touch
              </Link>
            </Flex>
          </Box>
        </Flex>
      </MainContainer>
    </Box>
  );
};

export default Navbar;
