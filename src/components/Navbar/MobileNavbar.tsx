import React from "react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Box,
  Text,
  Link,
  Tooltip,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import MainContainer from "../MainContainer";
import { GithubIcon, LinkedInIcon } from "../Icons";
import NavItem from "./NavItem";

const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const CloseBtnRef = React.useRef();

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
            <Text as="span" fontSize="xl" fontWeight="semibold">
              AbrahamDN
            </Text>
          </Link>

          <Button
            ref={btnRef}
            w="fit-content"
            colorScheme="transparent"
            color="black"
            aria-label="Open navigation bar"
            p="0"
            onClick={onOpen}
          >
            <HamburgerIcon w="6" h="6" />
          </Button>
        </Flex>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          initialFocusRef={CloseBtnRef}
          size="full"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader
              display="flex"
              flexDir="row-reverse"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button
                ref={CloseBtnRef}
                w="fit-content"
                colorScheme="transparent"
                color="black"
                aria-label="Close navigation bar"
                p="0"
                onClick={onClose}
              >
                <CloseIcon w="4" h="4" />
              </Button>

              <Link href="/" _hover={{ textDecor: "none" }}>
                <Text>AbrahamDN</Text>
              </Link>
            </DrawerHeader>

            <DrawerBody as="nav">
              <Flex
                as="ul"
                h="full"
                pt="14"
                flexDir="column"
                alignItems="center"
                textAlign="center"
                fontSize="xl"
              >
                <NavItem text="Home" href="/" onClick={onClose} />
                <NavItem text="Skills" href="#skills" onClick={onClose} />
                <NavItem
                  text="Projects"
                  href="#projects"
                  onClick={onClose}
                  noDivider
                />

                <Link
                  href="#contact"
                  variant="primary"
                  mt="4"
                  onClick={onClose}
                >
                  Get In Touch
                </Link>
              </Flex>
            </DrawerBody>

            <DrawerFooter>
              <Flex w="full" p="6" justifyContent="center" gap="4">
                <Tooltip label="Github" color="white">
                  <Link href="https://github.com/AbrahamDN" isExternal>
                    <GithubIcon w="6" h="6" />
                  </Link>
                </Tooltip>

                <Tooltip label="LinkedIn" color="white">
                  <Link
                    href="https://www.linkedin.com/in/abrahamdn/"
                    isExternal
                  >
                    <LinkedInIcon w="6" h="6" />
                  </Link>
                </Tooltip>
              </Flex>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </MainContainer>
    </Box>
  );
};

export default MobileNavbar;
