import { Theme } from "../types/themeTypes";

export const themes: Record<string, Theme> = {
  defaultTheme: {
    primaryColor: "305597",
    secondaryColor: "FFFFFF",
    tertiaryColor: "D9D9D9",
    accentColor: "FFA500",
    font: "Roboto",
  },
  darkTheme: {
    primaryColor: "222222",
    secondaryColor: "FFFFFF",
    tertiaryColor: "305597",
    accentColor: "FFA500",
    font: "Helvetica",
  },
};
