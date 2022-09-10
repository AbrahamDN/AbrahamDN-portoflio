import React from "react";
import { Flex, FlexProps, Link, Tooltip } from "@chakra-ui/react";
import { GithubIcon, LinkedInIcon } from "./Icons";

const Socials = (props: FlexProps) => {
  return (
    <Flex gap="4" {...props}>
      <Tooltip label="Github" color="white">
        <Link
          href="https://github.com/AbrahamDN"
          isExternal
          aria-label="Github"
        >
          <GithubIcon w="6" h="6" />
        </Link>
      </Tooltip>

      <Tooltip label="LinkedIn" color="white">
        <Link
          href="https://www.linkedin.com/in/abrahamdn/"
          isExternal
          aria-label="LinkedIn"
        >
          <LinkedInIcon w="6" h="6" />
        </Link>
      </Tooltip>
    </Flex>
  );
};

export default Socials;
