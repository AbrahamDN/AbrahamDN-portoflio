import { Container, ContainerProps } from "@chakra-ui/react";

const MainContainer = (props: ContainerProps) => (
  <Container
    maxWidth={{ base: "container.lg", "2xl": "container.xl" }}
    px="6"
    py="4"
    {...props}
  />
);

export default MainContainer;
