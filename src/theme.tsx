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

const fontSizes = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "20px",
  xl: "24px",
  "2xl": "26px",
  "3xl": "32px",
  "4xl": "36px",
  "5xl": "40px",
  "6xl": "56px",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
};

const textStyles = {
  h1: {
    fontSize: { base: "2xl", md: "4xl", xl: "6xl" },
    fontWeight: "semibold",
  },
  h2: {
    fontSize: { base: "xl", md: "4xl", xl: "5xl" },
    fontWeight: "semibold",
  },
  h3: {
    fontSize: { base: "lg", md: "xl", xl: "3xl" },
    fontWeight: "semibold",
  },
  h4: {
    fontSize: { base: "md", md: "xl" },
    fontWeight: "semibold",
  },
  h5: {
    fontSize: { base: "md", md: "lg" },
    fontWeight: "semibold",
  },
  h6: {
    fontSize: { base: "sm", md: "md" },
    fontWeight: "semibold",
  },
  p: {
    fontSize: { base: "sm", md: "md" },
    fontWeight: "semibold",
  },
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
          bgColor: "white",
          borderRadius: "full",
          boxShadow: "inset 0 0 0px 1px black",
          cursor: "default",
          fontSize: { base: "xs", sm: "sm", md: "md" },
          p: "2",
        },
      },
      defaultProps: {
        variant: "outline",
        colorScheme: "blackOnly",
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
      button: "xs",
    },
  },
  colors: {
    black: "#16161D",
    blackOnly: {
      50: "#16161D",
      100: "#16161D",
      200: "#16161D",
      300: "#16161D",
      400: "#16161D",
      500: "#16161D",
      600: "#16161D",
      700: "#16161D",
      800: "#16161D",
      900: "#16161D",
    },
  },
  fonts,
  fontSizes,
  breakpoints,
  textStyles,
});

export default theme;
