import { DownloadIcon } from "../components/Icons";
import {
  AspectRatio,
  Divider,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Socials from "../components/Socials";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, sm: false });

  return (
    <Stack h="100vh" scrollSnapType="y mandatory" overflowY="scroll">
      <Navbar />

      <Section id="hero">
        <Flex minH="full" alignItems="center" gap="6">
          <Stack
            // flex="2"
            maxW={{ base: "full", sm: "40ch", xl: "80ch" }}
            gap="4"
          >
            <Heading
              as="h1"
              textStyle="h1"
              fontSize={{ base: "4xl", xl: "56px" }}
              textTransform="uppercase"
            >
              Abraham D Ndinga
            </Heading>

            <Text maxW="prose">
              I'm an experienced front-end developer with about 3 years of
              experience, passionate about accessibility, performance and user
              experience. My key skills consist of JavaScript, React, Styled
              Components, Storybook & Redux all whilst utilising GitLab's CI/CD
              pipelines.
            </Text>

            <Link variant="primary">
              <Text as="span">Download CV</Text>
              <DownloadIcon w="5" h="5" ml="0.5" />
            </Link>

            {isMobile && (
              <Divider
                w="1"
                h="68px"
                orientation="vertical"
                variant="gradient"
              />
            )}

            <Socials />
          </Stack>

          {!isMobile && (
            <AspectRatio flex="1" w="full" ratio={1}>
              <Flex w="full" h="80" bgColor="gray.600" borderRadius="full" />
            </AspectRatio>
          )}
        </Flex>
      </Section>
      <Section id="projects" bgColor="gray.400">
        <Heading>Section 2</Heading>
      </Section>
      <Section id="contact" bgColor="gray.600">
        <Heading>Section 3</Heading>
      </Section>
    </Stack>
  );
};

export default Index;
