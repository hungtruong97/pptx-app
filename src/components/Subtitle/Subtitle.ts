// src/components/Heading.ts
import { themes } from "../../config/themeConfig";
import { subtitleStyles } from "./styleConfig";

export function addSubtitle(
  slide: any,
  x: number,
  y: number,
  w: number,
  h: number,
  headingText: string,
  themeName: string,
  styleName: string = "default"
): void {
  // Get the theme based on the theme name
  const theme = themes[themeName];

  // Get the specific style from headingStyles
  const style = subtitleStyles[styleName];

  // Add heading text with specified options
  slide.addText(headingText, {
    x,
    y,
    w,
    h, // Position and size
    align: style.align, // Alignment
    valign: style.valign, // Vertical alignment
    fontSize: style.fontSize, // Font size
    bold: style.bold, // Bold text
    color: theme.tertiaryColor, // Font color
    fontFace: theme.font, // Font type
  });
}
