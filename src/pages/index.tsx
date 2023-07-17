import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  Stack,
  Tag,
  Text,
  Tooltip,
  useClipboard,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Hero } from "../components/Hero";
import Section from "../components/Section";
import Card from "../components/Card";
import { featuredCards } from "../../data/projects";
import SectionHeading from "../components/SectionHeading";
import { CheckIcon, CopyIcon } from "@chakra-ui/icons";
import ContactForm from "../components/ContactForm";
import Head from "next/head";
import Footer from "../components/Footer";

const scrollbarStyles = {
  "&::-webkit-scrollbar": {
    w: "3.5",
  },
  "&::-webkit-scrollbar-track": {
    bgColor: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    border: "4px solid white",
    borderRadius: "full",
    bgColor: "black",
  },
};

const Index = () => {
  const { hasCopied, onCopy } = useClipboard("mail@abrahamdn.com");

  return (
    <Stack
      h="100vh"
      scrollSnapType="y mandatory"
      overflowY="scroll"
      position="relative"
      sx={scrollbarStyles}
    >
      <Head>
        <title>Abraham DN Portfolio</title>
        <link rel="icon" href="/adn.svg" />
        <meta
          name="description"
          content="Abraham Dieudonne Ndinga - web developer portfolio."
        />
      </Head>

      <Navbar />

      <Divider
        h="90vh"
        orientation="vertical"
        variant="gradient"
        display={{ base: "none", xl: "block" }}
        position="fixed"
        left="24"
        top="50%"
        transform="translateY(-50%)"
      />

      <Hero />

      <Center>
        <Divider variant="gradient" maxW="container.xl" />
      </Center>

      <Section id="skills">
        <Stack h="full" justifyContent="center" gap={["8", "8", "20"]}>
          <SectionHeading>Tech Stack</SectionHeading>

          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            columnGap="20"
            rowGap="8"
          >
            <Stack gap="2">
              <Box as="h3" textStyle="h3">
                Frontend
              </Box>
              <Flex flexWrap="wrap" gap="2">
                <Tag variant="outline">ReactJS</Tag>
                <Tag variant="outline">NextJS</Tag>
                <Tag variant="outline">SCSS</Tag>
                <Tag variant="outline">Redux</Tag>
                <Tag variant="outline">Javascript</Tag>
                <Tag variant="outline">Typescript</Tag>
              </Flex>
            </Stack>

            <Stack gap="2">
              <Box as="h3" textStyle="h3">
                Backend
              </Box>
              <Flex flexWrap="wrap" gap="2">
                <Tag variant="outline">Contentful</Tag>
                <Tag variant="outline">MongoDB</Tag>
                <Tag variant="outline">Firebase</Tag>
                <Tag variant="outline">NodeJS</Tag>
              </Flex>
            </Stack>

            <Stack gap="2">
              <Box as="h3" textStyle="h3" minW="max-content">
                Design/ Others
              </Box>
              <Flex flexWrap="wrap" gap="2">
                <Tag variant="outline">Figma</Tag>
                <Tag variant="outline">Jira</Tag>
              </Flex>
            </Stack>
          </Grid>
        </Stack>
      </Section>

      <Center>
        <Divider variant="gradient" maxW="container.xl" />
      </Center>

      <Section id="projects">
        <SectionHeading>Featured projects</SectionHeading>

        <Stack
          gap={{ base: "24", md: "32" }}
          mt="28"
          scrollSnapType="y mandatory"
        >
          {featuredCards?.map((card, idx) => (
            <Card key={`card-${idx}`} {...card} reverse={idx % 2 === 1} />
          ))}
        </Stack>
      </Section>

      <Center>
        <Divider variant="gradient" maxW="container.xl" />
      </Center>

      <Section id="contact">
        <SectionHeading>Get in touch</SectionHeading>

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
              <Text as="span">{"abrahamdndinga@gmail.com"}</Text>
              {hasCopied ? <CheckIcon ml="2" /> : <CopyIcon ml="2" />}
            </Button>
          </Tooltip>

          <ContactForm />
        </Flex>
      </Section>

      <Center>
        <Divider variant="gradient" maxW="container.xl" />
      </Center>

      <Footer />
    </Stack>
  );
};

export default Index;
