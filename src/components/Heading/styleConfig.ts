import { TextComponent } from "../../types/componentTypes";

export const headingStyles: Record<string, TextComponent> = {
  default: {
    align: "left",
    valign: "top",
    fontSize: 18,
    bold: true,
  },
  secondary: {
    align: "left",
    valign: "top",
    fontSize: 16,
    bold: false,
  },
};
