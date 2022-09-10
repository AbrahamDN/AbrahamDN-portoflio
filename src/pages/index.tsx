import { DownloadIcon } from "../components/Icons";
import {
  AspectRatio,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  Tooltip,
  useBreakpointValue,
  useClipboard,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Socials from "../components/Socials";
import Image from "next/image";
import Card from "../components/Card";
import { featuredCards } from "../../data/projects";
import SectionHeading from "../components/SectionHeading";
import { CheckIcon, CopyIcon } from "@chakra-ui/icons";
import ContactForm from "../components/ContactForm";
import Head from "next/head";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, sm: false });
  const { hasCopied, onCopy } = useClipboard("mail@abrahamdn.com");

  return (
    <Stack h="100vh" scrollSnapType="y mandatory" overflowY="scroll">
      <Head>
        <title>Abraham DN Portfolio</title>
        <link rel="icon" href="/adn.svg" />
        <meta
          name="description"
          content="Abraham D Ndinga - web developer portfolio."
        />
      </Head>

      <Navbar />

      <Divider
        h="100vh"
        orientation="vertical"
        variant="gradient"
        position="fixed"
        left="24"
      />

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
              fontSize={{ base: "2xl", md: "4xl", xl: "56px" }}
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
        <SectionHeading title="Get in touch" />

        <Flex
          mt={["6", "14"]}
          gap={["6", "14"]}
          flexDir="column"
          alignItems="center"
        >
          <Tooltip
            color="white"
            label={hasCopied ? "Copied email" : "Copy email"}
            closeOnClick={false}
          >
            <Button
              onClick={onCopy}
              w="fit-content"
              p="6"
              variant="primary"
              fontSize="sm"
              fontWeight="normal"
            >
              <Text as="span">{"mail@abrahamdn.com"}</Text>
              {hasCopied ? <CheckIcon ml="2" /> : <CopyIcon ml="2" />}
            </Button>
          </Tooltip>

          <ContactForm />
        </Flex>
      </Section>
    </Stack>
  );
};

export default Index;
