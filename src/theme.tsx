import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  components: {
    Divider: {
      variants: {
        gradient: {
          border: "1px solid",
          borderImage:
            "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%)",
          borderWidth: "2px",
          borderStyle: "solid",
          borderImageSlice: 1,
          borderTop: "none",
        },
      },
    },
    Button: {
      baseStyle: {
        borderRadius: "full",
        pt: "6",
        pb: "7",
      },
      variants: {
        primary: {
          fontSize: "xl",
          border: "1px solid black",
          px: "10",
        },
      },
    },
    Link: {
      variants: {
        primary: {
          fontWeight: "semibold",
          border: "1px solid black",
          borderRadius: "full",
          px: "10",
          py: "2",
          pb: "3",
          _hover: {
            textDecor: "none",
          },
          _focus: {
            textDecor: "none",
          },
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
