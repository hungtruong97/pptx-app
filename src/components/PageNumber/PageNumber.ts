// src/components/Heading.ts
import { themes } from "../../config/themeConfig";
import { pageNumberStyles } from "./styleConfig";

export function addPageNumber(
  slide: any,
  x: number,
  y: number,
  w: number,
  h: number,
  pageNumber: string,
  themeName: string,
  styleName: string = "default"
): void {
  // Get the theme based on the theme name
  const theme = themes[themeName];

  // Get the specific style from headingStyles
  const style = pageNumberStyles[styleName];

  // Add heading text with specified options
  slide.addText(pageNumber, {
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
