import { DownloadIcon } from "../components/Icons";
import {
  AspectRatio,
  Center,
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
import Image from "next/image";
import Card from "../components/Card";
import { featuredCards } from "../../data/projects";
import SectionHeading from "../components/SectionHeading";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, sm: false });

  return (
    <Stack h="100vh" scrollSnapType="y mandatory" overflowY="scroll">
      <Navbar />

      <Section
        id="hero"
        sx={{ ".chakra-container": { pr: { base: "6", sm: 0 } } }}
      >
        <Flex minH="full" alignItems="center" gap="6">
          <Stack
            // flex="2"
            maxW={{ base: "full", sm: "40ch", xl: "prose" }}
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
            <AspectRatio
              flex="1"
              w="full"
              ratio={1}
              display="flex"
              alignItems="center"
            >
              <Image
                className="w-full h-full object-cover"
                src="/assets/adn-avatar.svg"
                alt="abrahamdn portrait"
                width={533}
                height={442}
                // layout="responsive"
              />
            </AspectRatio>
          )}
        </Flex>
      </Section>

      <Center>
        <Divider variant="gradient" maxW="container.xl" />
      </Center>

      <Section id="projects">
        <SectionHeading title="Featured projects" />

        <Stack gap={{ base: "24", md: "32" }} mt="28">
          {featuredCards?.map((card, idx) => (
            <Card key={`card-${idx}`} {...card} reverse={idx % 2 === 1} />
          ))}
        </Stack>
      </Section>

      <Center>
        <Divider variant="gradient" maxW="container.xl" />
      </Center>

      <Section id="contact">
        <Heading>Section 3</Heading>
      </Section>
    </Stack>
  );
};

export default Index;
