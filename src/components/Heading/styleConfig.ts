import { TextComponent } from "../../types/componentTypes";

export const headingStyles: Record<string, TextComponent> = {
  default: {
    align: "left",
    valign: "middle",
    fontSize: 18,
    bold: true,
  },
  secondary: {
    align: "left",
    valign: "middle",
    fontSize: 16,
    bold: false,
  },
};
