import React from "react";
import { Stack, Text, Link, Divider, Center } from "@chakra-ui/react";

type NavItemProps = {
  onClick: (val: any) => any;
  href: string;
  text: string;
  noDivider?: boolean;
};

function NavItem({ onClick, noDivider, href, text }: NavItemProps) {
  return (
    <Stack as="li" className="nav-item" minW="40">
      <Link
        href={href}
        py="4"
        _hover={{ textDecor: "none" }}
        _focus={{ textDecor: "none" }}
        onClick={onClick}
      >
        <Text as="span" fontSize="lg" fontWeight="semibold">
          {text}
        </Text>
      </Link>

      {!noDivider && (
        <Center>
          <Divider
            orientation="horizontal"
            borderColor="black"
            w="20"
            transition="width 300ms ease-in-out"
            variant="gradient"
          />
        </Center>
      )}
    </Stack>
  );
}

export default NavItem;
