import { Theme } from "../types/themeTypes";

export const themes: Record<string, Theme> = {
  defaultTheme: {
    primaryColor: "305597",
    secondaryColor: "FFFFFF",
    tertiaryColor: "D9D9D9",
    accentColor: "FFA500",
    textColor: "2D2C2C",
    font: "Roboto",
  },
  darkTheme: {
    primaryColor: "222222",
    secondaryColor: "FFFFFF",
    tertiaryColor: "305597",
    accentColor: "FFA500",
    textColor: "FFFFFF",
    font: "Helvetica",
  },
};
