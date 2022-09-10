import React from "react";
import {
  AspectRatio,
  Button,
  Flex,
  Heading,
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
  const isMobile = useBreakpointValue({ base: true, sm: false });
  return (
    <Flex
      as="article"
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

        <Heading as="h3" fontSize={{ base: "xl", md: "3xl" }}>
          {title}
        </Heading>

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
        <LinkOverlay href={previewLink} isExternal>
          <Image
            src={image}
            alt="Preview"
            width={1097}
            height={823}
            layout="intrinsic"
          />
        </LinkOverlay>
      </AspectRatio>
    </Flex>
  );
};

export default Card;
