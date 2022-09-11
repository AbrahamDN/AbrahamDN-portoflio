import {
  Box,
  Center,
  Container,
  Flex,
  FlexProps,
  HStack,
  Link,
  Text,
} from "@chakra-ui/react";
import { DownloadIcon } from "./Icons";
import MainContainer from "./MainContainer";

const Footer = (props: FlexProps) => (
  <Box
    as="footer"
    w="full"
    p="0"
    m="0"
    h="fit-content"
    scrollSnapAlign="center"
    fontSize={{ base: "xs", md: "sm" }}
  >
    <MainContainer>
      <Flex
        py="2"
        flexDir={{ base: "column", sm: "row" }}
        alignItems="center"
        justifyContent="space-between"
        gap="4"
        {...props}
      >
        <HStack gap="2">
          <Link href="https://github.com/AbrahamDN" isExternal>
            Github
          </Link>
          <Link href="https://www.linkedin.com/in/abrahamdn/" isExternal>
            LinkedIn
          </Link>
        </HStack>

        <Link
          variant="primary"
          href="/assets/abrahamdn-cv.pdf"
          target="_blank"
          rel="noopener"
        >
          <Text as="span">Download CV</Text>
          <DownloadIcon w="5" h="5" ml="0.5" />
        </Link>

        <Text as="span">&copy; 2022 - AbrahamDN</Text>
      </Flex>
    </MainContainer>
  </Box>
);

export default Footer;
