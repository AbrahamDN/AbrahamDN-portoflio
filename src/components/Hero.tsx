import {
  AspectRatio,
  Box,
  Divider,
  Flex,
  Link,
  Stack,
  StackProps,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { DownloadIcon } from "./Icons";
import Section from "./Section";
import Socials from "./Socials";

export const Hero = (props: StackProps) => {
  const isMobile = useBreakpointValue({ base: true, sm: false });

  return (
    <Section
      id="hero"
      sx={{ ".chakra-container": { pr: { base: "6", sm: 0 } } }}
      {...props}
    >
      <Flex minH="full" alignItems="center" gap="6">
        <Stack
          // flex="2"
          maxW={{ base: "full", sm: "40ch", xl: "prose" }}
          gap="4"
        >
          <Box as="h1" textStyle="h1" textTransform="uppercase">
            Abraham D Ndinga
          </Box>

          <Text maxW="prose">
            Experienced front-end developer with about 3 years of experience,
            passionate about accessibility, performance and user experience. My
            key skills consist of JavaScript, React, Styled Components,
            Storybook & Redux all whilst utilising GitLab's CI/CD pipelines.
          </Text>

          <Link
            variant="primary"
            href="/assets/abrahamdn-cv-2.pdf"
            target="_blank"
            rel="noopener"
          >
            <Text as="span">Download CV</Text>
            <DownloadIcon w="5" h="5" ml="0.5" />
          </Link>

          {isMobile && (
            <Divider w="1" h="68px" orientation="vertical" variant="gradient" />
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
  );
};

Hero.defaultProps = {
  title: "Abraham DN",
};
