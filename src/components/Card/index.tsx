import React, { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import { motion } from "framer-motion";
import {
  AspectRatio,
  Box,
  Flex,
  keyframes,
  Link,
  LinkOverlay,
  Stack,
  Tag,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import { GithubIcon } from "../Icons";
import Image from "next/image";
import { CardProps } from "./Card.types";

const Card = ({
  image,
  tags,
  title,
  description,
  previewLink,
  repoLink,
  reverse,
}: CardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const isMobile = useBreakpointValue({ base: true, sm: false });

  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {
    threshold: 0.3,
  });
  const isIntersecting = !!entry?.isIntersecting;

  const slideUp = keyframes`
    0% { transform: translateY(100%); opacity: 0; }
    25% { opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  `;
  const animation = `${slideUp} 600ms ease-in`;

  useEffect(() => {
    if (isIntersecting) setIsVisible(true);
  }, [isIntersecting]);

  return (
    <Flex
      as={motion.article}
      ref={ref}
      animation={isVisible && animation}
      opacity={isVisible ? 1 : 0}
      gap="8"
      alignItems="center"
      flexDirection={
        isMobile ? "column-reverse" : reverse ? "row-reverse" : "row"
      }
    >
      <Stack flex={1} gap="2">
        <Flex mb="2" gap="4" flexWrap="wrap">
          {tags?.map((tag, idx) => (
            <Tag key={`tag-${idx}`} size={{ base: "md", md: "lg" }}>
              {tag.title}
            </Tag>
          ))}
        </Flex>

        <Box as="h3" textStyle="h3">
          {title}
        </Box>

        <Text noOfLines={4}>{description}</Text>

        {(previewLink || repoLink) && (
          <Flex gap="4">
            {previewLink && (
              <Link href={previewLink} isExternal>
                Preview <ExternalLinkIcon w="5" h="5" mb="1" />
              </Link>
            )}

            {repoLink && (
              <Link href={repoLink} isExternal>
                Code <GithubIcon w="5" h="5" mb="1" />
              </Link>
            )}
          </Flex>
        )}
      </Stack>

      <AspectRatio flex={1} w="full" ratio={isMobile ? 21 / 9 : 4 / 3}>
        <LinkOverlay href={previewLink} isExternal aria-label={title}>
          {isVisible && (
            <Image
              src={image}
              alt="Preview"
              width={1097}
              height={823}
              layout="intrinsic"
            />
          )}
        </LinkOverlay>
      </AspectRatio>
    </Flex>
  );
};

export default Card;
