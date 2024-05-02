import { Theme } from "../types/themeTypes";

export const themes: Record<string, Theme> = {
  defaultTheme: {
    primaryColor: "305597",
    secondaryColor: "FFFFFF",
    tertiaryColor: "000000",
    font: "Roboto",
  },
  darkTheme: {
    primaryColor: "222222",
    secondaryColor: "FFFFFF",
    tertiaryColor: "305597",
    font: "Helvetica",
  },
};
