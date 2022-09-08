import { FlexProps } from "@chakra-ui/react";

export type CardProps = {
  image: string;
  mobileImage?: string;
  tags: {
    title: string;
  }[];
  title: string;
  description: string;
  previewLink?: string;
  repoLink?: string;
  reverse?: boolean;
} & FlexProps;
