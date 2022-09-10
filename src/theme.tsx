import { extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Poppins', sans-serif`,
};

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const theme = extendTheme({
  styles: {
    global: {
      body: {
        scrollBehavior: "smooth",
        fontSize: { base: "sm", md: "md" },
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "full",
      },
      variants: {
        outline: { borderColor: "black" },
        primary: {
          fontSize: "xl",
          border: "1px solid black",
          px: "10",
        },
      },
    },
    Divider: {
      variants: {
        gradient: {
          border: "1px solid",
          borderImage:
            "radial-gradient(circle, rgba(0,0,0, 0.25) 0%, rgba(255,255,255,0) 100%)",
          borderWidth: "2px",
          borderStyle: "solid",
          borderImageSlice: 1,
          borderTop: "none",
        },
      },
    },
    Link: {
      variants: {
        primary: {
          w: "fit-content",
          fontWeight: "semibold",
          border: "1px solid black",
          borderRadius: "full",
          px: "10",
          py: "3",
          _hover: {
            textDecor: "none",
          },
          _focus: {
            textDecor: "none",
          },
        },
      },
    },
    Tag: {
      baseStyle: {
        container: {
          bg: "white",
          bgColor: "white",
          borderRadius: "full",
          boxShadow: "inset 0 0 0px 1px black",
          cursor: "default",
          fontSize: { base: "xs", sm: "sm", md: "md" },
          p: "2",
        },
      },
    },
  },
  semanticTokens: {
    colors: {
      text: {
        default: "#16161D",
        _dark: "#ade3b8",
      },
      heroGradientStart: {
        default: "#7928CA",
        _dark: "#e3a7f9",
      },
      heroGradientEnd: {
        default: "#FF0080",
        _dark: "#fbec8f",
      },
    },
    radii: {
      button: "12px",
    },
  },
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
});

export default theme;
