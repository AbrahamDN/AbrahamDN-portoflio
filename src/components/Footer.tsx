import { Box, Flex, FlexProps, HStack, Link, Text } from "@chakra-ui/react";
import { DownloadIcon } from "./Icons";
import MainContainer from "./MainContainer";
import { content } from "../../data/content";

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
          <Link href={content.github} isExternal>
            Github
          </Link>
          <Link href={content.linkedIn} isExternal>
            LinkedIn
          </Link>
        </HStack>

        <Link
          variant="primary"
          href={content.cv}
          target="_blank"
          rel="noopener"
        >
          <Text as="span">Download CV</Text>
          <DownloadIcon w="5" h="5" ml="0.5" />
        </Link>

        <Text as="span">{content.copyright}</Text>
      </Flex>
    </MainContainer>
  </Box>
);

export default Footer;
